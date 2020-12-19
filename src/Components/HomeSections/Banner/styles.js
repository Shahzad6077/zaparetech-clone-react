import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
  },

  // THIS IS Illustration Wrapper
  leftSideClassName: {
    display: "flex",
    justifyContent: "center",
    "&>div": {
      display: "flex",
    },
    "& svg": {
      maxWidth: "85%",
      margin: "auto",
    },
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

    [theme.breakpoints.up("xs")]: {
      fontSize: "calc(1.4em + 1.2vw)",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "calc(1.2em + 2.4vw)",
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
    marginTop: "2rem",
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
