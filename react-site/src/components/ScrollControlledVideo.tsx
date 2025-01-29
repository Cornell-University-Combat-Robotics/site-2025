import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface ScrollControlledVideoProps {
  videoSrc: string;
}

const ScrollControlledVideo: React.FC<ScrollControlledVideoProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    updateScrollHeight();
    window.addEventListener("resize", updateScrollHeight);

    return () => {
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const scrollTop = window.scrollY;
      const progress = scrollTop / scrollHeight;

      const video = videoRef.current;
      const duration = video.duration;

      video.currentTime = progress * duration;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);

  return (
    <Box>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ position: "sticky", width: "100%" }}
      />
    </Box>
  );

};

export default ScrollControlledVideo;