import React, { useEffect } from "react";
import useAnimations from "../../Helpers/useAnimations";
import useIntersectionObserver from "./../../Hooks/useIntersection";

import PropsTypes from "prop-types";

const FadeAnimationBox = ({
  animateTo,
  children,
  threshold,
  config,
  style,
}) => {
  const [setRef, entry, ref] = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });
  const { onFadeMove } = useAnimations();
  useEffect(() => {
    if (entry.isIntersecting) {
      onFadeMove(ref, animateTo, config);
    }
  }, [entry, animateTo, config]);
  return (
    <div
      ref={setRef}
      style={{
        position: "relative",
        opacity: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

FadeAnimationBox.propTypes = {
  animateTo: PropsTypes.string,
  children: PropsTypes.node,
  threshold: PropsTypes.number,
  config: PropsTypes.object,
  style: PropsTypes.object,
};
FadeAnimationBox.defaultProps = {
  animateTo: "left",
  threshold: 0.3,
  config: {},
  style: {},
};

export default FadeAnimationBox;
