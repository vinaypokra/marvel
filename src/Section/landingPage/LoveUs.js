import React from "react";
import Grid from "@material-ui/core/Grid";
import HowItWorks from "./HowItWorks";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "../customTxt.json";
const LoveUs = () => {
  return (
    <>
      <Grid container justify="center" style={Styles.fullHtNoBG1}>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          xs={8}
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="h2" style={{ ...Styles.colorPrimary }}>
              {customTxt.loveUsPage.mainheading}
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={8}
            >
              <Grid item xs={5} style={Styles.boxZindex}>
                <Styles.MakePaper>
                  <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
                    {customTxt.loveUsPage.subheading[0]}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ ...Styles.colorGrey }}
                  >
                    {customTxt.loveUsPage.subheading[1]}
                  </Typography>
                </Styles.MakePaper>
              </Grid>
              <Grid item xs={5} style={Styles.boxZindex}>
                <Styles.MakePaper>
                  <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
                    {customTxt.loveUsPage.subheading[2]}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ ...Styles.colorGrey }}
                  >
                    {customTxt.loveUsPage.subheading[3]}
                  </Typography>
                </Styles.MakePaper>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={8}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={5} style={Styles.boxZindex}>
                <Styles.MakePaper>
                  <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
                    {customTxt.loveUsPage.subheading[4]}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ ...Styles.colorGrey }}
                  >
                    {customTxt.loveUsPage.subheading[5]}
                  </Typography>
                </Styles.MakePaper>
              </Grid>
              <Grid item xs={5} style={Styles.boxZindex}>
                <Styles.MakePaper>
                  <Typography variant="h6" style={{ ...Styles.colorPrimary }}>
                    {customTxt.loveUsPage.subheading[6]}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ ...Styles.colorGrey }}
                  >
                    {customTxt.loveUsPage.subheading[7]}
                  </Typography>
                </Styles.MakePaper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <HowItWorks />
    </>
  );
};

export default LoveUs;
