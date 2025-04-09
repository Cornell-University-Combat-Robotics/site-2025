import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import ScrollControlledVideo from "./ScrollControlledVideo";
import React from "react";

const StickyBox: React.FC = () => {
    const videoRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(true);
    const startYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!videoRef.current) return;

            const videoTop = videoRef.current.getBoundingClientRect().top;
            const videoHeight = videoRef.current.offsetHeight;
            const triggerPoint = window.innerHeight;

            if (videoTop + videoHeight < triggerPoint) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            startYRef.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isSticky) return;

            const y = e.touches[0].clientY;
            const dy = y - startYRef.current;

            // Only prevent vertical scrolling during sticky phase
            if (Math.abs(dy) > 5) {
                e.preventDefault();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isSticky]);

    useEffect(() => {
        if (isSticky) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
        }
    }, [isSticky]);

    return (
        <Box
            ref={videoRef}
            sx={{
                position: isSticky ? "fixed" : "relative",
                top: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: isSticky ? "100vh" : "auto",
                flexDirection: "column",
                alignItems: "center",
                overflow: 'hidden',
                zIndex: isSticky ? 1000 : 'auto',
            }}
        >
            <ScrollControlledVideo />
        </Box>
    );
};

export default StickyBox;