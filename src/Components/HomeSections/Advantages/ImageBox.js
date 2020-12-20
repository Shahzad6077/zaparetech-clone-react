import { Box } from "@material-ui/core";
import React from "react";

import overlayImg from "./../../../Assets/overlay-img.png";
import { useInfoStyles } from "./styles";
const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <Box className={classes.imgWrapper}>
      <img alt="About what we are :)" src={overlayImg} />
    </Box>
  );
};

export default ImageBox;
