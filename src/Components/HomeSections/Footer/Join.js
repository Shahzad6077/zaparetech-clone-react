import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { ReactComponent as LogoIcon } from "./../../../Assets/logo-white.svg";
import { TitleBox } from "./../../../Utils";
const JoinFooterSection = ({ title1, title2, linkTitle, linkPath }) => {
  const classess = useStyles();

  return (
    <Container className={classess.joinFooterSec}>
      <div className={classess.brandLogo}>
        <LogoIcon />
      </div>

      <Typography variant="h2">{title1}</Typography>
      <Typography variant="body1">{title2}</Typography>
      <TitleBox
        to={linkPath}
        title={linkTitle}
        justifyContent="center"
        color="invert"
      />
    </Container>
  );
};

JoinFooterSection.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  linkTitle: PropTypes.string,
  linkPath: PropTypes.string,
};
JoinFooterSection.defaultProps = {
  title1: "Care To Join Us",
  title2:
    "Embark on an exciting career with us to learn and grow alongside the best in the industry",
  linkTitle: "View current openings",
  linkPath: "#toopenings",
};

export default JoinFooterSection;
