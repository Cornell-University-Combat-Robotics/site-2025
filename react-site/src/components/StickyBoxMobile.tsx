import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import ScrollControlledVideo from "./ScrollControlledVideo";
import React from "react";

// This component is responsible for making the video on the robots page stick to the top
const StickyBoxMobile: React.FC = () => {
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
        <Box
            ref={videoRef}
            sx={{
                position: "sticky",
                // marginBottom: isSticky ? "100vh" : "0vh",
                mx: '0',
                display: "flex",
                justifyContent: "center",
                width: "100vw",
                height: "auto",
                flexDirection: "column",
                alignItems: "center",
                overflow: 'hidden',
            }}
        >
            <ScrollControlledVideo />
        </Box>
    );
};

export default StickyBoxMobile;
