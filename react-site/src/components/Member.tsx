import { Box, Typography, List, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export interface MemberProps {
  imgSrc: string;
  name: string;
  position: string[];
  linkedin: string; //linkedin url
  stats: [[string, string, string], [number, number, number]]; //stats: all [0] rows refer to the stat description (e.g. battlebots knowledge), all [1] rows refer to the stat percentage (e.g. 10%)
}

export default function Member(props: MemberProps) {
  const { imgSrc, name, position, linkedin, stats } = props;
  // const size = props.size ?? "inherit";

  /*
  Effect: toggle visibility for button animations
  showStats: immutable state variable
  setShowStats: state updater function to modify showStats value
  */
  const [showStats, setShowStats] = useState(false);

  //starting y position for stats animation: -100% relative to parent (member card)
  const yStats = "-101%"; //this is a weird value, idk why its like that (if its -100%, its too low on the card)

  return (
    /*
    Stack contains every element (photo, buttons, positions, etc.) in a column vertically
    Inner box contains profile image & buttons (linkedin & stats)
    */
    <Stack direction={"column"} alignItems={"center"} textAlign={"left"} bgcolor={"black"} borderRadius={5}
      sx={{
        width: '100%', //maintain aspect ratio
        height: '50vh',
        maxWidth: 300 //ensure black box doesnt grow too wide when screen is smaller
      }}
    >
      <Box sx={{
        position: 'relative', // Ensures child elements with position: absolute are relative to this Box 
        borderRadius: 5,
        width: 'auto',
        height: '30vh', //note: height CANNOT be auto -> if it is, animation from stats button will cause height to warp to fit animation box
        margin: '7%',
        overflow: 'hidden',
      }}>
        <img src={imgSrc} style={{
          width: "100%", height: "100%",
          objectFit: "cover", // Ensures the image covers the Box without distortion
          objectPosition: "center" // Centers the image within the Box
        }} />

        {/* Toggle for funny image (?):
        - add additional parameter "funnyImgSrc" in members.ts
        - on click for arrow to toggle
        */}

        {/*linkedin button*/}
        <Button
          sx={{
            position: 'absolute', // Makes the button overlap
            borderRadius: 4, bgcolor: '#A10305',
            bottom: '5%', left: '5%',  // Places button within parent (Box)
            minWidth: 0, width: '15%'
          }}
          onClick={() => window.open(linkedin, '_blank')}
        >
          <Typography sx={{ fontSize: '15px', color: 'white', fontFamily: 'Josefin Sans, sans-serif', textTransform: "none" }}>
            {"in"}
          </Typography>
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
                  width: '100%', height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  alignItems: 'center', justifyContent: 'flex-start'
                }}
              >
                <List sx={{ width: '85%' }}>
                  {stats[0].map((desc, index) => ( //gets first row (descriptions)
                    <Box key={index} marginBottom={1} > {/*each individual stat*/}
                      <Typography sx={{
                        fontSize: 17,
                        color: 'black',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                        {desc}
                      </Typography>

                      {/*percentage bar: outer div is the full bar (black), inner div is the percentage filled (red)*/}
                      <div style={{ backgroundColor: 'black', width: '100%', height: 21, opacity: 2 }}>
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
        {stats[0]?.length > 0 && (
          <Button
            sx={{
              position: 'absolute', // Makes the button overlap
              borderRadius: 4, bgcolor: '#A10305',
              bottom: '5%', right: '5%', // Places button within parent (Box)
              minWidth: 0, width: '20%'
            }}
            onMouseEnter={() => setShowStats(true)}
            onMouseLeave={() => setShowStats(false)}
          >
            <Typography sx={{ fontSize: '15px', color: 'white', fontFamily: 'Arial', textTransform: "none" }}>
              {"Stats"}
            </Typography>
          </Button>
        )}
      </Box>

      <Box sx={{ textAlign: "left", width: '85%' }}>
        <Typography sx={{
          fontWeight: "bold", fontSize: 25,
          whiteSpace: 'nowrap', overflow: 'scroll'
        }}>
          {name}
        </Typography>
      </Box>

      <List sx={{
        width: '85%',
        //maxHeight: 150, // Fixed max height
        overflow: 'auto', // Enable scrolling
        // '&::-webkit-scrollbar': { // Customize scrollbar
        //   width: '4px'
        // },
        // '&::-webkit-scrollbar-track': {
        //   background: '#black'
        // },
        // '&::-webkit-scrollbar-thumb': {
        //   background: '#888',
        //   borderRadius: '4px'
        // }
      }}>
        {position.map((roles, index) => (
          <Box key={index} bgcolor={"#373737"} sx={{
            borderRadius: 2, textAlign: "left",
            height: 25
          }} marginBottom={1}>
            <Typography sx={{
              ml: "10px", fontSize: "20px",
              whiteSpace: 'nowrap', overflow: 'scroll'
            }}>
              {roles}
            </Typography>
          </Box>
        ))}
      </List>
    </Stack>
  );
}
