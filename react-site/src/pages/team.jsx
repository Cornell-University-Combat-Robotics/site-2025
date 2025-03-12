import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import team_photo from "../assets/background-pictures/team-photo-formal.png";
import { motion } from 'framer-motion';
import AlumColor from "../assets/subteam-icons/AlumColor.png";
import AlumWhite from "../assets/subteam-icons/AlumWhite.png";
import AutonColor from "../assets/subteam-icons/AutonColor.png";
import AutonWhite from "../assets/subteam-icons/AutonWhite.png";
import KineticColor from "../assets/subteam-icons/KineticColor.png";
import KineticWhite from "../assets/subteam-icons/KineticWhite.png";
import MarketingColor from "../assets/subteam-icons/MarketingColor.png";
import MarketingWhite from "../assets/subteam-icons/MarketingWhite.png";
import SportsmanColor from "../assets/subteam-icons/SportsmanColor.png";
import SportsmanWhite from "../assets/subteam-icons/SportsmanWhite.png";
import TLColor from "../assets/subteam-icons/TLColor.png";
import TLWhite from "../assets/subteam-icons/TLWhite.png";

// TeamButton is the button component for individual subteams on the Team page. It takes in the following props: subteam icon,
// white subteam icon for hovering, subteam color for hovering, and the link to the subteam page. Using this component
// enables the creation of a consistent button style for all subteams. (and no reptition!)
const TeamButton = ({ children, hoverColor, whiteImg, sx, image, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      component={Link}
      to={to}
      variant="outlined"
      sx={{
        backgroundColor: "#1C1C1C",
        borderColor: "white",
        borderWidth: "4px",
        color: "white",
        fontSize: "1.5em",
        width: "260px",
        height: "150px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Josefin Sans",
        px: "20px",
        borderRadius: "16px",
        textTransform: "none",
        '&:hover': {
          color: 'white',
          borderColor: "white",
          backgroundColor: hoverColor,
        },
        ...sx
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={isHovered ? whiteImg : image} alt="" style={{ width: "70px", height: "70px", marginBottom: "10px" }} />}
      {children}
    </Button>
  )
}

/** Team() creates the Team page of the website. */
export default function Team() {
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
        <div style={{ width: '100%', marginBottom: 50, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <motion.div
            animate={{ x: ["0%", "-100%"] }} // Moves text from right to left 
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

        <Typography sx={{ fontSize: 30, maxWidth: '90%', margin: '0 auto', textAlign: 'center' }}>
          {"Our entire team consists of four subteams: Kinetic, Sportsman, Autonomous, and Marketing."}
        </Typography>
        <Typography sx={{ fontSize: 30, maxWidth: '70%', margin: '0 auto', textAlign: 'center' }}>
          {"Click the buttons below to learn more about each of them!"}
        </Typography>

        {/*Three horizontal buttons for 3 actions users can do. Nested in a double 
            box. The inside box sets the width to 75% of screen. The outside box sets 
            the content inside (the inner box) to be center of screen horizontally. 
            Use hred within Button mui component to link the button. sx is the styling 
            details. &focus is for when the button is clicked (removing the blue border 
            when clicked. &hover is for making the text color white (don't change when
            button is not hovered over.*/}
        <Box display='flex' justifyContent="center" alignItems="center" mt="60px" mb="40px">
          <Box display='flex' width="75%" justifyContent="space-evenly" sx={{ flexDirection: 'row' }}>
            <TeamButton hoverColor="#0E7C2B" image={KineticColor} whiteImg={KineticWhite} to="/team/kinetic">Kinetic</TeamButton>
            <TeamButton hoverColor="#1F398D" image={SportsmanColor} whiteImg={SportsmanWhite} to="/team/sportsman">Sportsman</TeamButton>
            <TeamButton hoverColor="#8D8D2C" image={AutonColor} whiteImg={AutonWhite} to="/team/autonomous">Autonomous</TeamButton>
            <TeamButton hoverColor="#501584" image={MarketingColor} whiteImg={MarketingWhite} to="/team/marketing">Marketing</TeamButton>
          </Box>
        </Box>
        <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="60px">
          <Box display='flex' width="63%" justifyContent="space-evenly" sx={{ flexDirection: 'row' }}>
            <TeamButton hoverColor="#820002" image={TLColor} whiteImg={TLWhite} to="/team/leads" sx={{ width: "447px" }}>Team Leads</TeamButton>
            <TeamButton hoverColor="#820002" image={AlumColor} whiteImg={AlumWhite} to="/team/alumni" sx={{ width: "447px" }}>Alumni</TeamButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}