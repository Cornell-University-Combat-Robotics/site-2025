import { Box, Typography } from "@mui/material";
import React from "react";

/* **For each individual robot page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

  This file serves as a general component for individual robot pages. The idea is that it will format and render an IndividualRobot page
  completely, using the specific input passed in. This way, all the actual individual robot pages need to do is pass in the correct data to this reusable component.
*/
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
    <Box ml={15} mt={7} style={{ textAlign: 'left' }}>
      <Typography variant="h2" align="left">{props.name}</Typography>
      {/* **Include the nickname */}
      <Typography variant="h4" align="left" width='80%' style={{ fontStyle: 'italic' }}>
        {props.makers.join(', ')}
      </Typography>
      <Typography variant="h5" mt={5}>Description</Typography>
      {props.desc}
      <Typography variant="h5" mt={5}>Featured Fight</Typography>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Typography variant="h5" mt={5}>Design</Typography>
      {props.design}
      <Typography variant="h5" mt={5}>Trivia</Typography>
      {props.trivia}
      <Typography variant="h5" mt={5}>Fights</Typography>
      {props.fights}
      <Typography variant="h5" mt={5}>Gallery</Typography>

    </Box>
  );
}