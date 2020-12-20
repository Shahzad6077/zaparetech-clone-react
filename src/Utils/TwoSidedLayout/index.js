import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";

const Index = ({
  classes,
  LeftComponent,
  RightComponent,
  leftItemProps,
  rightItemProps,
  containerProp,
}) => {
  return (
    <Box className={classes.root}>
      <Grid container className={classes.container} {...containerProp}>
        {/* LEFT SIDE FOR SVG ILLUSTRATION */}

        <Grid item {...leftItemProps} className={classes.leftSideClassName}>
          <Box className={classes.leftWrapper}>{LeftComponent} </Box>
        </Grid>

        {/* RIGHT SIDE FOR CAROUSEL */}
        <Grid item {...rightItemProps} className={classes.rightSideClassName}>
          <Box className={classes.rightWrapper}>{RightComponent}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Index.propTypes = {
  classes: PropTypes.object,
  LeftComponent: PropTypes.node,
  RightComponent: PropTypes.node,

  leftItemProps: PropTypes.object,
  rightItemProps: PropTypes.object,
  containerProp: PropTypes.object,
};

Index.defaultProps = {
  leftItemProps: {
    xs: 12,
    md: 6,
  },
  rightItemProps: {
    xs: 12,
    md: 6,
  },
  containerProp: {},
};
export default Index;
