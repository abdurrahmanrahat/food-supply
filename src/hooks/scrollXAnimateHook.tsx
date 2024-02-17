import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollX = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.3 1"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.7], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.7], [120, 0]);
  const opacityValues = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);

  const styleLeft = {
    opacity: opacityValues,
    x: leftX,
  };
  const styleRight = {
    opacity: opacityValues,
    x: rightX,
  };

  return { componentRef, styleLeft, styleRight };
};

export default useScrollX;
