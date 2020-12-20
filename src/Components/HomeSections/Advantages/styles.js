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
  leftSideClassName: {},
  leftWrapper: {
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      padding: "0px 8%",
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

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
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
      maxWidth: "100%",
      display: "block",
    },

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",

      "& img": {
        maxWidth: "150%",
        width: "150%",
        position: "absolute",
        zIndex: "-1",
        top: "-160px",
        right: "-55%",
      },
    },
  },
  listWrapper: {
    "& h2": {
      color: theme.palette.blue,
      fontWeight: 800,
      textAlign: "center",
      marginBottom: "1rem",
      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(1.6em + 1.2vw)",
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: "2.4rem",
        textAlign: `left`,
        fontSize: "calc(1.8em + 1.6vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(1.8em + 2vw)",
      },
    },
  },
  list: {
    "& > div": {
      display: "flex",
      "& > span": {
        width: "10px",
        height: "10px",
        backgroundColor: `${theme.palette.lightBlue}`,
        marginRight: "12px",
        transform: "rotate(45deg)",
        alignSelf: "center",
      },
    },
  },
}));
