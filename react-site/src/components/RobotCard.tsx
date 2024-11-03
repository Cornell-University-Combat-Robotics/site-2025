import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface RobotCardProps {
  name: string; // Name of the robot
  subteam: string // Subteam the bot belongs to (Kinetic, Sportsman, etc)
  desc: string; // Short desscription of the bot
  image: string; // Link to the file location of the robot
  link?: string; // Link to the individual robot page
  color: number; // 0 for red, 1 for pink
}

export default function RobotCard(props: RobotCardProps) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: props.color === 0 ? "#820002" : "#B85658", color: 'white' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="Robot image"
        />
        <CardContent>
          
          <Typography gutterBottom align='left' variant="h5" component="div" fontWeight='bold'>
            {props.name}
          </Typography>
          <Typography gutterBottom align='left' variant="body2">
            {props.subteam}
          </Typography>
          <Typography align='left' variant="body2">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
