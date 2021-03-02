import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";

const HowItWorks = () => {
  return (
    <>
      <Grid container justify="center">
        <Typography variant="h2" style={{ ...Styles.colorPrimary }}>
          {customTxt.howItWorksPage.mainheading}
        </Typography>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="flex-start"
          xs={11}
          spacing={5}
        >
          <Grid item xs={3}>
            <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
              {customTxt.howItWorksPage.subheading[0]}
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
              {customTxt.howItWorksPage.subheading[1]}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
              {customTxt.howItWorksPage.subheading[2]}
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
              {customTxt.howItWorksPage.subheading[3]}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
              {customTxt.howItWorksPage.subheading[4]}
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
              {customTxt.howItWorksPage.subheading[5]}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
