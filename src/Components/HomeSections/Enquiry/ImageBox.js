import { Box } from "@material-ui/core";
import { ReactComponent as EnquiryIllustration } from "./../../../Assets/enq-illustration.svg";
import { useInfoStyles } from "./styles";
import { FadeAnimationBox } from "./../../../Utils";

const ImageBox = () => {
  const classes = useInfoStyles();
  return (
    <FadeAnimationBox animateTo="down" style={{ height: "100%" }}>
      <Box className={classes.imgWrapper}>
        <EnquiryIllustration />
      </Box>
    </FadeAnimationBox>
  );
};

export default ImageBox;
