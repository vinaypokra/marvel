import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";

const Facebook = () => {
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
          <Grid item xs={8}>
            <Typography variant="h2">
              {customTxt.Facebook.mainheading}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">
              <ul>
                {customTxt.Facebook.subheading.map((val) => {
                  return (
                    <>
                      <li>{val}</li>
                    </>
                  );
                })}
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Facebook;
