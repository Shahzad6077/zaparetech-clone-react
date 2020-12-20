import React, { useMemo, Fragment } from "react";
import { ReactComponent as OvalShape } from "./../../../Assets/oval.svg";
import useStyles from "./styles";
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { OvalItem } from "../../../Utils";

const ServicesItemSide = ({ ovalItemsData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isOvalCounterMatched = useMediaQuery(theme.breakpoints.up("md"));

  // const boxLines = useMemo(() => {
  //   const arr = [];
  //   return boxText
  //     .map((val, i) => {
  //       let factor;
  //       !smMatch ? (factor = 3) : (factor = 4);
  //       const extraSlicer = boxText.length - i;
  //       const slicer = (i + 1) % factor;
  //       const arOne = [];
  //       if (slicer === 0) {
  //         for (let x = factor - 1; x >= 0; x--) {
  //           arOne.push(boxText[i - x]);
  //         }
  //         return arOne;
  //       } else if (extraSlicer < factor) {
  //         if (arr.length > 0) return;
  //         for (let x = 0; x < extraSlicer; x++) {
  //           arr.push(boxText[i + x]);
  //         }
  //         return arr;
  //       } else {
  //         return undefined;
  //       }
  //     })
  //     .filter((val) => !!val);
  // }, [smMatch]);

  const renderOvelItems = useMemo(() => {
    const divider = isOvalCounterMatched ? 3 : 4;
    const txtArr = [];
    let j = 0;
    let arr = [];
    const len = ovalItemsData.length;
    ovalItemsData.forEach((obj, i) => {
      const counter = i + 1;
      arr.push(<OvalItem key={i} variant={obj.variant} title={obj.title} />);
      const marginTop = j * 80;
      if (counter % divider === 0) {
        txtArr.push(
          <Grid
            item
            xs={6}
            sm={4}
            className={classes.itemCol}
            style={{ marginTop }}
          >
            {arr}
          </Grid>
        );
        arr = [];
        j++;
      }
      if (counter == len && len % divider !== 0) {
        txtArr.push(
          <Grid
            item
            xs={6}
            sm={4}
            className={classes.itemCol}
            style={{ marginTop }}
          >
            {arr}
          </Grid>
        );
      }
    });
    return txtArr.map((o, i) => <Fragment key={i}>{o}</Fragment>);
  }, [ovalItemsData, isOvalCounterMatched]);
  console.log(renderOvelItems);
  return (
    <>
      <div className={classes.shapeWrapper}>
        <OvalShape width="100%" height="100%" />
      </div>
      <Box className={classes.servicesItemWrapper}>
        <Grid container spacing={3}>
          {renderOvelItems}
        </Grid>
      </Box>
    </>
  );
};

ServicesItemSide.defaultProps = {
  ovalItemsData: [
    {
      title: "Revenue Cycle Management",
      variant: "white",
    },
    {
      title: "Staff Augmentation",
      variant: "white",
    },
    {
      title: "Payment Posting",
      variant: "navy",
    },
    {
      title: "Reason Code Mapping",
      variant: "blue",
    },
    {
      title: "Product Management",
      variant: "transparent",
    },
    {
      title: "Virtual Assistant",
      variant: "yellow",
    },
    {
      title: "Correspondence Management",
      variant: "white",
    },
  ],
};

export default ServicesItemSide;
