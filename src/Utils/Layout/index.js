import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Index = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};

export default Index;
