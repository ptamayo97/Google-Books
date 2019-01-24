import React from "react";
import API from "../utils/API";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "../../node_modules/@material-ui/core";
import Header from "../components/Header";
import SavedBooks from "../components/SavedBooks";
const styles = {
  results: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: "90%"
    paddingTop: 100
  },
  savedLabel: {
    marginTop: 20
  },
  container: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: "90%"
    paddingTop: 100
  }
};

class Saved extends React.Component {
  state = {
    savedBooks: []
  };

  getBooks = () => {
    API.load()
      .then(data => {
        return this.setState({ savedBooks: [data.data] });
      })
      .catch(err => console.log(err));
  };

  removeBook = id => {
    // event.preventDefault();
    // let thisBook = this.state.results.items.filter(
    //   book => book.id === event.target.id
    // );
    // console.log(thisBook[0]);
    // API.remove(thisBook[0]).then(console.log("Removed: " + thisBook[0]));
    API.remove(id)
      .then(() => {
        this.getBooks();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.results} justify="center">
        <Header />
        {/* <Grid item>
          <Typography className={classes.savedLabel} variant="h3">
            Saved Books
          </Typography>
        </Grid> */}
        <SavedBooks
          saved={this.state.savedBooks}
          removeBook={this.removeBook}
          // key={savedBook.id}
          // id={savedBook.id}
          // image={savedBook.volumeInfo.imageLinks.smallThumbnail}
          // title={savedBook.volumeInfo.title}
          // author={savedBook.volumeInfo.authors}
          // description={savedBook.volumeInfo.description}
          // link={savedBook.volumeInfo.previewLink}
          // removeBook={this.removeBook}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Saved);
