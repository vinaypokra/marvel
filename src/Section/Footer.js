import React from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-styles";
import { Typography, Button } from "@material-ui/core";
import customTxt from "./landingPage/customTxt.json";
import Links from "./Links.json";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SvgIcon from "@material-ui/core/SvgIcon";

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
            <br></br>
            <FacebookIcon
              fontSize="medium"
              style={{
                marginRight: Styles.spacing(3),
                ...Styles.colorFade,
              }}
            ></FacebookIcon>
            <TwitterIcon
              fontSize="medium"
              style={{
                marginRight: Styles.spacing(3),
                ...Styles.colorFade,
              }}
            ></TwitterIcon>
            <InstagramIcon
              fontSize="medium"
              style={{
                marginRight: Styles.spacing(3),
                ...Styles.colorFade,
              }}
            ></InstagramIcon>
            <YouTubeIcon
              fontSize="medium"
              style={{
                marginRight: Styles.spacing(3),
                ...Styles.colorFade,
              }}
            ></YouTubeIcon>
            <SvgIcon>
              <path
                d="M21.93 16.56c-.14-.38-.43-.56-.71-.75c-.05-.03-.11-.06-.15-.08c-.07-.05-.18-.09-.27-.14c-.94-.5-1.68-1.13-2.19-1.87a6.15 6.15 0 0 1-.37-.66c-.04-.13-.04-.2-.01-.26c.03-.05.07-.1.12-.13c.15-.11.33-.21.44-.29c.21-.13.36-.23.46-.3c.39-.27.66-.58.83-.88c.24-.45.27-.98.08-1.45c-.25-.67-.89-1.09-1.66-1.09c-.16 0-.32.02-.5.05c0 .01-.06.02-.1.03c0-.46-.01-.94-.05-1.42c-.14-1.68-.73-2.56-1.35-3.26c-.39-.44-.85-.82-1.36-1.11c-.93-.53-1.99-.8-3.14-.8s-2.2.27-3.13.8c-.52.29-.98.67-1.37 1.11c-.62.7-1.2 1.58-1.35 3.26c-.04.48-.05.96-.04 1.42c-.05-.01-.11-.02-.11-.03c-.18-.03-.34-.05-.5-.05c-.77 0-1.41.42-1.66 1.09c-.19.47-.16 1 .08 1.45c.17.3.44.61.83.88c.1.07.25.17.46.31l.42.27c.06.04.1.09.14.14c.03.07.03.14-.02.27c-.1.23-.22.43-.36.65c-.5.73-1.21 1.35-2.12 1.84c-.49.26-.99.44-1.2 1c-.16.44-.07.94.35 1.35c.15.15.32.28.51.38c.4.21.82.39 1.25.5c.09.03.18.06.25.12c.15.12.13.32.33.59c.1.16.24.29.37.39c.41.29.87.3 1.37.32c.44.02.94.04 1.5.23c.26.06.5.23.79.41c.71.42 1.63 1 3.21 1c1.57 0 2.5-.58 3.22-1.01c.28-.17.53-.34.78-.4c.55-.19 1.06-.21 1.5-.23c.5-.01.96-.03 1.37-.32c.17-.12.31-.28.42-.46c.14-.24.14-.43.27-.52c.07-.05.15-.09.24-.11c.44-.12.86-.3 1.26-.51c.21-.11.39-.25.54-.42h.01c.39-.41.47-.87.32-1.31m-1.4.75c-.86.47-1.43.42-1.87.69c-.16.12-.21.28-.24.44l-.03.2c-.02.14-.05.26-.15.33c-.34.23-1.33-.02-2.61.4c-1.06.35-1.73 1.36-3.63 1.36s-2.55-1-3.63-1.36c-1.27-.42-2.27-.17-2.6-.4c-.27-.19-.05-.71-.43-.97c-.44-.27-1.01-.22-1.84-.69c-.31-.16-.36-.31-.32-.38c.04-.09.16-.16.24-.2c1.65-.79 2.58-1.82 3.05-2.63c.44-.72.53-1.27.56-1.35c.03-.21.06-.37-.17-.58c-.22-.21-1.2-.81-1.47-1c-.46-.32-.65-.63-.51-1.02c.12-.27.35-.37.62-.37c.08 0 .16.01.24.03c.5.1.98.35 1.26.42c.03.01.06.01.1.01c.09 0 .14-.03.17-.09c.01-.04.02-.09.02-.15c-.04-.54-.11-1.59-.03-2.58c.04-.42.11-.78.2-1.09c.2-.68.54-1.13.88-1.54c.25-.29 1.41-1.52 3.66-1.52c1.85 0 2.96.84 3.44 1.29c.1.1.18.18.22.23c.38.44.72.92.92 1.68c.07.27.13.59.16.95c.08.98.01 2.04-.03 2.58c0 .04 0 .08.01.11c.01.09.07.13.18.13c.04 0 .07 0 .1-.01c.28-.07.76-.32 1.26-.43c.08-.01.16-.02.24-.02c.25 0 .5.09.6.32l.01.04h.01v.01c.15.38-.05.7-.5 1.01c-.27.19-1.26.8-1.48 1c-.23.22-.2.38-.17.59c.03.1.21 1.05 1.11 2.11c.55.64 1.34 1.31 2.5 1.87c.07.03.16.08.21.14c.03.05.05.09.04.13c-.01.1-.1.2-.3.31z"
                fill="#bababa"
              />
            </SvgIcon>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
