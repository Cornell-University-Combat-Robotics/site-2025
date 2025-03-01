import { Box, Grid, Grid2, Typography, Card, CardMedia, Paper, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ReactPlayer from 'react-player/youtube'; // Documentation: https://www.npmjs.com/package/react-player
import React from "react";
import { useParams } from 'react-router-dom';
import { robotData } from "../data/robotData.ts";

/* **For each individual robot page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

  This file serves as a general component for individual robot pages. The idea is that it will format and render an IndividualRobot page
  completely, using the specific input passed in. This way, all the actual individual robot pages need to do is pass in the correct data to this reusable component.
*/
export default function IndividualRobot() {
  const { robotId } = useParams();
  const robotInfo = robotData[robotId || ""];

  if (!robotInfo) {
    return <div>Robot not found</div>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'left', ml: 15 }}>
        {/* Header Section */}
        <Typography variant='h2' gutterBottom fontWeight='bold'>
          {robotInfo.name}
        </Typography>
        <Typography variant="h4" align="left" width='90%' style={{ fontStyle: 'italic' }}>
          {robotInfo.makers.join(', ')}
        </Typography>

        {/* Description & Featured Section */}
        <Grid2 container spacing={10} sx={{ mt: 4, mb: 4 }}>
          <Grid item xs={12} md={8}>
            <Typography variant='h5'>Description</Typography>
            <Typography mb={5}>{robotInfo.description}</Typography>
            {robotInfo.featured_fight ? (
              <>
                <Typography variant='h5'>Featured Fight</Typography>
                <iframe
                  width="560"
                  height="315"
                  src={robotInfo.featured_fight}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </>
            ) : null}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: '#820002', p: 2, borderRadius: 4 }}>
              <CardMedia
                component="img"
                height="180"
                image={robotInfo.image}
                alt="Robot image" />
              <Typography variant="h5" color="white" gutterBottom>
                Stats
              </Typography>
              <List>
                {Object.entries(robotInfo.stats).map(([key, value]) => (
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
        <Typography variant="body1">{robotInfo.design}</Typography>

        {/* Trivia Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Trivia
          </Typography>
          <List sx={{ listStyleType: 'disc' }}>
            {robotInfo.trivia.map((fact, index) => (
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
                  <TableCell sx={{ color: 'white' }}>Watch</TableCell>
                  <TableCell sx={{ color: 'white' }}>Length</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {robotInfo.fights.map((fight, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: 'white' }}>{fight.event}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.opponent}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.result}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{fight.by}</TableCell>
                    <TableCell>
                      {fight.video && fight.video.trim() !== "" ? (
                        <a href={fight.video} target="_blank" rel="noopener noreferrer">
                          Watch
                        </a>
                      ) : ""}
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
            gridTemplateColumns: `repeat(3, 1fr)`,
            gridAutoRows: '1fr',
            gap: "5px",
            alignItems: "start",
            justifyItems: "center",
          }}>
            {robotInfo.gallery.map((item, index) => {
              if (item.includes('youtube')) {
                return <ReactPlayer key={index} url={item} width="100%" />;
              } else if (item.endsWith('.mp4')) {
                return (
                  <video key={index} controls width="80%">
                    <source src={item} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                );
              } else {
                return <img key={index} src={item} width="80%" alt={`Gallery item ${index + 1}`} />;
              }
            })}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
