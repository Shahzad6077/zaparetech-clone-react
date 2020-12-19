import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { TitleBox } from "..";

const useStyles = makeStyles((theme) => ({
  infoBoxWrapper: (props) => ({
    width: "100%",
    margin: "1rem 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 16px",
    },
    [theme.breakpoints.up("md")]: {
      [`${
        props.onWhichSide === "left" ? "paddingLeft" : "paddingRight"
      }`]: "8%",
    },
    [theme.breakpoints.up("lg")]: {
      [`${
        props.onWhichSide === "left" ? "paddingLeft" : "paddingRight"
      }`]: "10%",
    },

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
        textAlign: `${props.onWhichSide}`,
        fontSize: "calc(1.8em + 1.6vw)",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(1.8em + 2.4vw)",
      },
    },

    // Paragraph
    "& p": {
      color: theme.palette.slate,
      textAlign: "center",
      marginBottom: "1rem",
      lineHeight: 1.6,

      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(0.9em + 0.5vw)",
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: "2.4rem",
        textAlign: "left",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "calc(0.6em + 0.8vw)",
      },
    },
  }),
}));

const InfoBox = ({ onWhichSide, title, content, bottomLinkTxt }) => {
  const classes = useStyles({ onWhichSide });

  return (
    <Box className={classes.infoBoxWrapper + " ali"}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
      <TitleBox title={bottomLinkTxt} />
    </Box>
  );
};

InfoBox.propTypes = {
  onWhichSide: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  bottomLinkTxt: PropTypes.string,
};
InfoBox.defaultProps = {
  onWhichSide: "left",
  title: "",
  content: "",
  bottomLinkTxt: "",
};

export default InfoBox;
