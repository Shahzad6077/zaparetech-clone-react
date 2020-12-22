import { Box } from "@material-ui/core";
import React from "react";
import { FadeAnimationBox } from "../../../Utils";

import aboutImg from "./../../../Assets/about-img.png";
import { useInfoStyles } from "./styles";
const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <FadeAnimationBox animateTo="down" style={{ height: "100%" }}>
      <Box className={classes.imgWrapper}>
        <img alt="About what we are :)" src={aboutImg} />
      </Box>
    </FadeAnimationBox>
  );
};

export default ImageBox;
