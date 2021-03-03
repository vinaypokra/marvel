import React from "react";
import Styles from "../../app-styles";
import { Button, Grid, Typography } from "@material-ui/core";
import BannerImage from "../../Img/bannerImg.png";
import customTxt from "./customTxt.json";

const backImage = {
  paperContainer: {
    backgroundImage: `url(${BannerImage})`,
  },
};

const Banner = () => {
  return (
    <>
      <Grid container justify="center" style={Styles.banner}>
        <Grid
          item
          container
          xs={8}
          direction="row"
          justify="center"
          alignItems="center"
          style={Styles.blueBackground}
        >
          <Grid item xs={5}>
            <Typography variant="h1" style={Styles.headingColor}>
              {customTxt.BannerPage.mainheading}
            </Typography>
          </Grid>
          <Grid
            xs={5}
            item
            style={{
              ...backImage.paperContainer,
              ...Styles.backgroundImageStyle,
              height: "80vh",
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          item
          xs={7}
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            ...Styles.overlapArea,
            ...Styles.cardRadius,
            ...Styles.blueBackground2,
          }}
        >
          <Grid
            item
            container
            xs={6}
            direction="row"
            justify="center"
            alignItems="center"
            style={{
              ...Styles.whiteColor,
              ...Styles.padding5,
            }}
          >
            {customTxt.BannerPage.contentList.map((value, key) => {
              return (
                <Grid item xs={5} key={key}>
                  <Typography variant="subtitle2">{value}</Typography>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            item
            justify="center"
            alignItems="flex-start"
            xs={6}
            style={{
              ...Styles.padding5,
            }}
          >
            <Grid item xs={10} style={{ marginBottom: Styles.spacing(4) }}>
              <Typography variant="h4" style={Styles.headingColor}>
                Try Get Set Go Once.<br></br> Stay Fit Forever.
              </Typography>
            </Grid>

            <Grid
              item
              xs={11}
              container
              direction="row"
              justify="center"
              style={Styles.centerTxt}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ ...Styles.smallFont, marginRight: "8px" }}
              >
                BOOK A FREE CONSULTATION
              </Button>

              <Button
                variant="outlined"
                color="primary"
                style={Styles.smallFont}
              >
                FIND YOUR PLAN
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Banner;
