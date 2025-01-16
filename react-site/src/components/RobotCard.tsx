import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface RobotCardProps {
  name: string; // Name of the robot
  subteam: string // Subteam the bot belongs to (Kinetic, Sportsman, etc). For 3lb bots, this will be the semester they were built.
  desc?: string; // Short description of the bot
  image: string; // Link to the file location of the robot
  link: string; // Link to the individual robot page
  color: number; // 0 for red, 1 for pink
  // In the future, we should remove the color prop since it requires hard-coding (seen in robots.ts).
  // Instead, RobotCardList should automatically alternate colors.
}

export default function RobotCard(props: RobotCardProps) {
  const background_color = props.color === 0 ? "#820002" : "#B85658";

  return (
    // Link is the outermost compponent to make the entire card link to the individual robot page.
    <Link to={props.link}>
      <Card 
        sx={{ 
          width: 320, 
          height: 400, 
          bgcolor: background_color, 
          color: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          borderRadius: '7%', 
          padding: 2
        }}
        // style={{
        //   borderRadius: "7%",
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   flex: '0 1 auto',
        // }}
      >
        <CardActionArea>
          <Box 
            width="70%"
            height="auto" 
            borderRadius="7%" 
            bgcolor={background_color == "#820002" ? "#B23030" : "#ED9191"} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              marginTop: '2em'
            }}
          >
            <CardMedia
              component="img"
              image={props.image}
              alt="Robot image"
              // Regulates size of all photos
              sx={{
                width: '100%',
                maxWidth: 300,
                height: 'auto',
                objectFit: 'cover',
                
                // BELOW STYLED IMG BORDER
                // backgroundColor: '#ed9191',
                // borderStyle: 'solid',
                // borderRadius: '20px',
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexGrow: 1,
              width: '100%'
            }}
          >
            <Typography gutterBottom align='left' variant="h5" component="div" fontWeight='bold'>
              {props.name}
            </Typography>
            <Box bgcolor={props.color === 0 ? "#B23030" : "#ED9191"} sx={{ borderRadius: 5 }} width="22%">
              <Typography gutterBottom align='left' variant="body2" mx={1} 
                sx={{ 
                  width: "100%"
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'flex-start',
                  // alignItems: 'flex=start',
                  // flexGrow: 1,
                  // width: '100%' // Make the Typography fill the full width of the Box
                }}
              >
                {props.subteam}
                </Typography>
            </Box>
            <Typography align='left' variant="body2">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
