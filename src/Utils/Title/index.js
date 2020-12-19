import React, { useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: (p) => p.justifyContent,
    },
  },
  atag: {
    textDecoration: "none",
    color: theme.palette.blue,
    fontWeight: 700,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  overlay1: {
    backgroundColor: theme.palette.yellow,
    marginTop: "2px",
    height: "6px",
    width: "100%",
  },
  overlay2: {
    position: "absolute",
    backgroundColor: theme.palette.blue,
    height: "6px",
    marginTop: "2px",
    width: "0%",
    bottom: 0,
  },
}));

const Title = ({ title, className, to, justifyContent }) => {
  const classes = useStyles({ justifyContent });
  const overLayRef = useRef();

  const onAnimate = (type) => {
    const elem = overLayRef.current;
    const width = type === "enter" ? "100%" : "0%";
    elem.animate([{ width }], {
      duration: 150,
    }).onfinish = () => {
      console.log("finish");
      elem.style.width = width;
    };
  };
  const onEnter = () => onAnimate("enter");
  const onLeave = () => onAnimate("leave");
  return (
    <div className={clsx(classes.titleWrapper, className.wrapper)}>
      <a
        href={to}
        className={classes.atag}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <span className={classes.txt}>{title}</span>
        <span className={classes.overlay1}></span>
        <span ref={overLayRef} className={classes.overlay2}></span>
      </a>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.object,
  to: PropTypes.string,
  justifyContent: PropTypes.string,
};
// Set default props
Title.defaultProps = {
  title: "",
  className: {},
  to: "#path",
  justifyContent: "flex-start",
};
export default Title;
