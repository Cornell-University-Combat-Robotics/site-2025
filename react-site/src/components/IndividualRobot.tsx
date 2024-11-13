import { Box, Typography } from "@mui/material";
import React from "react";

export interface IndividualRobotProps {
  name: string; // Name of the robot
  makers: string[]; // Members who worked on the robot
  desc: string; // Short description of the bot
  image: string; // Link to the file location of the primary robot location
  stats: string[]; // Index 0: Year, Index 1: Height, Index 2: Weight, Index 3: Fights, Index 4: Wins, Index 5: Top Speed, Index 6: Weapon Speed,
  // Index 7: Most damaged part, Index 8: Favorite movie
  featured_fight: string; // Youtube link
  design: string;
  trivia: string[];
  fights: string[][]; // In each fight array, Index 0: Event, Index 1: Opponent, Index 2: Result, Index 3: By, Index 4: Video, Index 5: Length (sec)
  gallery_imgs: string[]; // Link to the file location of pictures
  gallery_vids: string[]; // Link to the file location of videos
}

export default function IndividualRobot(props: IndividualRobotProps) {
  return (
    <Box ml={15} mt={7}>
      <Typography variant="h2" align="left">{props.name}</Typography>
      <Typography variant="h4" align="left" style={{ fontStyle: 'italic' }}>
        {props.makers.join(', ')}
      </Typography>
      Description

    </Box>
  );
}