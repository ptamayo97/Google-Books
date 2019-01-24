import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

const styles = {};
const SavedCard = props => {
  return (
    <Grid item lg={11}>
      <Card style={styles.card} id={props.title + " Card"}>
        <CardContent>
          <Grid container>
            <Grid item sm={10}>
              <div>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
              </div>
            </Grid>
            <Grid item sm={2}>
              <div>
                <a href={props.link}>
                  <button>View More</button>
                </a>
                <button
                  id={props.id}
                  onClick={event => props.removeBook(event)}
                >
                  Remove Book
                </button>
              </div>
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
    </Grid>
  );
};

const SavedBooks = props => {
  return  (
    props.saved.length === 0 ? (
      <Grid item xs={11} sm={11}>
        <div>
          <h1> Saved Books </h1>
        </div>
      </Grid>
    ) :
    <Grid item xs={11} sm={11}>
      <div style={styles.resultsWrapper}>
        <h1> Saved Books </h1>
        {props.saved.map(Book => {
          return (
            <SavedCard
              key={Book._id}
              id={Book._id}
              image={Book.image}
              title={Book.title}
              author={Book.author}
              description={Book.synopsis}
              link={Book.link }
              removeBook={props.removeBook}
            />
          );
        })}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(SavedBooks);
