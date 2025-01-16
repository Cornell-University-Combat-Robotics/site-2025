import React from "react";
import { Typography, Box, Grid2, Link } from "@mui/material";
import { motion } from "framer-motion";
import arcade from "../assets/gamepage/arcade.png"
import crcvs from '../assets/gamepage/crc-versus.png'
import crcrizz from '../assets/gamepage/crc-rizz.png'
import mannymania from "../assets/gamepage/manny-mania.png"
import zIndex from "@mui/material/styles/zIndex";

const images = [
  {
    title: 'crcvs',
    url: crcvs,
    link: '#',
  },
  {
    title: 'crcrizz',
    url: crcrizz,
    link: '#',
  },
  {
    title: 'mannymania',
    url: mannymania,
    link: '#',
  },
]


const Game = ({ navbarHeight, footerHeight }) => {
  const contentHeight = `calc(99vh - ${navbarHeight + footerHeight}px)`;
  // console.log("Content height: " + contentHeight);
  return (
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
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, y: "100px" }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.5, 1, 0.8, 1],
        }}
        sx={{
          position: 'relative'
        }}>
        <img
          src={arcade}
          sx={{
            zIndex: -999,
          }}
        />
      </motion.div>
      {/* <motion.div> */}
      <Box
        direction="column"
        sx={{
          position: 'relative',
          width: '20%',
          height: '20%',
        }}>
        {images.map((image) => (
          // <Item>
          <Link
            href={image.link}
            key={image.title}
          >
            <img
              src={image.url}

            />
          </Link>
          // </Item>
        ))}
      </Box>
      {/* </motion.div> */}
      <Typography
        variant="h1"
        sx={{
          zIndex: 1
        }}>
        Game Page
      </Typography>
    </Box>
  );
}

export default Game;
