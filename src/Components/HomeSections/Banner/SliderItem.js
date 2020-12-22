import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { useSliderItemStyles } from "./styles";
import { FadeAnimationBox, TitleBox } from "./../../../Utils";
const SliderItem = ({ content, title }) => {
  const classes = useSliderItemStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h2" className={classes.content__h2}>
          {content?.map((str, i) => {
            return (
              <div key={i} className={classes.h2_div}>
                <FadeAnimationBox animateTo="down" config={{ isStart: true }}>
                  <span>{str}</span>
                </FadeAnimationBox>
              </div>
            );
          })}
        </Typography>
      </Box>
      <Box className={classes.title}>
        <TitleBox title={title} />
      </Box>
    </Box>
  );
};

SliderItem.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
};

export default SliderItem;
