import PropTypes from "prop-types";
import { InfoBox, TwoSidedLayout } from "../../../Utils";
import ImageBox from "./ImageBox";

import useStyles from "./styles";
const AboutSection = ({ infoContent }) => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      LeftComponent={
        <InfoBox
          title="We are"
          content={infoContent}
          bottomLinkTxt="About Us"
        />
      }
      RightComponent={<ImageBox />}
    />
  );
};
const a =
  "A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery";

AboutSection.propTypes = {
  infoContent: PropTypes.string,
};
AboutSection.defaultProps = {
  infoContent: a,
};
export default AboutSection;
