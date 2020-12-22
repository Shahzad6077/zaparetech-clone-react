import { Box } from "@material-ui/core";
import React from "react";

import overlayImg from "./../../../Assets/overlay-img.png";
import { useInfoStyles } from "./styles";
import { FadeAnimationBox } from "../../../Utils";

const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <FadeAnimationBox animateTo="down" style={{ height: "100%" }}>
      <Box className={classes.imgWrapper}>
        <img alt="About what we are :)" src={overlayImg} />
      </Box>
    </FadeAnimationBox>
  );
};

export default ImageBox;
