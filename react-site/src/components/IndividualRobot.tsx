import { Box, Grid, Grid2, Typography, Card, CardMedia, Paper, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ReactPlayer from 'react-player/youtube'; // Documentation: https://www.npmjs.com/package/react-player
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
  stats: {
    vintage: string;
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
  fights: {
    event: string;
    opponent: string;
    result: string;
    by: string;
    video: string;
    length: string;
  }[];
  gallery: string[]; // Link to the file location of pictures & videos
}

export default function IndividualRobot(props: IndividualRobotProps) {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'left', ml: 15 }}>
        {/* Header Section */}
        <Typography variant='h2' gutterBottom fontWeight='bold'>
          {props.name}
        </Typography>
        <Typography variant="h4" align="left" width='90%' style={{ fontStyle: 'italic' }}>
          {props.makers.join(', ')}
        </Typography>

        {/* Description & Featured Section */}
        <Grid2 container spacing={10} sx={{ mt: 4, mb: 4 }}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5'>Description</Typography>
            <Typography mb={5}>Robot desciption...</Typography>
            <Typography variant='h5'>Featured Fight</Typography>
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
            <Paper sx={{ bgcolor: '#820002', p: 2, borderRadius: 4 }}>
              <CardMedia
                component="img"
                height="180"
                image={props.image}
                alt="Robot image" />
              <Typography variant="h5" color="white" gutterBottom>
                Stats
              </Typography>
              <List>
                {Object.entries(props.stats).map(([key, value]) => (
                  <ListItem key={key} sx={{ color: "white" }}>
                    {key.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase())}: {value}
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
          <List sx={{ listStyleType: 'disc' }}>
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
          <TableContainer component={Paper} sx={{ bgcolor: '#820002' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'white' }}>Event</TableCell>
                  <TableCell sx={{ color: 'white' }}>Opponent</TableCell>
                  <TableCell sx={{ color: 'white' }}>Result</TableCell>
                  <TableCell sx={{ color: 'white' }}>By</TableCell>
                  <TableCell sx={{ color: 'white' }}>Video</TableCell>
                  <TableCell sx={{ color: 'white' }}>Length (sec)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.fights.map((fight, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: 'white' }}>{fight.event}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.opponent}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.result}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.by}</TableCell>
                    <TableCell>
                      <a href={fight.video} target="_blank" rel="noopener noreferrer">
                        Watch
                      </a>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Gallery Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Gallery
          </Typography>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${3}, 1fr)`,
            gridAutoRows: '1fr',
            gap: "5px",
            alignItems: "start",
            justifyItems: "center",
          }}>
            {props.gallery.map((props2) => (
              props2.includes('youtube')
                ?
                <ReactPlayer url={props2} width="100%" />
                :
                <img src={props2} width='80%' />
            ))}

          </Box>

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