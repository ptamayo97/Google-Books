import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import { white } from "@material-ui/core/colors";

const styles = {
  header: {
    background: "grey",
    color: "#ffffff",
    padding: "60px 10px"
  }
};
const Header = props => {
  const { classes } = props;
  return (
    <Grid item xs={11} sm={11}>
      <Paper className={classes.header}>
        <Typography variant="h2" color="inherit" align="center">
          Google Books
        </Typography>
        <Typography variant="h4" color="inherit" align="center">
          Search For & Save Your Favorite Books
        </Typography>
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(Header);
