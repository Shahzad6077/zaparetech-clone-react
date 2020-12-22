import React from "react";

import { TwoSidedLayout } from "./../../../Utils";
import useStyles from "./styles";
import Slider from "./Slider";
import ImgBox from "./ImgBox";

const Index = () => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      LeftComponent={<ImgBox />}
      RightComponent={<Slider />}
    />
  );
};

export default Index;
