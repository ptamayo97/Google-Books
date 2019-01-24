import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Grid } from "@material-ui/core";

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

const styles = {
  appBar: {
    display: "flex"
  }
};

// function LinkTab(props) {
//   return <Tab component="a" {...props} />;
// }

class Nav extends React.Component {
  state = { value: 0 };

  handleChange = (event, value) => {

    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <AppBar className={classes.appBar}>
        {/* <Grid container alignItems="center"> */}
        {/* <LinkTab disabled label="Google Books" textColor="inherit"> */}
        <Typography variant="h6" align="center" color="inherit">
          Google Books
        </Typography>

        {/* </LinkTab> */}
        <Tabs
          centered
          value={value}
          onChange={this.handleChange}
          variant="fullWidth"
          // onClick={event => event.preventDefault}
        >
          <Tab label="Search" href="/" />
          <Tab label="Saved" href="/Saved" />
        </Tabs>
        {/* </Grid> */}
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
