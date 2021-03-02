import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";

const FitnessPlan = () => {
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
        >
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={8}
            >
              <Grid item>
                <Typography variant="h6">
                  {customTxt.FitnessPlan.subheading[0]}
                </Typography>
                <Typography variant="subtitle2">
                  {customTxt.FitnessPlan.subheading[1]}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {customTxt.FitnessPlan.subheading[2]}
                </Typography>
                <Typography variant="subtitle2">
                  {customTxt.FitnessPlan.subheading[3]}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {customTxt.FitnessPlan.subheading[4]}
                </Typography>
                <Typography variant="subtitle2">
                  {customTxt.FitnessPlan.subheading[5]}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FitnessPlan;
