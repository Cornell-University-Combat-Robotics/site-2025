import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import ScrollControlledVideo from "./ScrollControlledVideo";
import React from "react";

// This component is responsible for making the video on the robots page stick to the top
const StickyBox: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const videoTop = videoRef.current.getBoundingClientRect().top;
      const videoHeight = videoRef.current.offsetHeight;
      const triggerPoint = window.innerHeight * 0.1;

      if (videoTop + videoHeight < triggerPoint) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "120vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <Box
          ref={videoRef}
          sx={{
            position: isSticky ? "sticky" : "relative",
            top: isSticky ? "50px" : "unset",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <ScrollControlledVideo />
        </Box>
      </Box>
    </Container>
  );
};

export default StickyBox;
