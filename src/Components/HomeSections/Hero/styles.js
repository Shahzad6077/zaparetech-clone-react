import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootSection: {
    position: "relative",
    backgroundColor: theme.palette.blue,
    color: "#fff",
    margin: "1rem auto",
    marginTop: "10%",
    padding: "60px 16px",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      margin: "10% 0px",
      marginTop: "20%",
      padding: "160px 16px",
      paddingLeft: "40px",
    },
    "& h2": {
      zIndex: 10,
      fontWeight: 600,
      textAlign: "center",
      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(1.6em + 1.2vw)",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: `left`,
        fontSize: "calc(1.8em + 1.6vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(1.8em + 2vw)",
      },
    },
  },
  infWrapper: {
    marginTop: "2rem",
    zIndex: 10,
    "& h6": {
      fontWeight: 600,
      marginBottom: "1rem",
      textAlign: "center",
    },
    "& p": {
      color: theme.palette.lightBlue,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "3.4rem",
      "& h6": {
        marginBottom: "2rem",
        textAlign: "left",
      },
      "& p": {
        paddingRight: "10%",
        textAlign: "left",
      },
    },
  },
  ztag: {
    position: "absolute",
    right: "8%",
    top: "5%",
    height: "100%",
    maxWidth: "100%",
    zIndex: 0,
    "& svg": {
      height: "100%",
      maxWidth: "100%",
      width: "400px",
    },
  },
}));
export default useStyles;
