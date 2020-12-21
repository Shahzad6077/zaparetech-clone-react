import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Grid } from "@material-ui/core";

import { ReactComponent as LinkedinIcon } from "./../../../Assets/linkedin-in.svg";
import { ReactComponent as FacebookIcon } from "./../../../Assets/facebook-f.svg";
import useStyles from "./styles";

const BottomFooterSection = ({ linksTxtArray, reservedTxt, designByTxt }) => {
  const classess = useStyles();

  return (
    <Container className={classess.bottomFooterSec}>
      <Grid container>
        {/* Nav LINKS */}
        <Grid item xs={6} md={12}>
          <ul className={classess.navLinksWrapper}>
            {linksTxtArray?.map((obj, i) => (
              <li key={i}>
                <a href={obj.path}>{obj.txt}</a>
              </li>
            ))}
          </ul>
        </Grid>
        {/* Social LINKS */}
        <Grid item xs={6} md={12} className={classess.socialLinksWrapper}>
          <Typography variant="body1">Follow us :</Typography>
          <Typography variant="body2">
            <a href="https://www.fb.com">
              <FacebookIcon />
            </a>

            <a href="https://www.fb.com">
              <LinkedinIcon />
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Box className={classess.designInfoTxt}>
        <Typography variant="body1">{reservedTxt}</Typography>
        <Typography variant="body1">{designByTxt}</Typography>
      </Box>
    </Container>
  );
};

BottomFooterSection.propTypes = {
  linksTxtArray: PropTypes.array,
  reservedTxt: PropTypes.string,
  designByTxt: PropTypes.string,
};
BottomFooterSection.defaultProps = {
  linksTxtArray: [
    {
      txt: "Home",
      path: "#Home",
    },
    {
      txt: "About us",
      path: "#about",
    },
    {
      txt: "Services",
      path: "#services",
    },
    {
      txt: "Career",
      path: "#carerr",
    },
    {
      txt: "Contact",
      path: "#contact",
    },
  ],
  reservedTxt: "All right reserved © 2019 zaparetechnologies.com",
  designByTxt: "Designed by: Webandcrafts.com",
};

export default BottomFooterSection;
