import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import arcade from "../assets/arcade.png"

const Game = ({
  navbarHeight,
  footerHeight
}) => {
  const contentHeight = `calc(99vh - ${navbarHeight + footerHeight}px)`;
  console.log("Content height: " + contentHeight);
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: contentHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}>
        <Typography variant="h1">
          Game Page
        </Typography>
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1.25 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.5, 1, 0.8, 1],
          }}>
          <img
            src={arcade}
            alt="Arcade"
          />
        </motion.div>

      </Box>
    </div>
  );
}

export default Game;
