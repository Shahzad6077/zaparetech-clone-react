import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  ovalBoxItemWrapper: {
    maxWidth: "200px",
    maxHeight: "200px",
    padding: "1rem",
    boxShadow: "0 15px 9px 0 rgba(0,0,0,.09)",
    fontFamily: theme.typography.fontFamily,
    borderRadius: "max(16px, min(2.2vw, 36px))",
    position: "relative",
    border: "3px solid transparent",
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("lg")]: {
      width: "max(190px, min(2.2vw, 220px))",
      height: "max(190px, min(2.2vw, 220px))",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      width: "100%",
      // width: "max(160px, min(2.2vw, 180px))",
      height: "max(160px, min(2.2vw, 180px))",
    },
    "& h6": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      fontSize: "max(19px, min(2.2vw, 30px))",
      position: "absolute",
      right: "15%",
      top: "15%",
      lineHeight: 1,
      textTransform: "uppercase",
    },
    "& p": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 700,
      fontSize: "max(13px, min(1.2vw, 16px))",
      textTransform: "capitalize",
    },
  },
  white: {
    // boxShadow: "none",
    backgroundColor: "#fff",
    "& p": {
      color: theme.palette.navyBlue,
    },
    "& h6": {
      color: theme.palette.lightBlue,
    },
  },
  yellow: {
    backgroundColor: theme.palette.yellow,
    "& p": {
      color: "#fff",
    },
    "& h6": {
      color: theme.palette.slate,
    },
  },
  blue: {
    backgroundColor: theme.palette.blue,
    "& p": {
      color: "#fff",
    },
    "& h6": {
      color: theme.palette.lightBlue,
    },
  },
  navy: {
    backgroundColor: theme.palette.navyBlue,
    "& p": {
      color: "#fff",
    },
    "& h6": {
      color: theme.palette.slate,
    },
  },
  transparent: {
    backgroundColor: "transparent",
    borderColor: theme.palette.navyBlue,
    "& p": {
      color: theme.palette.navyBlue,
    },
    "& h6": {
      color: theme.palette.slate,
    },
  },
}));

const InfoBox = ({ title, code, variant }) => {
  const classes = useStyles();

  const containerClasses = clsx([classes.ovalBoxItemWrapper, classes[variant]]);
  return (
    <Box className={containerClasses}>
      <Typography variant="h6">{title[0]}</Typography>
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
  variant: PropTypes.oneOf(["white", "yellow", "blue", "navy", "transparent"]),
};
InfoBox.defaultProps = {
  title: "",
  variant: "white",
};

export default InfoBox;
