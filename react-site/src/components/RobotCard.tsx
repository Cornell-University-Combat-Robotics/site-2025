import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface RobotCardProps {
  name: string; // Name of the robot
  subteam: string // Subteam the bot belongs to (Kinetic, Sportsman, etc). For 3lb bots, this will be the semester they were built.
  desc?: string; // Short desscription of the bot
  image: string; // Link to the file location of the robot
  link?: string; // Link to the individual robot page
  color: number; // 0 for red, 1 for pink
  // In the future, we should remove the color prop since it requires hard-coding (seen in robots.ts).
  // Instead, RobotCardList should automatically alternate colors.
}

export default function RobotCard(props: RobotCardProps) {
  const background_color = props.color === 0 ? "#820002" : "#B85658";

  return (
    <Card sx={{ maxWidth: 345, bgcolor: background_color, color: 'white' }}
      style={{
        borderRadius: "7%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CardActionArea>
        <Box width="70%" borderRadius="7%" bgcolor={background_color == "#820002" ? "#B23030" : "#ED9191"}>
          <CardMedia
            component="img"
            image={props.image}
            alt="Robot image"
          />
        </Box>
        <CardContent>
          <Typography gutterBottom align='left' variant="h5" component="div" fontWeight='bold'>
            {props.name}
          </Typography>
          <Box bgcolor={props.color === 0 ? "#B23030" : "#ED9191"} sx={{ borderRadius: 5 }} width="19%">
            <Typography gutterBottom align='left' variant="body2" mx={1}>
              {props.subteam}
            </Typography>
          </Box>
          <Typography align='left' variant="body2">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
