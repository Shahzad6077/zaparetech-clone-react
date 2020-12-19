import React from "react";
import PropTypes from "prop-types";
import { InfoBox, TwoSidedLayout } from "../../../Utils";

import ServicesItemSide from "./ServicesItemSide";
import useStyles from "./styles";

const ServicesSection = (props) => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      LeftComponent={<ServicesItemSide />}
      RightComponent={
        <InfoBox
          title="Services."
          content="We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers"
          bottomLinkTxt="Explore Services"
          onWhichSide="right"
        />
      }
    />
  );
};

ServicesSection.propTypes = {};

export default ServicesSection;
