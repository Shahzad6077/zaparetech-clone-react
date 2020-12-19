import React from "react";

import { TwoSidedLayout } from "./../../../Utils";
import { ReactComponent as TopIllustrationSvg } from "./../../../Assets/topIllustration.svg";
import useStyles from "./styles";
import Slider from "./Slider";

const Index = () => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      LeftComponent={<TopIllustrationSvg />}
      RightComponent={<Slider />}
    />
  );
};

export default Index;
