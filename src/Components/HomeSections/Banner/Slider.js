import React, { useMemo, useState, useCallback } from "react";
import { Box } from "@material-ui/core";

import SliderItem from "./SliderItem";
import SliderControls from "./SliderControls";
import { useSliderStyles } from "./styles";
const SLIDER_CONTENT = [
  {
    title: "Revenue Cycle Management",
    content: [
      "Customized solutions",
      "to meet the need of",
      "the changing market",
    ],
  },
  {
    title: "Staff Agumentation",
    content: ["Scalable extended", "business office", "services"],
  },
  {
    title: "Product Management",
    content: [
      "Innovative and",
      "intellegent technology",
      "solutions and services",
    ],
  },
];

// FUNCTION COMPONENT
const Slider = () => {
  const classes = useSliderStyles();
  const [sliderData] = useState(() => SLIDER_CONTENT);
  const [currentSliderPosition, setCurrentSliderPosition] = useState(0);

  const SLIDER_LENGTH = useMemo(() => sliderData.length, [sliderData]);

  const onGotoThatPosition = useCallback((p) => {
    setCurrentSliderPosition(p);
  }, []);

  return (
    <Box className={classes.root}>
      <SliderItem
        content={sliderData[currentSliderPosition].content}
        title={sliderData[currentSliderPosition].title}
      />
      <SliderControls
        length={SLIDER_LENGTH}
        gotoPosition={onGotoThatPosition}
        currentPosition={currentSliderPosition}
      />
    </Box>
  );
};

export default Slider;
