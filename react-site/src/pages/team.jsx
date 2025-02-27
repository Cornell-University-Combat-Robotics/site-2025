import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import team_photo from "../assets/background-pictures/team-photo-formal.png";
import { motion } from 'framer-motion';
import AutoIcon from "../assets/subteam-icons/AutoThicker.png";
import KineticIcon from "../assets/subteam-icons/KineticThicker.png";
import MarketingIcon from "../assets/subteam-icons/MarketingThicker.png";
import SportsmanIcon from "../assets/subteam-icons/SportsmanThicker.png";
import AlumniIcon from "../assets/subteam-icons/Alumni.png";
import LeadsIcon from "../assets/subteam-icons/Leads.png";
import WhiteAutoIcon from "../assets/subteam-icons/WhiteAutoLogo.png";
import WhiteKineticIcon from "../assets/subteam-icons/WhiteKineticLogo.png";
import WhiteMarketingIcon from "../assets/subteam-icons/WhiteMarketingLogo.png";
import WhiteSportIcon from "../assets/subteam-icons/WhiteSportLogo.png";
import WhiteTLIcon from "../assets/subteam-icons/WhiteTLLogo.png";
import WhiteAlumIcon from "../assets/subteam-icons/WhiteAlumLogo.png";

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
            <TeamButton hoverColor="#0E7C2B" image={KineticIcon} whiteImg={WhiteKineticIcon} to="/team/kinetic">Kinetic</TeamButton>
            <TeamButton hoverColor="#1F398D" image={SportsmanIcon} whiteImg={WhiteSportIcon} to="/team/sportsman">Sportsman</TeamButton>
            <TeamButton hoverColor="#8D8D2C" image={AutoIcon} whiteImg={WhiteAutoIcon} to="/team/autonomous">Autonomous</TeamButton>
            <TeamButton hoverColor="#501584" image={MarketingIcon} whiteImg={WhiteMarketingIcon} to="/team/marketing">Marketing</TeamButton>
          </Box>
        </Box>
        <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="60px">
          <Box display='flex' width="63%" justifyContent="space-evenly" sx={{ flexDirection: 'row' }}>
            <TeamButton hoverColor="#820002" image={LeadsIcon} whiteImg={WhiteTLIcon} to="/team/leads" sx={{ width: "447px" }}>Team Leads</TeamButton>
            <TeamButton hoverColor="#820002" image={AlumniIcon} whiteImg={WhiteAlumIcon} to="/team/alumni" sx={{ width: "447px" }}>Alumni</TeamButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}