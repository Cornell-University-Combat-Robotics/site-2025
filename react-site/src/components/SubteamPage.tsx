import { Box, Button, List, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from '@mui/material';
import TeamMemberList from "./MemberList";
import marketing_photo from "../assets/marketing-photo.jpg"; //ignore these errors, vscode is wrong
import sportsman_photo from "../assets/sportsman-photo.jpg";
import kinetic_photo from "../assets/kinetic-photo.jpg";
import autonomous_photo from "../assets/autonomous-photo.jpg";
import leads_photo from "../assets/leads-photo.jpg";
import alumni_photo from "../assets/alumni-photo.jpg";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';


/**
For each individual subteam page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

This file serves as a general component for individual subteam pages. 
The interface will take in properties that are unique to each subteam, which are the text components (e.g. subsystems and their descriptions).
However, the general layout of the subteam page are constant across all subteams, hence the interface. 
*/
export interface SubteamProps {
    name: string; //subteam name
    desc: string; //general subteam description
    optionalDesc: string; //extra description
    subsystemIntro: string; //single line text before subsystem buttons
    subsystems: { //subsystems should be an array of objects, each having 'name' and 'desc' properties
        name: string;
        desc: string;
    }[]; //customizable number of subsystems
    otherInterest: string[]; //bullet points of description if client is interested in other subteams
}

export default function SubteamPage(props: SubteamProps) {

    //TODO: encapsulate for different number of buttons
    /**    
    Effect: toggle visibility for subsystem button animations. default set to not visible.
    - 4 different use states due to 4 different buttons. e.g. showSubsystem[0] controls visibility of 1st subsystem
    showSubsystem: immutable state variable
    setShowSubsystem: state updater function to modify showStats value
    */
    const [showSubsystem, setShowSubsystem] = useState([false, false, false, false]);

    /**
    Effect: Each element in handleSubsystemClick array is a function updating showSubsystem, 
    setting its corresponding value to true (keeping the other showSubsystems false) when button is clicked.
    */
    const handleSubsystemClick = [
        () => setShowSubsystem([true, false, false, false]),
        () => setShowSubsystem([false, true, false, false]),
        () => setShowSubsystem([false, false, true, false]),
        () => setShowSubsystem([false, false, false, true])
    ];

    const theme = useTheme();

    const bodyTextStyle = {
        fontSize: {
            xs: theme.typography.mobileBody.fontSize,
            sm: theme.typography.mobileBody.fontSize,
            md: theme.typography.desktopBody.fontSize,
            lg: theme.typography.desktopBody.fontSize,
        },
        fontFamily: theme.typography.mobileBody.fontFamily,
    };

    /**Purpose: React Router hook used for programmatic navigation
    Use: navigate('/route') to go to a specific route*/
    const navigate = useNavigate();
    const isMobile = useContext(MobileContext);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>

            {/*Blurred background image is static (not in parallax section)*/}

            {/* 
            Effect: sets background image for entirety of subteam page 
            Note: background image will only be displayed if there are components in the box (e.g if box has no components, no background image will be rendered) 
            */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: GetSubteamPhoto(props.name), // Use the image as a background.
                backgroundSize: 'cover', // Ensure the image retains its original size in repeats
                backgroundAttachment: 'fixed', // Keeps the background image fixed during scroll
                backgroundPosition: 'center' // Ensures image is always at centre of screen no matter if resizing occurs
            }}>

                {/*
                Box is empty except for button. 
                Box has a height taking up the full viewport, allowing for the full size of the image.
                */}
                <Box sx={{ height: '100vh', position: 'relative' }}>



                </Box>

                {/*
            Backdrop filter applies to the PARENT of the box (the "backdrop"). 
            This makes the background image blurry & darker w/o changing the text components.
            */}
                <Box sx={{
                    position: 'relative', zIndex: 1, padding: '12%', backdropFilter: 'blur(5px) brightness(0.5)',
                    height: '100%',        //not mvp: background: 'linear-gradient(to top,  transparent, blur(5px), brightness(0.5))',
                }}>
                    {/*Stack contains both the Marketing title & its brief blurb*/}
                    <Stack direction="row" alignItems={"center"} justifyContent={"center"}
                        columnGap={12} //for desktop
                        rowGap={"2vh"} //for mobile
                        // text will be cut off to allow the padding to hold true, and user will be allowed to scroll horizontally to see hidden text.
                        sx={{
                            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' },  // Children wrap only on small & extra small screens 
                        }}
                    >
                        {/*Text components to be placed above blurred image*/}
                        <Typography

                            sx={{
                                textAlign: "center",
                                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)',
                                //note: cannot use variant here, cuz it's not responsive
                                fontSize: {
                                    xs: theme.typography.mobileH2.fontSize,
                                    lg: theme.typography.desktopH2.fontSize, //todo slightly small
                                },
                                fontFamily: theme.typography.mobileBody.fontFamily
                            }}
                        >
                            {props.name.toUpperCase()}
                        </Typography>

                        <Typography sx={{
                            textAlign: 'left', minWidth: 320, wordWrap: 'break-word',
                            ...bodyTextStyle //spread operator (...) to inject the properties of one object into another
                        }}>
                            {props.desc}
                        </Typography>

                    </Stack>

                    <Typography sx={{
                        textAlign: "left", mt: "6vw", //kinda counterintuitive, but vw works better than vh here cuz mobile's vh is way too large
                        display: 'block', //ensure typographies arent combined tgt (not sure why this isnt automatic...)
                        ...bodyTextStyle
                    }}>
                        {props.optionalDesc}
                    </Typography>

                    <Typography sx={{
                        textAlign: "left", mt: "6vw", mb: "8vw", display: 'block',
                        ...bodyTextStyle
                    }}>
                        {props.subsystemIntro}
                    </Typography>

                    {/*
                Stack contains a row of buttons for the different subsystems of the subteam.
                */}
                    {props.name != "Leads" && props.name != "Alumni" &&
                        <Stack direction="row" justifyContent={"center"} alignItems={"center"}
                            sx={{
                                flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' },
                                gap: 3, //maintains both vertical and horizontal gap between buttons

                            }}
                        >
                            {props.subsystems.map((subsystem, index) => (

                                <Button key={index} sx={{
                                    //the 3 following properties resizes width but with constraints -> pertains only to width, not height, cuz flex direction of stack is row
                                    width: {
                                        xs: "20vw",
                                        sm: "25vw",
                                        lg: "30vw"
                                    },
                                    minWidth: 130, // ensures that buttons dont get too small or big when wrapping 
                                    maxWidth: 400,
                                    height: {
                                        xs: "15vh",
                                        //would be beneficial to have another mobile body size here -> between sm & md, font size gets kinda big
                                        sm: "18vh",
                                        md: "15vh",
                                        lg: "18vh",
                                        xl: "25vh"
                                    },
                                    minHeight: 120,
                                    maxHeight: 250,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', borderRadius: 5,
                                    border: '3px solid white',
                                    '&:hover': { //on mouse hover
                                        backgroundColor: 'rgba(148, 49, 49, 0.7)', // Customize hover background color if needed
                                        border: '3px solid white', // Make sure border stays white on hover
                                    },
                                }}
                                    //hover functionality
                                    onMouseEnter={() => {
                                        handleSubsystemClick[index]();
                                    }}
                                    onMouseLeave={() => {
                                        setShowSubsystem([false, false, false, false])
                                    }}
                                >
                                    {/*Conditionally render SubsystemButtonDisplay based on showSubsystem state*/}
                                    {showSubsystem[index] && <SubsystemButtonDisplay name={subsystem.name} desc={subsystem.desc} />}

                                    {/*Always display subsystem name on button*/}
                                    <Typography sx={{
                                        color: 'white', textTransform: 'none',
                                        ...bodyTextStyle
                                    }}>
                                        {subsystem.name}
                                    </Typography>
                                </Button>
                            ))}
                        </Stack>}

                    {/*TODO: change all to body 1*/}
                    {props.name != "Leads" && props.name != "Alumni" && <Typography sx={{ textAlign: "left", display: "block", mt: "8vw", ...bodyTextStyle }} >
                        {"While the subsystems are distinct, members are able to work interchangeably among them."}
                    </Typography>}

                    {props.name != "Leads" && props.name != "Alumni" && <Typography sx={{ mt: "8vw", ...bodyTextStyle }}>
                        {"If you are more interested in..."}
                    </Typography>}

                    {/*List of bullet points for other interests
                    
                    marginInLine applies to both right/left and top/bottom margins*/}
                    <Box textAlign={"left"} marginInline={"2vw"} >
                        {props.otherInterest.map((bulletPoint, index) => (
                            <Typography key={index} sx={{ ...bodyTextStyle }}>
                                {bulletPoint}
                            </Typography>
                        ))}
                    </Box>

                    <Typography sx={{
                        textAlign: "left", mt: "10vw", mb: "6vw",

                        fontSize: {
                            xs: theme.typography.mobileH2.fontSize,
                            lg: theme.typography.desktopH2.fontSize,
                        },
                        fontFamily: theme.typography.mobileBody.fontFamily
                    }}>
                        {"Meet the team"}
                    </Typography>

                    <TeamMemberList teamName={props.name} />

                </Box>


            </Box>



        </Box>
    );
}

// Effect: returns image url for subteam photo
function GetSubteamPhoto(subteamName) {
    switch (subteamName.toLowerCase()) {
        case "marketing":
            return `url(${marketing_photo})`;
        case "autonomous":
            return `url(${autonomous_photo})`;
        case "kinetic":
            return `url(${kinetic_photo})`;
        case "sportsman":
            return `url(${sportsman_photo})`;
        case "leads":
            return `url(${leads_photo})`;
        case "alumni":
            return `url(${alumni_photo})`;
    }
}

/** Effect: when clicking on a button in subteam pages, displays subsystem information over section of screen */
function SubsystemButtonDisplay({ name, desc }) {

    const theme = useTheme();
    const txtStyle = {
        fontSize: {
            xs: theme.typography.mobileBody.fontSize,
            md: theme.typography.mobileBody2.fontSize,
            lg: theme.typography.desktopBody.fontSize,
            xl: theme.typography.desktopBody2.fontSize
        },
        fontFamily: theme.typography.desktopBody2.fontFamily
    };

    return (
        //position must be fixed (in terms of the SCREEN, away from doc flow), else will be constrained by the button itself
        //parent position must be relative
        <Fade in={true} timeout={300}>
            <Box sx={{
                bgcolor: 'black', textAlign: 'left', borderRadius: 5, padding: 5, zIndex: 100,
                position: 'fixed', height: 'auto', transform: 'translateY(-30vh)',
                //Moves the element DOWN by 100% relative to its own position (default y position, since top attribute not set, so at TOP of BOX parent container)

                wordWrap: 'break-word',  // Ensure the text breaks to the next line when it exceeds the container width
                left: '20%', right: '20%' //spacing from sides of screen
            }}>
                {/*Subsystem name header*/}
                <Typography sx={{
                    color: 'white', fontWeight: 'bold', mb: '1vw', textTransform: 'none',
                    ...txtStyle
                }}>
                    {name}
                </Typography>

                {/*Subsystem description*/}
                <Typography sx={{
                    color: 'white',
                    whiteSpace: 'pre-line',  // Ensures that \n creates line breaks in the text
                    textTransform: 'none',    // Prevent ALL CAPS
                    ...txtStyle

                }}>
                    {desc}
                </Typography>
            </Box>
        </Fade>
    );
}

{/** Component creating hyperlink to other pages */ }
export function LinkToOtherSubteams({ url, text }) {

    const [isHover, setHover] = useState(false);

    return (
        <Link
            to={url}
            style={{
                color: isHover ? "red" : "white",
                textDecoration: "underline"
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        > {text}</Link >
    );
}