import React from "react";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import arcade from "../assets/arcade.png"

const headerHeight = NavBar.height;
const footerHeight = Footer.height;

console.log("header height: " + headerHeight);

console.log("footer height: " + footerHeight);

const contentHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;

console.log("content height: " + contentHeight);

export default function Game() {
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
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
