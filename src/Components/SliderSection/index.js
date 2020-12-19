import React from "react";
import { Box, Container, Typography, Hidden, Grid } from "@material-ui/core";

import { ReactComponent as TopIllustrationSvg } from "./../../Assets/topIllustration.svg";
import useStyles from "./styles";
import Slider from "./Slider";

const Index = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {/* LEFT SIDE FOR SVG ILLUSTRATION */}

        <Grid item xs={12} md={5} className={classes.illustrationWrapper}>
          <Box>
            <TopIllustrationSvg />
          </Box>
        </Grid>

        {/* RIGHT SIDE FOR CAROUSEL */}
        <Grid item xs={12} md={7} className={classes.carouselWrapper}>
          <Box>
            <Slider />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
