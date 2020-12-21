import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.darkBlue,
    [theme.breakpoints.up("md")]: {
      padding: "20px 0px",
      height: "calc(100vh - 100px)",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
    },
  },
  footerSub1: {
    flexGrow: 1,
    alignItems: "center",
  },
  footerSub2: {
    flexGrow: 1,
    marginTop: "5%",
    display: "flex",
  },
  joinFooterSec: {
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    "& h2": {
      fontWeight: 800,
      textAlign: "center",
      marginBottom: "1rem",
      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(1.6em + 1.2vw)",
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: "2.4rem",
        fontSize: "calc(1.8em + 1.6vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(1.8em + 2vw)",
      },
    },
    "& p": {
      fontWeight: 600,
      textAlign: "center",
      marginBottom: "1rem",

      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(0.4rem + 0.4vw)",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "calc(0.4rem + 0.5vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(0.6rem + 0.6vw)",
      },
    },
  },
  brandLogo: {
    "& svg": {
      height: "38px",
    },
  },
  bottomFooterSec: {
    color: theme.palette.lightGrey,
    "& a": {
      color: theme.palette.lightGrey,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "46px",
    },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  navLinksWrapper: {
    listStyle: "none",
    "& li": {
      marginBottom: "6px",
      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(1rem + 0.4vw)",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "calc(0.8rem + 0.5vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(0.6rem + 0.6vw)",
      },
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "max(60%,500px)",
      justifyContent: "space-between",
      margin: "1rem auto",

      "& li": {
        marginBottom: "0px",
      },
    },
  },
  socialLinksWrapper: {
    "& svg": {
      width: "24px",
      height: "24px",
      fill: theme.palette.lightGrey,
    },
    textAlign: "center",
    margin: "1rem auto",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      "& > p": {
        margin: "0px 0.5rem",
      },
    },
    "& > p:nth-child(2) > a": {
      margin: "0px 0.3rem",
    },
  },
  designInfoTxt: {
    margin: "12px 0px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      fill: theme.palette.lightGrey,
    },
  },
  divider: {
    backgroundColor: theme.palette.blue,
  },
}));

export default useStyles;
