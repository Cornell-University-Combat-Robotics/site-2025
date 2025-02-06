import { Box, Typography, Stack, Grid2, Card, CardMedia, Paper, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Link, Button } from "@mui/material";
import ReactPlayer from 'react-player/youtube'; // Documentation: https://www.npmjs.com/package/react-player
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

/*
TODO:
1) Image gallery handling
2) resizing of screen: red box goes down
3) youtube video constant height
4) expands when click on picture
*/

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
  gallery: string[]; // Link to the file location of pictures & videos -> TODO: separate images & videos
}

export default function IndividualRobot(props: IndividualRobotProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  //<tag> declares type of reference
  const backgroundRef = useRef<HTMLDivElement>(null); // When image is blown up, attach this to component that is image's "background"

  //controls when image is blown to full size of the screen (when gallery button clicked)
  //array with length == size of visible images
  const [fullImage, setFullImage] = useState([false, false, false]); //false: no image selected as default

  const handleImageClick = [
    () => setFullImage([true, false, false]),
    () => setFullImage([false, true, false]),
    () => setFullImage([false, false, true]),
  ];

  {/* Updates array of visible images in gallery carousell: 3 images at once.
  Requires "..." to combine two slices into a single array */}
  const visibleImages = [
    //2nd parameter of slice: ensures that end index of this single array slice does not exceed gallery length
    ...props.gallery.slice(currentIndex % props.gallery.length, Math.min(currentIndex + 3, props.gallery.length)),
    //handles overflow images -> if gallery length exceeded in first array slice
    ...props.gallery.slice(0, Math.max(0, (currentIndex + 3) - props.gallery.length))
  ];

  //when image is blown up, and user wants to exit image -> click on background -> TODO: handleOutsideClick
  //event listener -> TODO: useEffect
  

  //prevIndex: refers to current index (before updated)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.gallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.gallery.length) % props.gallery.length);
  };

  return (
    <Box sx={{ paddingRight: '12%', paddingLeft: '12%', paddingTop: '10%', paddingBottom: '10%', textAlign: 'left' }}>
      {/* Header Section */}
      <Typography variant='h2' gutterBottom fontWeight='bold'>
        {props.name}
      </Typography>

      {/* Names of Builders */}
      <Typography variant="h4" align="left" width='90%' style={{ fontStyle: 'italic' }}>
        {props.makers.join(', ')}
      </Typography>

      {/* 
      Description & Featured Section: 2 columns, with 1st column having 2 rows
      */}
      <Stack direction={"row"} spacing={'5%'} width={'100%'} height={'100%'} mt={7} >
        {/*Containing 2 rows: description and video*/}
        <Stack direction={"column"} spacing={'5%'} height={'80vh'} width={'75%'} >
          {/*Description*/}
          <Box width={'100%'} >
            <Typography variant='h3'>Description</Typography>
            <Typography mb={5} mt={2} sx={{ fontSize: 20 }}>{props.description}</Typography>
          </Box>

          <Box width={'100%'} height={'100%'} >
            <Typography variant='h3' mb={2}>Featured Fight</Typography>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/CCGriVVoWeM?start=28006"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

        </Stack>

        {/*Containing the stats of the robot*/}
        <Box height={'100%'} width={'auto'}>
          <Paper sx={{ bgcolor: '#820002', p: 3, borderRadius: 4 }}>
            <CardMedia
              component="img"
              height="180"
              image={props.image}
              alt="Robot image"
              sx={{ borderRadius: 4 }} />
            <Typography fontSize={30} color="white" fontWeight={"bold"} mt={2} >
              Stats
            </Typography>
            <List> {/*TODO: remove padding*/}
              {Object.entries(props.stats).map(([key, value]) => (
                <ListItem key={key} sx={{ color: "white", fontSize: 20, fontFamily: 'Josefin Sans, sans-serif' }}>
                  {key.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase())}: {value}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Stack>

      {/* Design Section */}
      <Typography variant="h3" gutterBottom>Design</Typography>
      <Typography sx={{ fontSize: 20, fontFamily: 'Josefin Sans, sans-serif', ml: 5 }}>{props.design}</Typography>

      {/* Trivia Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Trivia
        </Typography>
        <List sx={{ listStyleType: 'disc', fontSize: 20, fontFamily: 'Josefin Sans, sans-serif', ml: 5 }}>
          {props.trivia.map((fact, index) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>{fact}</ListItem>
          ))}
        </List>
      </Box>

      {/* Fights Section */}
      <Box sx={{ mb: 4, mt: 4 }} >
        <Typography variant="h3" gutterBottom>
          Fights
        </Typography>
        <TableContainer component={Paper} sx={{ bgcolor: '#820002' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBlock: "7px solid #1C1C1C" }}>
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
                <TableRow key={index} sx={{ borderBlock: "7px solid #1C1C1C" }}>
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
      <Typography variant="h3" mb={3}>
        {"Gallery"}
      </Typography>

      {/* Carousel for Gallery Images */}

      <Stack direction="row" spacing={6} height="50vh" width="auto" alignItems={"center"} justifyContent={"center"} >

        <IconButton onClick={handlePrev} >
          <ArrowBack sx={{ color: "white" }} />
        </IconButton>

        {visibleImages.map((imageName, index) => (
          <Button
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
            onClick={() => {
              handleImageClick[index](); 
            }}
          >
            <Box key={index} borderRadius={5} overflow={"hidden"} width={'100%'} height={'100%'} position={'relative'} zIndex={0} >
              <img src={imageName} style={{
                width: '100%',
                height: '100%',
                objectFit: "cover",
                objectPosition: "center"
              }} />
            </Box>

            {/*image only blown to full size when button is clicked (aka. useState toggled to true)*/}
            {fullImage[index] && 
              <Box
                sx={{
                  position: "fixed",
                  top: '0', //need to declare at least one of top or bottom when using non-relative position
                  left: '0', //need to declare at least one of left or right when using non-relative position
                  width: '100vw',
                  height: '100vh',
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  justifyContent: 'center', //horizontally center
                  alignContent: "center", //vertically center
                  zIndex: 1 //note: only zIndex of components of same hierarchy level are compared! higher zIndex: appears more FRONT
                }}
                ref={backgroundRef}
              >
                
                  <img
                    src={imageName}
                    style={{
                      maxWidth: '50vw', //if not taking up max, can just auto fit
                      maxHeight: '70vh',
                      minWidth: '30vw',
                      minHeight: '40vh', //ensures minimum size -> if auto size of image too small, will increase, maintaining aspect ratio
                      objectPosition: 'center',
                      objectFit: 'cover',
                      borderRadius: 15
                    }}
                  />

              </Box>

            }
          </Button>
        ))}

        <IconButton onClick={handleNext} >
          <ArrowForward sx={{ color: "white" }} />
        </IconButton>

      </Stack>


    </Box>

  )
}
