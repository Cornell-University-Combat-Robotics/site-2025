import React, { useState } from "react";
import { Typography, Box, Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import arcade from "../../assets/gamepage/arcade.png";

export default function GameMobile() {
    return (
        <Box
            sx={{
                width: "100vw",
                // 82.2vh original height but causes black body to show under header
                height: "92.5vh",
                minHeight: "82.2vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >

            {/* Arcade Image as Background */}
            <motion.div
                initial={{ scale: 0.3 }}
                animate={{ scale: 0.85, y: "45px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.5, 1, 0.8, 1] }}
                style={{ position: "absolute", zIndex: -1, }}
            >
                <img src={arcade} style={{ width: "auto", height: "100%", }} />
            </motion.div>

            {/* Title */}

            {(
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: -100 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ position: "relative", zIndex: 1, }}
                >
                    <Typography
                        variant="mobileH2"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            px: '5%',
                            paddingTop: '50%'
                        }}
                    >
                        You can find our games on desktop in fullscreen mode!
                    </Typography>
                </motion.div>
            )}
        </Box>
    );
}