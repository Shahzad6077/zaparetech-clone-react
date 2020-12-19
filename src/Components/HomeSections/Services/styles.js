import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "18%",
    },
  },

  // THIS IS Illustration Wrapper
  leftSideClassName: {},
  leftWrapper: {
    position: "relative",
  },
  // THIS IS Illustration Wrapper
  rightSideClassName: {
    display: "flex",
    alignItems: "center",
  },
  // this is box inside side
  rightWrapper: {
    width: "100%",
  },

  shapeWrapper: {
    position: "absolute",
    width: "100%",
    "& svg": {
      [theme.breakpoints.down("sm")]: {
        width: "85%",
      },
    },
  },
}));

export default useStyles;
