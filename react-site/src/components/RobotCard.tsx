import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography, autocompleteClasses } from "@mui/material";
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
      // size of card itself
        sx={{ 
          // width: 220, 
          // height: 400, 
          flex: "1",
          bgcolor: background_color, 
          color: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          borderRadius: '14px', 
          padding: '1.5em 1.5em'
        }}
      >
        <CardActionArea
        // clickable button part of card
          sx={{
            width: '100%',
            height: '100%',
            // was 110% before
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor: 'yellow',
          }}
        >
          <Box 
            // background of image (works only with png)
            width="100%"
            height="auto" 
            borderRadius="7%" 
            bgcolor={background_color == "#820002" ? "#B23030" : "#ED9191"} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // margin: '0 auto',
              // marginTop: '2em'
            }}
          >
            <CardMedia
              // image itself
              component="img"
              image={props.image}
              alt="Robot image"
              // Regulates size of all photos
              sx={{
                width: '220px',
                height: '163.15px',
                objectFit: 'fill', // set image to fill since they are warped otherwise
                
                // BELOW STYLED IMG BORDER
                // backgroundColor: '#ed9191',
                // borderStyle: 'solid',
                // borderRadius: '20px',
              }}
            />
          </Box>
          <CardContent
            // all written content container on card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexGrow: 1,
              width: '100%',
              padding: '16px',
              paddingBottom: '6px',
            }}
          >
            {/* Below is for robot title text */}
            <Typography gutterBottom align='left' variant="h5" component="div" fontWeight='bold'>
              {props.name}
            </Typography>
            <Box 
              //pill shape container on card 
              bgcolor={props.color === 0 ? "#B23030" : "#ED9191"} 
              sx={{ 
                borderRadius: 5, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.25em, 0.75em',
                width: 'fit-content',
                minWidth: '60px',
              }}
            >
              <Typography 
                // text in pill container on card
                align='center' 
                variant="body2" 
                sx={{ 
                  // backgroundColor: 'yellow',
                  margin: 0,
                  padding: 0,
                  fontWeight: 'bold',
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
            {/* Below is robot description text paragraph */}
            <Typography align='left' variant="body2" paddingTop="0.5em">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
