import React, { useState } from "react";
import { Typography, Box, Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import arcade from "../assets/gamepage/arcade.png";
import crcvs from "../assets/gamepage/crc-versus.png";
import crcrizz from "../assets/gamepage/crc-rizz.png";
import mannymania from "../assets/gamepage/manny-mania.png";

const images = [
    {
        title: "crcvs",
        url: crcvs,
        src: "media/index.html",
        // link: "https://combatrobotics.engineering.cornell.edu/gamenew.html",
    },
    {
        title: "crcrizz",
        url: crcrizz,
        src: "",
        // link: "", // No link for crcrizz
    },
    {
        title: "mannymania",
        url: mannymania,
        src: "oldgame/gameold.html",
        // src is new, link is old
        // link: "https://combatrobotics.engineering.cornell.edu/oldgame/gameold.html",
    },
];

export default function Game() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [iframeSrc, setIframeSrc] = useState(images[1].src);
    // new thing above with images[] thing
    const [gameSelected, setGameSelected] = useState(false);
    // New state to track if a game is selected

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleImageClick = (index) => {
        setIframeSrc(images[index].src);
        setCurrentIndex(index);
        setGameSelected(true);
        // Hide title and carousel when a game is selected
    };
    // const handleImageClick is new

    return (
        <Box
            sx={{
                width: "100vw",
                // height: "82.2vh",
                // 82.2vh original height but causes black body to show under header
                height: "92.5vh",
                minHeight: "82.2vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",

                // backgroundColor: "yellow"
            }}
        >
            <motion.div
                initial={{ scale: 0.3 }}
                animate={{ scale: 0.85, y: "45px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.5, 1, 0.8, 1] }}
                style={{ position: "absolute", zIndex: 0 }}
            >
                {/* <Box 
          sx={{
            backgroundColor:"yellow",
            width: "1020px",
            height: "560px",
            // width: "1020px",
            // width: "80.4vh",
            // height: "560px",
            // height: "56.6vh",
            // marginTop: "290px",
            marginLeft: "20px",
            marginBottom: "16px",
            // zIndex: "3",
            // zIndex doesnt serve purpose anymore since its wrapped in the motion div now
            }}>
        </Box> */}


                {/* screen with game that loads */}
                <iframe
                    // src="media/index.html" 
                    // src="oldgame/gameold.html"
                    src={iframeSrc}
                    // new src thing
                    width="1020px"
                    height="560px"
                    style={{ marginLeft: "20px", marginBottom: "16px", border: "none" }}
                    title="Combat Robotics Game"
                    allowFullScreen
                    cursor="crosshair"
                />

                {/* "../assets/gamepage/arcade.png" */}


            </motion.div>

            {/* Arcade Image as Background */}
            <motion.div
                initial={{ scale: 0.3 }}
                animate={{ scale: 0.85, y: "45px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.5, 1, 0.8, 1] }}
                style={{ position: "absolute", zIndex: -1, }}
            >
                <img src={arcade} style={{ width: "auto", height: "100%", }} />
                {/* <Box 
          sx={{
            backgroundColor:"yellow",
            // width: "1020px",
            width: "200px",
            // height: "560px",
            height: "200px",
            // marginTop: "290px",
            // marginLeft: "20px",
            // zIndex: "1",
            // zIndex: "3",
            // zIndex doesnt serve purpose anymore since its wrapped in the motion div now
            }}>
        </Box> */}
            </motion.div>

            {/* Title */}

            {!gameSelected && (
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: -100 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ position: "relative", zIndex: 1, }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        GAMES
                    </Typography>
                </motion.div>
            )}
            {/* excalamation mark thing new */}

            {/* Carousel for Game Images */}

            {!gameSelected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ position: "relative", zIndex: 1, marginTop: "20px", }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "visible",
                            width: "100vw",
                            maxWidth: "600px",
                        }}
                    >
                        <IconButton onClick={handlePrev} sx={{ zIndex: 2 }}>
                            <ArrowBack sx={{ color: "white" }} />
                        </IconButton>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                overflow: "visible",

                            }}
                        >
                            {images.map((image, index) => (
                                <motion.div
                                    key={image.title}
                                    animate={{
                                        x: `${(index - currentIndex) * 170}px`,
                                        scale: index === currentIndex ? 1.2 : 1,
                                        opacity: index === currentIndex ? 1 : 0.5,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: "absolute", cursor: "pointer" }}
                                    onClick={() => handleImageClick(index)}
                                // new onclick
                                >
                                    {image.link ? (
                                        <Link href={image.link} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={image.url}
                                                alt={image.title}
                                                style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </Box>

                        <IconButton onClick={handleNext} sx={{ zIndex: 2 }}>
                            <ArrowForward sx={{ color: "white" }} />
                        </IconButton>
                    </Box>
                </motion.div>
            )}
            {/* exclamation mark thing way way up top is new */}
        </Box>
    );
}