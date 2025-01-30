import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import team_photo from "../assets/background-pictures/team-photo-formal.png";
import TeamMemberList from "../components/MemberList";
import { motion } from 'framer-motion';
import logo from "/logo.png";

const TeamButton = ({ children, hoverColor, sx, image, to }) => (
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
  >
    {image && <img src={image} alt="" style={{ width: "50px", height: "50px", marginBottom: "10px" }} />}
    {children}
  </Button>
)

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
        <div style={{ backgroundColor: '#820002', width: '100%', marginBottom: 50, overflow: 'hidden', whiteSpace: 'nowrap' }}>
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

        <Typography sx={{ fontSize: 30, maxWidth: '70%', margin: '0 auto', textAlign: 'center' }}>
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
          <Box display='flex' width="60%" justifyContent="space-evenly" sx={{ flexDirection: 'row' }}>
            <TeamButton hoverColor="#0E7C2B" image={logo} to="/teams/marketing">Kinetic</TeamButton>
            <TeamButton hoverColor="#1F398D" image={logo} to="/teams/marketing">Sportsman</TeamButton>
            <TeamButton hoverColor="#8D8D2C" image={logo} to="/teams/marketing">Autonomous</TeamButton>
            <TeamButton hoverColor="#501584" image={logo} to="/teams/marketing">Marketing</TeamButton>
          </Box>
        </Box>
        <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="60px">
          <Box display='flex' width="50%" justifyContent="space-evenly" sx={{ flexDirection: 'row' }}>
            <TeamButton hoverColor="#820002" image={logo} to="/teams/marketing" sx={{ width: "447px" }}>Team Leads</TeamButton>
            <TeamButton hoverColor="#820002" image={logo} to="/teams/marketing" sx={{ width: "447px" }}>Alumni</TeamButton>
          </Box>
        </Box>

      </Box>
    </>
  );
}
