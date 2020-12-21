import { useEffect, useRef, useState } from "react";

export default ({
  root = null,
  rootMargin,
  threshold = 0,
  triggerOnce = false,
}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const isFirstTriggered = useRef(false);
  const observer = useRef(
    new window.IntersectionObserver(
      ([entry]) => {
        if (isFirstTriggered.current) {
          return;
        }
        updateEntry(entry);
        if (triggerOnce && entry.isIntersecting) {
          isFirstTriggered.current = true;
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};
