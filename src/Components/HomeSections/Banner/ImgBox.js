import React, { useEffect } from "react";
import { FadeAnimationBox } from "../../../Utils";

import { ReactComponent as TopIllustrationSvg } from "./../../../Assets/topIllustration.svg";

const ImgBox = () => {
  return (
    <FadeAnimationBox animateTo="down">
      <TopIllustrationSvg />
    </FadeAnimationBox>
  );
};

export default ImgBox;
