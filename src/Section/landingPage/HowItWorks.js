import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "./customTxt.json";

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
            style={{ ...Styles.headingColor, ...Styles.centerTxt }}
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
          {customTxt.howItWorksPage.subheading.map((value, key) => {
            return (
              <Grid key={key} container item xs={4}>
                <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
                  {value[0]}
                </Typography>
                <Typography variant="subtitle2" style={{ ...Styles.colorGrey }}>
                  {value[1]}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
