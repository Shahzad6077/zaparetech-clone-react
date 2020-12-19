import React from "react";
import { ReactComponent as OvalShape } from "./../../../Assets/oval.svg";
import useStyles from "./styles";
import { Box } from "@material-ui/core";

const ServicesItemSide = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.shapeWrapper}>
        <OvalShape width="100%" height="100%" />
      </div>
      <Box></Box>
    </>
  );
};

export default ServicesItemSide;
