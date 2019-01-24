import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Button,
  Typography
} from "@material-ui/core";

const styles = {
  // card: {
  //   display: "flex",
  //   // alignItems: "center"
  //   maxWidth: "75%"
  // },
  // cardMedia: {},
  // resultsWrapper: {
  //   // display: "flex",
  //   justifyContent: "center"
  // }
};

const ResultsCard = props => {
  //   const { classes } = props;
  return (
    <Card style={styles.card} id={props.title + " Card"}>
      <CardContent>
        <Grid container>
          <Grid item sm={8}>
            <div>
              <h2>{props.title}</h2>
              <h3>{props.author}</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Typography component="div" display="inline">
              <Grid container justify="center" alignItems="center">
                <Grid item xs={6}>
                  <Button href={props.link} fullWidth>
                    View More
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    id={props.id}
                    onClick={event => props.saveBook(event)}
                    fullWidth
                  >
                    Save Book
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={2}>
            <CardMedia style={styles.cardMedia}>
              <img src={props.image} alt={"Image of" + props.title} />
            </CardMedia>
          </Grid>
          <Grid item lg={10}>
            <p>{props.description}</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ResultsWrapper = props => {
  console.log(props);
  return props.results.length === 0 ? (
    <Grid item xs={11} sm={11}>
      <div>
        <h1> Results </h1>
      </div>
    </Grid>
  ) : (
    <Grid item xs={11} sm={11}>
      <div style={styles.resultsWrapper}>
        <h1> Results </h1>
        {props.results.items.map(book => {
          return (
            <ResultsCard
              key={book.id}
              id={book.id}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              link={book.volumeInfo.previewLink}
              saveBook={props.saveBook}
            />
          );
        })}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(ResultsWrapper);
