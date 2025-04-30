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
import { useTheme } from '@mui/material/styles';

// TeamButton is the button component for individual subteams on the Team page. It takes in the following props: subteam icon,
// white subteam icon for hovering, subteam color for hovering, and the link to the subteam page. Using this component
// enables the creation of a consistent button style for all subteams. (and no reptition!)
const TeamButton = ({ children, hoverColor, whiteImg, sx, image, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  return (
    <Button
      component={Link}
      to={to}
      variant="outlined"
      sx={{
        backgroundColor: "#1C1C1C",
        borderColor: "white",
        borderWidth: {
          xs: "2px",
          lg: "4px"
        },
        borderRadius: "16px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 0,
        paddingRight: 0,
        py: '2%',

        //for text within team button
        textAlign: "center",
        fontFamily: "Josefin Sans",


        fontSize: {
          xs: theme.typography.mobileBody.fontSize,
          sm: theme.typography.mobileBody.fontSize,
          md: theme.typography.desktopBody.fontSize,
          lg: theme.typography.desktopBody.fontSize,
        },

        height: {
          xs: "10vh",
          sm: "10vh",
          md: "24vh",
          lg: "24vh",
        },

        textTransform: "none",
        '&:hover': {
          color: 'white',
          backgroundColor: hoverColor,
        },
        ...sx
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={isHovered ? whiteImg : image} alt=""

        style={{
          marginBottom: "2%",
          //width & height for same size of screen can be same since images are same length & width
          //no width property cuz team buttons have diff widths
          height: "70%"
        }}
      />}
      {children}
    </Button>
  )
}

/** Team() creates the Team page of the website. */
export default function Team() {
  const theme = useTheme();
  return (
    <>
      <Box position="relative" >
        <Box position="relative" display="inline-block"> {/* Set position to relative for GradientNavBar. */}
          <img src={team_photo} style={{ width: '100%', height: 'auto', marginBottom: "5%" }} />
          <Typography
            variant="desktopH1"
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
        <div style={{ width: '100%', marginBottom: "5%", overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <motion.div
            animate={{ x: ["0%", "-100%"] }} // Moves text from right to left 
            transition={{
              duration: 20,
              repeat: Infinity, //loops forever
              ease: "linear"
            }}
          >
            <Typography variant="desktopH2" >
              {/*Duplicate text to ensure no empty space*/}
              {"KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • KINETIC • SPORTSMAN • AUTONOMOUS • MARKETING • "}
            </Typography>
          </motion.div>
        </div>

        <Typography
          sx={{
            maxWidth: '70%', margin: '2% auto', textAlign: 'center',

            fontSize: {
              xs: theme.typography.mobileBody.fontSize,
              sm: theme.typography.mobileBody.fontSize,
              md: theme.typography.desktopBody.fontSize,
              lg: theme.typography.desktopBody.fontSize,
            },
            fontFamily: theme.typography.mobileBody.fontFamily, //idk why need this, but set to mobileBody cuz all font families same anyways
          }}>
          {"Our entire team consists of four subteams:"}
          <br />
          {"Kinetic, Sportsman, Autonomous, and Marketing."}
        </Typography>
        <Typography

          sx={{
            maxWidth: '85%', margin: '2% auto', textAlign: 'center',

            fontFamily: theme.typography.mobileBody.fontFamily,
            fontSize: {
              xs: theme.typography.mobileBody.fontSize,
              sm: theme.typography.mobileBody.fontSize,
              md: theme.typography.desktopBody.fontSize,
              lg: theme.typography.desktopBody.fontSize,
            },
          }}>
          {"Click the buttons below to learn more about each of them!"}
        </Typography>

        {/*Three horizontal buttons for 3 actions users can do. Nested in a double 
            box. The inside box sets the width to 75% of screen. The outside box sets 
            the content inside (the inner box) to be center of screen horizontally. 
            Use hred within Button mui component to link the button. sx is the styling 
            details. &focus is for when the button is clicked (removing the blue border 
            when clicked. &hover is for making the text color white (don't change when
            button is not hovered over.*/}
        <Box display='flex' justifyContent="center" alignItems="center" mt="7vw" mb="3vw" >
          <Box width="75vw" justifyContent={"center"}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: { xs: 'wrap', sm: 'nowrap', md: 'nowrap', lg: 'nowrap' },
              columnGap: "3vw",
              rowGap: "1.5vh"  //maintains both vertical and horizontal gap between buttons
            }}
          >
            <TeamButton hoverColor="#0E7C2B" image={KineticColor} whiteImg={KineticWhite} to="/team/kinetic" sx={{ width: "30vw" }} >Kinetic</TeamButton>
            <TeamButton hoverColor="#1F398D" image={SportsmanColor} whiteImg={SportsmanWhite} to="/team/sportsman" sx={{ width: "30vw" }}>Sportsman</TeamButton>
            <TeamButton hoverColor="#8D8D2C" image={AutonColor} whiteImg={AutonWhite} to="/team/autonomous" sx={{ width: "30vw" }}>Autonomous</TeamButton>
            <TeamButton hoverColor="#501584" image={MarketingColor} whiteImg={MarketingWhite} to="/team/marketing" sx={{ width: "30vw" }}>Marketing</TeamButton>
          </Box>
        </Box>
        <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="60px" >
          <Box display='flex' width="63vw" justifyContent={"center"}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: { xs: 'wrap', sm: 'nowrap', md: 'nowrap', lg: 'nowrap' },
              columnGap: "3vw",
              rowGap: "1.5vh"  //maintains both vertical and horizontal gap between buttons
            }}>
            <TeamButton hoverColor="#820002" image={TLColor} whiteImg={TLWhite} to="/team/leads" sx={{ width: "100%" }}>
              Team Leads
            </TeamButton>
            <TeamButton hoverColor="#820002" image={AlumColor} whiteImg={AlumWhite} to="/team/alumni" sx={{ width: "100%" }}>Alumni</TeamButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

