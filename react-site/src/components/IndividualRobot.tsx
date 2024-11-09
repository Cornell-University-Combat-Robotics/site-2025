import { Box, Typography } from "@mui/material";
import React from "react";

export interface IndividualRobotProps {
  name: string; // Name of the robot
  makers: string[]; // Members who worked on the robot
  desc: string; // Short description of the bot
  image: string; // Link to the file location of the primary robot location
  stats: string[];
  featured_fight: string; // Youtube link
  design: string;
  trivia: string[];
  fights: string[];
  gallery_imgs: string[]; // Link to the file location of robot pictures
  gallery_vids: string[]; // Link to the file location of robot videos
}

export default function IndividualRobot(props: IndividualRobotProps) {
  return (
    <Box>
      <Typography>
        {props.name} + {props.makers} + {props.desc} + {props.image} + {props.stats} + {props.featured_fight} + {props.design} + {props.trivia} + {props.fights} + {props.gallery_imgs} + {props.gallery_vids}
      </Typography>
    </Box>
  );
}