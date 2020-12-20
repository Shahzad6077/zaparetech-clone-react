import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@material-ui/core";
import { useInfoStyles } from "./styles";

const List = ({ listArr }) => {
  const classess = useInfoStyles();

  const renderList = useMemo(() => {
    return listArr.map((str, i) => (
      <Grid key={i} item xs={12} sm={6}>
        <span />
        <Typography variant="body1">{str}</Typography>
      </Grid>
    ));
  }, [listArr]);
  return (
    <Box className={classess.listWrapper}>
      <Typography variant="h2">Zapare Advantages.</Typography>
      <Grid container spacing={4} className={classess.list}>
        {renderList}
      </Grid>
    </Box>
  );
};

List.propTypes = {
  listArr: PropTypes.array,
};
List.defaultProps = {
  listArr: [
    "JS experienced management team",
    "Secure work environment",
    "Compliance driven process",
    "Data driven quality review",
    "Workforce management",
    "24x7 coverage",
  ],
};

export default List;
