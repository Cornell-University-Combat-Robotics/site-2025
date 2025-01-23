import { Box, Typography } from "@mui/material";
import team_photo from "../assets/background-pictures/team-photo-formal.png";
import TeamMemberList from "../components/MemberList";
import { motion } from 'framer-motion';

/** Teams creates the Teams page of the website. */
export default function Teams() {
  return (
    <>
    <Box position="relative" >
      <Box position="relative" display="inline-block"> {/* Set position to relative for GradientNavBar. */}
        <img src={team_photo} style={{ width: '100%', height: 'auto', marginBottom: 50 }} />
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Josefin Sans',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}
        >
          MEET THE TEAM
        </Typography>
      </Box>


      {/*
      Effect: Scrolling bar of subteam names
      Outer div: constant background -> only the text is scrolling
      */}
      <div style={{backgroundColor: '#820002', width: '100%', marginBottom: 50, overflow: 'hidden', whiteSpace: 'nowrap'}}>
        <motion.div 
          animate={{x: ["0%", "-100%"]}} // Moves text from right to left 
          transition={{
            duration: 20, 
            repeat: Infinity, //loops forever
            ease: "linear"
          }}
        >
          <Typography sx={{fontSize: 60}}> 
            {/*Duplicate text to ensure no empty space*/}
            {"KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • "} 
          </Typography>
        </motion.div>
      </div>
      

      <Box sx={{margin: '10%'}}>
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          LEADS
        </Typography>
        <TeamMemberList teamName={"Leads"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          MARKETING
        </Typography>
        <TeamMemberList teamName={"Marketing"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          KINETIC
        </Typography>
        <TeamMemberList teamName={"Kinetic"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          SPORTSMAN
        </Typography>
        <TeamMemberList teamName={"Sportsman"} />
      </Box>

    </Box>
    </>
  );
}
