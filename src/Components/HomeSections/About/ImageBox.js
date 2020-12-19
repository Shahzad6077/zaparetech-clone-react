import { Box } from "@material-ui/core";
import React from "react";

import aboutImg from "./../../../Assets/about-img.png";
import { useInfoStyles } from "./styles";
const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <Box className={classes.imgWrapper}>
      <img alt="About what we are :)" src={aboutImg} />
    </Box>
  );
};

export default ImageBox;
