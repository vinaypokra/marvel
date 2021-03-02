import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Grid item container style={{ ...Styles.header }} justify="space-between">
        <Grid item>
          <Typography variant="subtitle1" style={Styles.colorWhite}>
            Image
          </Typography>
        </Grid>
        <Grid item container xs={5} justify="flex-end">
          <Link to="/">Home</Link>

          <Link to="/plans">Plans</Link>

          <Link to="/coaches">Coaches</Link>
          <Link to="/successstories">Success Stories</Link>
          <Link to="/signin">SIGN IN</Link>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
