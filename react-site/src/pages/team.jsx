import { Box, Typography } from "@mui/material";
import team_photo from "../assets/background-pictures/team-photo-formal.png";
import TeamMemberList from "../components/MemberList";
import { motion } from 'framer-motion';

/** Teams creates the Teams page of the website. */
export default function Team() {
  return (
    <>
      <Box position="relative" >
        <Box sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${team_photo})`,  // Your image URL
          backgroundSize: 'cover',      // Ensure the image covers the area
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}>
          {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              transform: 'translate(0,15%)',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
            }}>
            MEET THE TEAM
          </Typography>
        </Box>


        {/*
      Effect: Scrolling bar of subteam names
      Outer div: constant background -> only the text is scrolling
      */}
        <div style={{ backgroundColor: '#820002', width: '100%', marginBottom: 50, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <motion.div
            animate={{ x: ["100%", "-100%"] }} // Moves text from right to left (100% -> starts out empty)
            transition={{
              duration: 20,
              repeat: Infinity, //loops forever
              ease: "linear"
            }}
          >
            <Typography sx={{ fontSize: 60 }}>
              {/*Duplicate text to ensure no empty space*/}
              {"KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • "}
            </Typography>
          </motion.div>
        </div>


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
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          ALUMNI
        </Typography>
        <TeamMemberList teamName={"Alumni"} />
      </Box>
    </>
  );
}
