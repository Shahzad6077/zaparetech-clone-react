import { Box } from "@material-ui/core";
import React from "react";

import { ReactComponent as EnquiryIllustration } from "./../../../Assets/enq-illustration.svg";
import { useInfoStyles } from "./styles";
const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <Box className={classes.imgWrapper}>
      <EnquiryIllustration />
    </Box>
  );
};

export default ImageBox;
