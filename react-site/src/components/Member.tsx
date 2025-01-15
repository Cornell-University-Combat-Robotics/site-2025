import { Box, Card, Typography, List, Button } from "@mui/material";
import React from "react";

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

  return (
    /*
    Outer box contains every element (photo, buttons, positions, etc.). Inner box contains profile image & buttons (linkedin & stats).
    */
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center', textAlign: "left" }} bgcolor={"black"} borderRadius={5}>
      <Box sx={{   
          position: 'relative', // Ensures child elements with position: absolute are relative to this Box 
          borderRadius: "7%",
          border: "2px #4361EE solid",
          width: '85%',
          height: '250px',
          marginTop: '7%',
          marginBottom: '7%', 
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

          {/*stats button*/}
          <Button 
            sx={{ 
              position: 'absolute', // Makes the button overlap
              borderRadius: 4, bgcolor:'#A10305', 
              bottom: '5%', right: '5%', // Places button within parent (Box)
              minWidth: 0, width: '20%'
            }}
          >
            <Typography sx={{fontSize: '15px', color: 'white', fontFamily: 'Arial', textTransform: "none" }}>
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
