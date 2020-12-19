import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "10% 0px",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  // THIS IS Illustration Wrapper
  leftSideClassName: {
    // display: "flex",
    // justifyContent: "center",
  },
  leftWrapper: {
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      padding: "0px 16px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "8%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
    },
  },
  // THIS IS Illustration Wrapper
  rightSideClassName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "5% 0px",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  // this is box inside side
  rightWrapper: {
    width: "100%",
  },
}));
export default useStyles;

export const useInfoStyles = makeStyles((theme) => ({
  imgWrapper: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "center",
    position: "relative",
    "& img": {
      maxWidth: "80%",
      display: "block",
    },

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",

      "& img": {
        maxWidth: "150%",
        width: "115%",
        position: "absolute",
        zIndex: "-1",
        top: "-75px",
        right: "-20%",
      },
    },
  },
}));
