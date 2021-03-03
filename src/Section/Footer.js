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
          style={{ ...Styles.padding5 }}
        >
          <Grid item xs={5}>
            {customTxt.Footer.address.map((val) => {
              return <Typography variant="h5">{val}</Typography>;
            })}
          </Grid>
          <Grid item xs={3}>
            {Links.footLinks.map((val, key) => {
              return (
                <Link to={val[0]} style={{ ...Styles.headerLink }}>
                  <Typography key={key} variant="subtitle2">
                    {val[1]}
                  </Typography>
                </Link>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">{customTxt.Footer.follow}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={8}
          spacing={2}
        >
          <Grid item xs={5}>
            <Typography variant="h6" style={{ ...Styles.colorFade }}>
              {customTxt.Footer.copyright}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle2">
              {Links.privacy.map((val, key) => {
                return (
                  <Link
                    to={val[0]}
                    style={{
                      ...Styles.headerLink,
                      marginRight: Styles.spacing(3),
                    }}
                  >
                    {val[1]}
                  </Link>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
