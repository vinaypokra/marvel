import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Links from "./Links.json";
class Header extends Component {
  render() {
    return (
      <Grid item container style={{ ...Styles.header }} justify="space-between">
        <Grid item>
          <Typography variant="subtitle1">Image</Typography>
        </Grid>
        <Grid
          item
          xs={5}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {Links.navLinks.map((val) => {
            return (
              <Link to={val[0]} style={{ ...Styles.headerLink }}>
                {val[1]}
              </Link>
            );
          })}
          <Link to="/signin" style={{ ...Styles.headerLink }}>
            <Styles.ColorButton style={Styles.buttonpadding}>
              SIGN IN
            </Styles.ColorButton>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
