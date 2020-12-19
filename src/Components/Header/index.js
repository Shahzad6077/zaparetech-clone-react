import React from "react";
import { Box, Container, Typography, Hidden } from "@material-ui/core";

import { ReactComponent as BrandLogo } from "./../../Assets/logo.svg";
import { ReactComponent as NavIcon } from "./../../Assets/cheeseburger.svg";

import useStyles from "./styles.js";
const Index = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        {/* Logo */}
        <Box>
          <a href="#home" className={classes.brandWrapper}>
            <span>
              <BrandLogo />
            </span>
            <Typography variant="h6">Zapare Technologies</Typography>
          </a>
        </Box>
        {/* Link wrapper */}
        <Hidden smDown>
          <ul className={classes.linksWrapper}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a className={classes.isLinkActive} href="#home">
                About us
              </a>
            </li>
            <li>
              <a href="#home">Service</a>
            </li>
            <li>
              <a href="#home">Career</a>
            </li>
            <li>
              <a href="#home">Contact</a>
            </li>
          </ul>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.navBtn}>
            <span>
              <NavIcon />
            </span>
          </div>
        </Hidden>
      </Container>
    </Box>
  );
};

export default Index;
