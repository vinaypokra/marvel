import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "./customTxt.json";

const Facebook = () => {
  return (
    <>
      <Grid
        container
        justify="center"
        style={{ ...Styles.backgroundColorFaceBook, ...Styles.padding5 }}
      >
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
            <Typography variant="h2" style={{ ...Styles.colorWhite }}>
              {customTxt.Facebook.mainheading}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={4}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            {customTxt.Facebook.subheading.map((val, key) => {
              return (
                <Typography
                  key={key}
                  variant="subtitle2"
                  style={{ ...Styles.colorWhite }}
                >
                  {val}
                </Typography>
              );
            })}

            <Button
              variant="outlined"
              color="primary"
              style={{
                ...Styles.centerTxt,
                ...Styles.colorWhite,
                border: "1px solid white",
              }}
            >
              Follow us on Facebook
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Facebook;
