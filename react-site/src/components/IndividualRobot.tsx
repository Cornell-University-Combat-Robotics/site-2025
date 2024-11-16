import { Box, Grid, Grid2, Typography, Card, CardMedia, Paper, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React from "react";

/* **For each individual robot page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

  This file serves as a general component for individual robot pages. The idea is that it will format and render an IndividualRobot page
  completely, using the specific input passed in. This way, all the actual individual robot pages need to do is pass in the correct data to this reusable component.
*/
export interface IndividualRobotProps {
  name: string; // Name of the robot
  makers: string[]; // Members who worked on the robot
  description: string; // Short description of the bot
  image: string; // Link to the file location of the primary robot location
  //stats: string[]; // Index 0: Year, Index 1: Height, Index 2: Weight, Index 3: Fights, Index 4: Wins, Index 5: Top Speed, Index 6: Weapon Speed,
  // Index 7: Most damaged part, Index 8: Favorite movie
  stats: {
    year: string;
    height: string;
    weight: string;
    fights: string;
    wins: string;
    top_speed: string;
    weapon_speed: string;
    most_damaged_part: string;
    favorite_movie: string;
  }
  featured_fight: string; // Youtube link
  design: string;
  trivia: string[];
  //fights: string[][]; // In each fight array, Index 0: Event, Index 1: Opponent, Index 2: Result, Index 3: By, Index 4: Video, Index 5: Length (sec)
  fights: {
    event: string;
    opponent: string;
    result: string;
    by: string;
    video: string;
    length: string;
  }[];
  gallery_imgs: string[]; // Link to the file location of pictures
  gallery_vids: string[]; // Link to the file location of videos
}

export default function IndividualRobot(props: IndividualRobotProps) {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'left', ml: 15 }}>
        {/* Header Section */}
        <Typography variant='h2' gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h4" align="left" width='80%' style={{ fontStyle: 'italic' }}>
          {props.makers.join(', ')}
        </Typography>

        {/* Description & Featured Section */}
        <Grid2 container spacing={3} sx={{ mt: 4, mb: 4 }}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5'>Description</Typography>
            <Typography mb={5}>Robot desciption...</Typography>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: '#820002', p: 2 }}>
              <Typography variant="h5" color="white" gutterBottom>
                Stats
              </Typography>
              <List>
                {Object.entries(props.stats).map(([key, value]) => (
                  <ListItem key={key} sx={{ color: "white" }}>
                    <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                    {value}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid2>
        
        {/* Design Section */}
        <Typography variant="h4" gutterBottom>Design</Typography>
        <Typography variant="body1">{props.description}</Typography>

        {/* Trivia Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Trivia
          </Typography>
          <List sx={{ listStyleType: 'disc'}}>
            {props.trivia.map((fact, index) => (
              <ListItem key={index} sx={{ display: 'list-item' }}>{fact}</ListItem>
            ))}
          </List>
        </Box>
        
        {/* Fights Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Fights
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Event</TableCell>
                  <TableCell>Opponent</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>By</TableCell>
                  <TableCell>Video</TableCell>
                  <TableCell>Length (sec)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.fights.map((fight, index) => (
                  <TableRow key={index}>
                    <TableCell>{fight.event}</TableCell>
                    <TableCell>{fight.opponent}</TableCell>
                    <TableCell>{fight.result}</TableCell>
                    <TableCell>{fight.by}</TableCell>
                    <TableCell>
                      <a href={fight.video} target="_blank" rel="noopener noreferrer">
                        Watch
                      </a>
                    </TableCell>
                    <TableCell>{fight.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
    
    /* <Box ml={15} mt={7} style={{ textAlign: 'left' }}>
      <Typography variant="h2" align="left">{props.name}</Typography>
      {/* **Include the nickname
      <Typography variant="h4" align="left" width='80%' style={{ fontStyle: 'italic' }}>
        {props.makers.join(', ')}
      </Typography>
      <Typography variant="h5" mt={5}>Description</Typography>
      {props.description}
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

    </Box> */
  )
}