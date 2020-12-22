import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "5% 0px",
    },
  },

  leftWrapper: {
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      padding: "0px 16px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "8%",
      "& svg": {
        width: "80%",
      },
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
  },
}));
