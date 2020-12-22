import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "10%",
    },
  },
  container: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "30px",
    },
  },

  // THIS IS Illustration Wrapper
  leftSideClassName: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "60px",
    },
  },
  leftWrapper: {
    position: "relative",
  },
  // THIS IS Illustration Wrapper
  rightSideClassName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
  },
  // this is box inside side
  rightWrapper: {
    width: "100%",
  },

  shapeWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
    [theme.breakpoints.up("md")]: {},

    "& svg": {
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
  },
  servicesItemWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: "0px 8%",
      top: "10%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "8%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
    },
  },
  itemCol: {
    zIndex: 10,
    "& > div ": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default useStyles;
