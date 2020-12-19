import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Hidden } from "@material-ui/core";
import { useControlsStyles } from "./styles";

import { ReactComponent as ChevronRightIcon } from "./../../../Assets/chevron-right.svg";
import { ReactComponent as ChevronLeftIcon } from "./../../../Assets/chevron-left.svg";

const SliderControls = ({ length, gotoPosition, currentPosition }) => {
  const classes = useControlsStyles();

  const renderDots = useMemo(() => {
    return Array(length)
      .fill()
      .map((_, i) => (
        <button key={i} onClick={() => gotoPosition(i)}>
          <div
            className={`
              ${classes.dot}  ${currentPosition === i && classes.activeDot}
            `}
          ></div>
        </button>
      ));
  }, [length, currentPosition]);

  const onClickArrows = (type) => {
    const crr = currentPosition;
    if (type === "NEXT") {
      if (crr === length - 1) {
        return gotoPosition(0);
      }
      return gotoPosition(crr + 1);
    } else if (type === "BACK") {
      if (crr === 0) {
        return gotoPosition(length - 1);
      }
      return gotoPosition(crr - 1);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.dotsWrapper}>{renderDots}</Box>
      <Hidden smDown>
        <Box className={classes.arrows}>
          <button onClick={() => onClickArrows("BACK")}>
            <span>
              <ChevronLeftIcon />
            </span>
          </button>
          <button onClick={() => onClickArrows("NEXT")}>
            <span>
              <ChevronRightIcon />
            </span>
          </button>
        </Box>
      </Hidden>
    </Box>
  );
};

SliderControls.propTypes = {
  length: PropTypes.number,
  currentPosition: PropTypes.number,
  gotoPosition: PropTypes.func,
};

export default SliderControls;
