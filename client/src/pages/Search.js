import React from "react";
import API from "../utils/API";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: "90%"
    paddingTop: 100
  },
  searchBar: {
    paddingTop: 15
  }
};

class Search extends React.Component {
  state = {
    results: []
  };

  searchBooks = event => {
    event.preventDefault();
    let searchTerm = document.getElementById("SearchBar").value;
    API.search(searchTerm).then(res => {
      this.setState({ results: res.data });
    });
  };

  saveBook = event => {
    event.preventDefault();
    let thisBook = this.state.results.items.filter(
      book => book.id === event.target.id
    );
    console.log(thisBook[0]);
    API.save(thisBook[0]).then(console.log("Saved: " + thisBook[0]));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Header />
        <SearchBar searchBooks={this.searchBooks} className={classes.searchBar}/>
        <Results results={this.state.results} saveBook={this.saveBook} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Search);
