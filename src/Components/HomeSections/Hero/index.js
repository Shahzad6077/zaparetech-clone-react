import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import useStyles from "./styles";
import { ReactComponent as ZTagIllustration } from "./../../../Assets/z-tag.svg";
const HeroSection = ({ title, content }) => {
  const classess = useStyles();

  const renderInfoList = useMemo(
    () =>
      content.map((obj, i) => {
        return (
          <Grid item md={4} key={i}>
            <Typography variant="h6">{obj?.title}</Typography>
            <Typography variant="body1">{obj?.content}</Typography>
          </Grid>
        );
      }),
    [content]
  );
  return (
    <Box className={classess.rootSection}>
      <div style={{ zIndex: 2, position: "relative" }}>
        <Typography variant="h2">{title.split(",")[0]},</Typography>
        <Typography variant="h2">{title.split(",")[1]}</Typography>
        <Grid container spacing={4} className={classess.infWrapper}>
          {renderInfoList}
        </Grid>
      </div>
      <div className={classess.ztag}>
        <ZTagIllustration />
      </div>
    </Box>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
HeroSection.defaultProps = {
  title: "Economical, dynamic and managed business solutions",
  content: [
    {
      title: "Improved efficiency",
      content:
        "By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.",
    },
    {
      title: "Reduced Cost",
      content:
        "Our solutions are crafted to bring effective change in your business by ensuring cost-effective and reliable operation methodologies",
    },
    {
      title: "Overarching Impact",
      content:
        "By ensuring quality process management we can ensure a comprehensive impact on your business.",
    },
  ],
};

export default HeroSection;
