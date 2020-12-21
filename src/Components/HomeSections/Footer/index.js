import React from "react";
import PropTypes from "prop-types";
import { Box, Divider } from "@material-ui/core";
import useStyles from "./styles";
import JoinSectionComp from "./Join";
import BottomSectionComp from "./Bottom";

const FooterSection = (props) => {
  const classess = useStyles();

  return (
    <Box className={classess.footer}>
      <Box className={classess.footerSub1}>
        <JoinSectionComp />
      </Box>
      <Divider variant="middle" light={true} className={classess.divider} />
      <Box className={classess.footerSub2}>
        <BottomSectionComp />
      </Box>
    </Box>
  );
};

FooterSection.propTypes = {};

export default FooterSection;
