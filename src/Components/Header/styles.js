import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    // height: "84px",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 40px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "30px 60px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 100px",
    },
  },
  brandWrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: theme.palette.blue,
    textDecoration: "none",
    "& svg": {
      height: "38px",
      paddingRight: "12px",
    },
    "& h6": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.3rem",
      },
    },
  },
  linksWrapper: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      marginLeft: "2.5rem",
    },

    "& > li > a": {
      textDecoration: "none",
      color: theme.palette.blue,
      padding: "6px 8px",
      position: "relative",
      display: "block",

      "&::before": {
        content: "''",
        position: "absolute",
        display: "block",
        height: "100%",
        width: "0%",
        backgroundColor: theme.palette.lightYellow,
        transition: "all 200ms linear",
        left: "0px",
        top: "0px",
        zIndex: "-1",
      },
      "&:hover": {
        "&::before": {
          width: "60%",
        },
      },
    },
  },
  isLinkActive: {
    userSelect: "none",
    "&::before": {
      width: "40% !important",
    },
  },
  navBtn: {
    display: "flex",
    alignItems: "center",
    "& span": {
      cursor: "pointer",
    },
    "& svg": {
      width: "44px",
      fill: theme.palette.blue,
      [theme.breakpoints.down("xs")]: {
        width: "32px",
      },
    },
  },
}));
export default useStyles;
