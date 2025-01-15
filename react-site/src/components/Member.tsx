import { Box, Card, Typography, List, Button } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export interface MemberProps {
  imgSrc: string;
  name: string;
  position: string[];
  linkedin: string; //linkedin url
  stats: [[string, string, string],[number, number, number]]; //stats: all [0] rows refer to the stat description (e.g. battlebots knowledge), all [1] rows refer to the stat percentage (e.g. 10%)
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

  //starting y position for stats animation
  const yStats = -257;

  return (
    /*
    Outer box contains every element (photo, buttons, positions, etc.). 
    Inner box contains profile image & buttons (linkedin & stats).
    */
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center', textAlign: "left" }} bgcolor={"black"} borderRadius={5} overflow='hidden'>
      <Box sx={{   
          position: 'relative', // Ensures child elements with position: absolute are relative to this Box 
          borderRadius: "7%",
          border: "2px #4361EE solid",
          width: '85%',
          height: '250px',
          marginTop: '7%',
          marginBottom: '7%',
          overflow: 'hidden'
          }}>
          <img src={imgSrc} style={{ width: "100%", height: "100%" }} />
          
          {/*linkedin button*/}
          <Button 
            sx={{ 
              position: 'absolute', // Makes the button overlap
              borderRadius: 4, bgcolor:'#A10305', 
              bottom: '5%', left: '5%',  // Places button within parent (Box)
              minWidth: 0, width: '15%'
            }}
            onClick={() => window.open(linkedin, '_blank')}
          >
            <Typography sx={{fontSize: '15px', color: 'white', fontFamily: 'Arial', textTransform: "none" }}>
              {"in"}
            </Typography>
          </Button>

          {/*animation controller for stats button*/}
          <AnimatePresence> {/*allows for exiting (w/o AnimatePresence, only entering animation would occur)*/}
            {/*if statement: if showStates == true, code in (...) will run*/}
            {showStats && ( 
              <motion.div
                  //Fly in from left: Initial state placed outside the visible area
                  initial={{x: -300, y: yStats}} //initial state
                  animate={{x: 0, y: yStats}} //state after animation
                  exit={{x: -300, y: yStats}} //exit state
                  style={{height: '100%'}} 
              >
                <Box
                  sx={{ width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'
                  }}
                >
                  <List sx={{width: '85%'}}>
                    {props.stats[0].map((desc, index) => ( //gets first row (descriptions)
                      <Box key={index} sx={{marginBottom: 2}}>
                        <Typography sx={{fontSize: 17, color: 'black'}}>
                          {desc}
                        </Typography>

                        {/*percentage bar: outer div is the full bar (black), inner div is the percentage filled (red)*/}
                        <div style={{backgroundColor: 'black', width: '100%', height: 23, opacity: 2}}>
                          <div style={{backgroundColor: '#A10305', width: `${props.stats[1][index]}%`, height: '100%', opacity: 1}}>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </List>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/*stats button*/}
          {/*technically doesnt have to be a button*/}
          <Button 
            sx={{ 
              position: 'absolute', // Makes the button overlap
              borderRadius: 4, bgcolor:'#A10305', 
              bottom: '5%', right: '5%', // Places button within parent (Box)
              minWidth: 0, width: '20%'
            }}
            onMouseEnter={() => setShowStats(true)}
            onMouseLeave={() => setShowStats(false)}
          >
            <Typography sx={{fontSize: '15px', color: 'white', fontFamily: 'Arial', textTransform: "none"}}>
              {"Stats"}
            </Typography>
          </Button>
      </Box>
    
      <Box sx={{textAlign: "left", width: '85%'}}>
        <Typography sx={{ fontWeight: "bold", mt: "5px", ml: "5px"}}>{name}</Typography>
      </Box>

      <List sx={{ width: '85%' }}>
        {props.position.map((position, index) => (
           <Box key={index} bgcolor={"#373737"} sx={{ borderRadius: 2, textAlign: "left" }} marginBottom={2}>
              <Typography sx={{ ml: "15px",  fontSize: "20px"}}> {position}</Typography>
           </Box>
        ))}
      </List>
    </Box>
  );
}
