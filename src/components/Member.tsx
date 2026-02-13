import { Box, Typography, List, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import linkedin_button from "../assets/linkedin_button.png";
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';

export interface MemberProps {
  imgSrc: string;
  name: string;
  position: string[];
  linkedin: string; //linkedin url
  // should make stats optional
  stats: [[string, string, string], [number, number, number]]; //stats: all [0] rows refer to the stat description (e.g. battlebots knowledge), all [1] rows refer to the stat percentage (e.g. 10%)
  
  // image parameters (optional)
  zoom?: number;      // optional zoom level
  yShift?: number;    // optional vertical shift percentage
}

export default function Member(props: MemberProps) {
  const { imgSrc, name, position, linkedin, stats, zoom = 1, yShift = 0} = props;
  // const size = props.size ?? "inherit";

  const theme = useTheme();
  const isMobile = useContext(MobileContext);
  /*
  Effect: toggle visibility for button animations
  showStats: immutable state variable
  setShowStats: state updater function to modify showStats value
  */
  const [showStats, setShowStats] = useState(false);

  //starting y position for stats animation: -100% relative to parent (member card)
  const yStats = "-104%"; //this is a weird value, need some offset otherwise it shows the top part of the image

  return (
    /*
    Root, contains every element (photo, buttons, positions, etc.) in a column vertically
    */
    <Stack direction={"column"} alignItems={"center"} textAlign={"left"} bgcolor={"black"} borderRadius={5}
      sx={{
        width: '240px', // width and height are hardcoded for consistency on all devices
        height: '400px',
        my: '3%',
        mx: '2%',
      }}
    >
      {/*  Profile image & buttons (linkedin & stats)*/}
      <Box sx={{
        position: 'relative', // Ensures child elements with position: absolute are relative to this Box 
        borderRadius: 5,
        // height corresponding to viewport size is a problem
        width: '90%',
        height: '50%', //note: height CANNOT be auto -> if it is, animation from stats button will cause height to warp to fit animation box
        margin: '7%',
        overflow: 'hidden',
      }}>
        {/* Image of member */}
        <img src={imgSrc} style={{
          width: "100%", height: "100%",
          objectFit: "cover", // Ensures the image covers the Box without distortion
          objectPosition: "center", // Centers the image within the Box
          transform: `scale(${zoom}) translateY(${yShift}%)`,
          transformOrigin: "center" 
        }} />

        {/* Toggle for funny image (?):
        - add additional parameter "funnyImgSrc" in members.ts
        - on click for arrow to toggle
        */}

        {/* linkedin button for text version of linkedin button */}
        <Button
          sx={{
            position: 'absolute', // Makes the button overlap
            borderRadius: 4,
            bgcolor: '#A10305',
            bottom: '5%',
            left: '5%',  // Places button within parent (Box)
            minWidth: 0,
            width: '30px',
            height: '30px'
          }}
          onClick={() => window.open(linkedin, '_blank')}
        >
          <img
            src={linkedin_button}
            style={{
              width: '14px',
              height: '24px',
              objectFit: "contain",
              objectPosition: "center"
            }}
          />
        </Button>

        {/*animation controller for stats button*/}
        <AnimatePresence> {/*allows for exiting (w/o AnimatePresence, only entering animation would occur)*/}
          {/*if statement: if showStates == true and stats exist, code in (...) will run*/}
          {showStats && stats[0]?.length > 0 && (
            <motion.div
              //Fly in from left: Initial state placed outside the visible area
              initial={{ x: -300, y: yStats }} //initial state
              animate={{ x: 0, y: yStats }} //state after animation
              exit={{ x: -300, y: yStats }} //exit state
              style={{ height: '100%' }}
            >
              <Stack
                direction="column"
                sx={{
                  width: '100%',
                  height: '110%',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <List sx={{ width: '85%' }}>
                  {stats[0].map((desc, index) => ( //gets first row (descriptions)
                    <Box key={index} marginBottom={1} > {/*each individual stat*/}
                      <Typography
                        variant={isMobile ? "mobileBody2" : "desktopBody4"}
                        sx={{
                          color: 'black',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                        }}>
                        {desc}
                      </Typography>

                      {/*percentage bar: outer div is the full bar (black), inner div is the percentage filled (red)*/}
                      < div style={{ backgroundColor: 'black', width: '100%', height: 21, opacity: 2 }}>
                        <div style={{ backgroundColor: '#A10305', width: `${stats[1][index]}%`, height: '100%', opacity: 1 }}>
                        </div>
                      </div>
                    </Box>
                  ))}
                </List>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>

        {/*stats button*/}
        {/*technically doesnt have to be a button*/}
        {
          stats[0]?.length > 0 && (
            <Button
              sx={{
                position: 'absolute', // Makes the button overlap
                borderRadius: 2,
                bgcolor: '#A10305',
                bottom: '5%',
                right: '5%', // Places button within parent (Box)
                width: '20px',
                height: '30px'
              }}
              onMouseEnter={() => setShowStats(true)}
              onMouseLeave={() => setShowStats(false)}
              onClick={() => setShowStats(!showStats)}
            >
              <Typography sx={{
                color: 'white',
                textTransform: "none",
                fontSize: {
                  xs: 18,
                  lg: 20, //im hardcoding this, its too specific to use variants
                },
                fontFamily: theme.typography.desktopBody.fontFamily
              }}>
                {"Stats"}
              </Typography>
            </Button>
          )
        }
      </Box >

      {/* name and roles */}
      < Box
        width="85%"
        height="40%"
        overflow="hidden"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          overflowY: 'auto',
        }}>
        {/* Name */}
        < Box sx={{ textAlign: "left", width: '100%' }}>
          <Typography
            //no need variant here cuz constant througout
            sx={{
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: theme.typography.mobileH1.fontFamily,
              whiteSpace: 'nowrap',
              textWrap: 'auto'
            }}>
            {name}
          </Typography>
        </Box >

        {/* Roles */}
        < List sx={{
          width: '100%',
        }}>
          {
            position.map((roles, index) => (
              <Box key={index} bgcolor={"#373737"} sx={{
                borderRadius: 2,
                textAlign: "left",
                px: '5%',
                display: 'inline-block',
                height: "auto",
                width: 'hug'
              }} marginBottom={1}>
                <Typography sx={{
                  fontSize: "20px",
                  fontFamily: theme.typography.mobileH1.fontFamily,
                  wordBreak: 'break-word',
                  overflow: ''
                }}>
                  {roles}
                </Typography>
              </Box>
            ))
          }
        </List >
      </Box >

    </Stack >
  );
}
