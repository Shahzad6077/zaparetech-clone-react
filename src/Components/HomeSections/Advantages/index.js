import PropTypes from "prop-types";
import { TwoSidedLayout } from "../../../Utils";
import List from "./List";
import ImageBox from "./ImageBox";

import useStyles from "./styles";
const AdvantagesSection = () => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      LeftComponent={<List />}
      RightComponent={<ImageBox />}
      leftItemProps={{ xs: 12, md: 7 }}
      rightItemProps={{ xs: 12, md: 5 }}
    />
  );
};

AdvantagesSection.propTypes = {};
AdvantagesSection.defaultProps = {};
export default AdvantagesSection;
