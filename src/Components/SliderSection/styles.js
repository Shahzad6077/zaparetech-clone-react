import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
    [theme.breakpoints.down("sm")]: {
      padding: "4px 1rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4px 1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4px 1.5rem",
    },
  },

  illustrationWrapper: {
    // border: "1px solid",
    display: "flex",
    justifyContent: "center",
    "& svg": {
      maxWidth: "420px",
    },
  },
  carouselWrapper: {
    // border: "1px solid",
  },
}));

export const useSliderStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
export const useSliderItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.blue,
    padding: "0px 1.4rem",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "2.1rem",
      justifyContent: "start",
    },
    marginBottom: "0.5rem",

    "& a": {
      color: theme.palette.blue,
      textDecoration: "none",
      fontSize: "0.8rem",
      fontWeight: 600,
      padding: "0px 6px",
      height: "34px",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      "&:hover": {
        "& span::after": {
          width: "100%",
        },
      },
      "& span": {
        display: "block",
        position: "relative",
        "&::before": {
          content: "''",
          display: "block",
          position: "absolute",
          height: "6px",
          width: "100%",
          backgroundColor: theme.palette.yellow,
          transition: "all 200ms linear",
          left: "0px",
          right: "0px",
          bottom: "-12px",
        },
        "&::after": {
          content: "''",
          display: "block",
          position: "absolute",
          height: "6px",
          width: "0%",
          margin: "auto",
          backgroundColor: theme.palette.blue,
          transition: "all 200ms linear",
          left: "0px",
          right: "0px",
          bottom: "-12px",
        },
      },
    },
  },
  content: {
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3rem",
    },
  },
  content__h2: {
    color: theme.palette.blue,
    transition: "font-size 800ms ease-out",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
      lineHeight: "2.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.4rem",
      lineHeight: "3rem",
    },

    "& span": {
      fontWeight: 800,
    },
  },
  h2_div: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export const useControlsStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0px",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      marginRight: "2.5rem",
    },
    "& button": {
      border: "none",
      background: "transparent",
    },
  },
  arrows: {
    width: "70px",
    display: "flex",
    justifyContent: "space-between",

    "& span": {
      cursor: "pointer",
      padding: "0px 8px",
      "& svg": {
        width: "12px",
        fill: theme.palette.lightBlue,
      },
      "&:hover": {
        "& svg": {
          fill: theme.palette.blue,
        },
      },
    },
  },
  dotsWrapper: {
    margin: "0px 1.5rem",
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "14px",
    justifyContent: "center",
    alignItems: "center",

    "& button": {
      padding: "4px",
      cursor: "pointer",
      "&:hover": {
        "& >div": {
          borderColor: theme.palette.blue,
        },
      },
    },
  },
  dot: {
    border: "5px solid",
    transform: "rotate(45deg)",
    borderColor: theme.palette.lightBlue,
    transition: "all 200ms linear",
  },
  activeDot: {
    borderColor: theme.palette.blue,
  },
}));
export default useStyles;
