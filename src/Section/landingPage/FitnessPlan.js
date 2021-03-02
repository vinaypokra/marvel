import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";
import FitnessPlanImage from "../../Img/fitnessPlanImg.jpg";
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
          spacing={2}
        >
          <Grid container item xs={6}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              item
              xs={12}
              style={Styles.boxShadowStyle}
              spacing={6}
            >
              <Grid item>
                <img src={FitnessPlanImage} width="100%" height="80%"></img>
              </Grid>
              <Grid item>
                <Typography variant="h3">
                  {customTxt.FitnessPlan.mainheading}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "8px" }}
                >
                  Custom Plan
                </Button>

                <Button variant="outlined" color="primary">
                  Know More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
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
