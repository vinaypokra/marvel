import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "./landingPage/customTxt.json";
import Links from "./Links.json";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={8}
          spacing={2}
        >
          <Grid item xs={4}>
            <Typography variant="h5">
              {customTxt.Footer.address[0]}
              <br></br>
              {customTxt.Footer.address[1]}
              <br></br>
              {customTxt.Footer.address[2]}
            </Typography>
            <Typography variant="h6" style={{ ...Styles.colorFade }}>
              <br></br>
              <br></br>
              {customTxt.Footer.copyright}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <ul>
              {Links.navLinks.map((val) => {
                return (
                  <li>
                    <Link to={val[0]} style={{ ...Styles.headerLink }}>
                      {val[1]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">{customTxt.Footer.follow}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
