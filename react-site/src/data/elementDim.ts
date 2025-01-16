import { useRef, useState, useEffect } from "react";

export const elementDim = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (refContainer.current) {
      console.log("Navbar logging height");
      console.log("width: " + refContainer.current.offsetWidth);
      console.log("height: " + refContainer.current.offsetHeight);
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);
  return { refContainer, dimensions };
};