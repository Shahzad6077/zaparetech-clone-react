import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { useSliderItemStyles } from "./styles";
const SliderItem = ({ content, title }) => {
  const classes = useSliderItemStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h2" className={classes.content__h2}>
          {content?.map((str, i) => {
            return (
              <div key={i} className={classes.h2_div}>
                <span>{str}</span>
              </div>
            );
          })}
        </Typography>
      </Box>
      <Box className={classes.title}>
        <a href="#asdf">
          <span>{title}</span>
        </a>
      </Box>
    </Box>
  );
};

SliderItem.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
};

export default SliderItem;
