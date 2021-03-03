import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Styles from "../app-styles";
import { Link } from "react-router-dom";
import Links from "./Links.json";

class Header extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ ...Styles.header }}
      >
        <Grid item xs={5} alignItems="center">
          <Typography variant="subtitle1" style={Styles.centerTxt}>
            Image
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {Links.navLinks.map((val, key) => {
            return (
              <Link key={key} to={val[0]} style={{ ...Styles.headerLink }}>
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
