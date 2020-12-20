import PropTypes from "prop-types";
import { InfoBox, TwoSidedLayout } from "../../../Utils";
import ImageBox from "./ImageBox";

import useStyles from "./styles";
const EnquirySection = ({ infoContent }) => {
  const classes = useStyles();

  return (
    <TwoSidedLayout
      classes={classes}
      RightComponent={
        <InfoBox
          title="Talk to our experts about your requirements"
          content="Contact us and know more about how our experts can help your business grow"
          bottomLinkTxt="Enquire Now"
          onWhichSide="right"
        />
      }
      LeftComponent={<ImageBox />}
    />
  );
};
const a =
  "A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery";

EnquirySection.propTypes = {
  infoContent: PropTypes.string,
};
EnquirySection.defaultProps = {
  infoContent: a,
};
export default EnquirySection;
