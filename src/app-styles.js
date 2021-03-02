import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { colors } from "./Util/Services";
import { Paper } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(colors.primary),
    backgroundColor: colors.primary,

    border: `1px solid ${colors.primary}`,
    "&:hover": {
      backgroundColor: colors.transparent,
      border: `1px solid white`,
    },
  },
}))(Button);

const MakePaper = withStyles((theme) => ({
  root: {
    boxShadow:
      "6px 6px 19px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}))(Paper);

const handleScroll = () => {
  window.scroll({
    top: 350,
    left: 0,
    behavior: "smooth",
  });
};
export default {
  handleScroll,
  ColorButton,
  MakePaper,
  cardStyle: {
    textAlign: "left",
    height: 150,
    width: 225,
  },
  backgroundImageStyle: {
    backgroundSize: "cover",
  },
  overlapArea: {
    position: "relative",
    bottom: "120px",
  },
  blueBackground: {
    backgroundColor: colors.primary,
    maxHeight: "85vh",
  },
  blueBackground2: {
    background:
      "linear-gradient(90deg, rgba(55,110,129,1) 50%, rgba(255,255,255,1) 50%)",
    boxShadow:
      "6px 6px 19px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  smallFont: {
    fontSize: ".6rem",
  },
  cardRadius: {
    borderRadius: "5px",
  },
  colorWhite: {
    color: colors.secondary,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorGrey: {
    color: colors.grey,
  },
  blackBG: {
    background: "#000",
  },
  sectionBG: {
    backgroundColor: "#f5f9fa",
  },
  whitekBG: {
    background: "white",
  },
  boldTxt: {
    fontStyle: "bold",
  },
  buttonpadding: {
    padding: "0 20px",
  },
  feildRadius: {
    borderRadius: "5px",
  },
  greyBG: {
    background: "#111",
  },
  headerStyle: {
    justifyContent: "space-evenly",
  },
  italicTxt: {
    fontStyle: "italic",
  },
  marginTop: {
    marginTop: "10px",
  },
  padding5: {
    padding: "5% 0",
  },
  padding15: {
    padding: "15% 0",
  },
  padding1: {
    padding: "1%",
  },
  paddingLR: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  paddingRight5: {
    paddingRight: "5px",
  },

  spacingVertical: {
    padding: "100px 0",
  },

  leftTxt: {
    textAlign: "left",
  },

  centerTxt: {
    textAlign: "center",
  },
  banner: {
    paddingTop: "40px",
    minHeight: "100vh",
    zIndex: 1000,
    overflow: "hidden",
  },
  deafultButton: {
    padding: "5px 20px",
    marginTop: "20px",
  },

  fixed: {
    position: "sticky",
    top: 0,
  },
  section01: {
    padding: "5%",
    color: colors.secondary,
    minHeight: "100vh",
    zIndex: 500,
    background: "#111",
  },
  section01Content: {
    background: "#000",
    padding: "5%",
    textAlign: "center",
  },
  marginBottom: {
    marginBottom: "50px",
  },
  section02: {
    background: "#111",
    padding: "0 5%",
    minHeight: "100vh",
  },
  translucentContainer: {
    background: colors.translucentBG,
    padding: "20px",
  },
  fullHt: {
    minHeight: "100vh",
    background: "#111",
  },
  fullHtNoBG: { height: "100vh" },
  fullHtNoBG1: { height: "70vh" },
  highZ: {
    zIndex: 10000,
  },
  imgWidth: {
    width: "100%",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    padding: "15px",
    background: "white",
    zIndex: 20000,
  },
  headerLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    paddingTop: "120px",
    width: "100%",
    background: "#000",
  },
  footer: {
    padding: "50px",
    background: "#000",
    textAlign: "center",
  },
  spacing: (value) => `${value * 8}px`,
  //form styles
  formFieldContainer: {
    height: "85px",
    overflow: "visible",
    marginBottom: "10px",
  },
  verticalScroll: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "280px",
  },
  boxZindex: {
    zIndex: "1",
  },
  boxShadowStyle: {
    padding: "20px",
    boxShadow:
      "6px 6px 19px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  whiteColor: { color: colors.secondary },
  err: { color: colors.err },
  special: { display: "inline-block", width: "5%", textAlign: "center" },
  countryContainer: { display: "inline-block", width: "15%" },
  mobileContainer: { display: "inline-block", width: "75%" },
};
