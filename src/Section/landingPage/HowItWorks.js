import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";

const HowItWorks = () => {
  return (
    <>
      <Grid
        xs={12}
        container
        justify="center"
        justify="center"
        alignItems="center"
        style={{
          ...Styles.sectionBG,
          ...Styles.padding15,
          ...Styles.overlapArea,
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ ...Styles.colorPrimary, ...Styles.centerTxt }}
          >
            {customTxt.howItWorksPage.mainheading}
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          xs={11}
          spacing={1}
        >
          <Grid container item xs={4}>
            <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
              {customTxt.howItWorksPage.subheading[0]}
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
              {customTxt.howItWorksPage.subheading[1]}
            </Typography>
          </Grid>
          <Grid container item xs={4}>
            <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
              {customTxt.howItWorksPage.subheading[2]}
            </Typography>
            <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
              {customTxt.howItWorksPage.subheading[3]}
            </Typography>
          </Grid>
          <Grid container item xs={4}>
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
