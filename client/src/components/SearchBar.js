import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Input, Button, Typography } from "@material-ui/core";

const styles = {
  searchBar: {
    padding: "0 10px"
  },
  // container: {
  //   display: "flex",
  //   justifyContent: "center"
  // }
};

function SearchInput() {
  return <Input id="SearchBar" placeholder="Book" type="text" fullWidth />;
}

function SearchButton(props) {
  return (
    <Button
      type="submit"
      id="SearchButton"
      onClick={event => props.searchBooks(event)}
    >
      Search
    </Button>
  );
}

function SearchBar(props) {
  const { classes } = props;
  return (
    <Grid item xs={11} sm={11}>
      <Paper>
        <Grid container className={classes.container} justify="center" > 
          <Grid item xs={12}>
            <Typography variant="title">Book Search</Typography>
          </Grid>
          <Grid item xs={8}>
            <SearchInput className={classes.searchBar} />
          </Grid>
          <Grid item xs={2}>
            <SearchButton searchBooks={props.searchBooks} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(SearchBar);
