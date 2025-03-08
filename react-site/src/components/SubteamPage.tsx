import { Box, Button, List, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from '@mui/material';
import TeamMemberList from "./MemberList";
import marketing_photo from "../assets/marketing-photo.jpg"; //ignore these errors, vscode is wrong
import sportsman_photo from "../assets/sportsman-photo.jpg";
import kinetic_photo from "../assets/kinetic-photo.jpg";
import autonomous_photo from "../assets/autonomous-photo.jpg";
import leads_photo from "../assets/leads-photo.jpg";
import alumni_photo from "../assets/alumni-photo.jpg";

/*
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
    /*
    Effect: toggle visibility for subsystem button animations. default set to not visible.
    - 4 different use states due to 4 different buttons. e.g. showSubsystem[0] controls visibility of 1st subsystem
    showSubsystem: immutable state variable
    setShowSubsystem: state updater function to modify showStats value
    */
    const [showSubsystem, setShowSubsystem] = useState([false, false, false, false]);

    /*
    Effect: Each element in handleSubsystemClick array is a function updating showSubsystem, 
    setting its corresponding value to true (keeping the other showSubsystems false) when button is clicked.
    */
    const handleSubsystemClick = [
        () => setShowSubsystem([true, false, false, false]),
        () => setShowSubsystem([false, true, false, false]),
        () => setShowSubsystem([false, false, true, false]),
        () => setShowSubsystem([false, false, false, true])
    ];

    //Purpose: React Router hook used for programmatic navigation
    //Use: navigate('/route') to go to a specific route
    const navigate = useNavigate();

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

                    {/*
                    Back button returning to teams page.
                    Position must be absolute to parent to handle overlap over the box.
                    */}
                    <Button
                        sx={{
                            borderRadius: 2, textAlign: 'center', outline: 2, outlineColor: 'white',
                            position: 'absolute', bottom: '15%', left: '10%', width: 'auto', height: 'auto'
                        }}
                        onClick={() => navigate('/team')} //back to teams page
                    >
                        <Typography sx={{ fontSize: 25, color: 'white', whiteSpace: 'nowrap', margin: 0.5 }}>
                            {"< Back"}
                        </Typography>
                    </Button>

                </Box>

                {/*
            Backdrop filter applies to the PARENT of the box (the "backdrop"). 
            This makes the background image blurry & darker w/o changing the text components.
            */}
                <Box sx={{
                    position: 'relative', zIndex: 1, padding: '12%', backdropFilter: 'blur(5px) brightness(0.5)',
                    height: '100%'
                }}>
                    {/*Stack contains both the Marketing title & its brief blurb*/}
                    <Stack direction="row" alignItems={"center"}
                        overflow={"scroll"} //when screen size gets too smaller but has yet to trigger flexWrap, 
                        // text will be cut off to allow the padding to hold true, and user will be allowed to scroll horizontally to see hidden text.
                        sx={{
                            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap' },  // Children wrap only on small & extra small screens 
                        }}
                    >
                        {/*Text components to be placed above blurred image*/}
                        <Typography sx={{
                            fontSize: 80, textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)',
                            marginRight: 10 //must be applied in this specific typography component, else wrapping of 2nd typography will look weird
                        }}>
                            {props.name.toUpperCase()}
                        </Typography>

                        <Typography sx={{ fontSize: 20, textAlign: 'left', minWidth: 320, wordWrap: 'break-word' }}>
                            {props.desc}
                        </Typography>

                    </Stack>

                    <Typography sx={{ fontSize: 20, textAlign: "left", marginTop: 10 }}>
                        {props.optionalDesc}
                    </Typography>

                    <Typography sx={{ fontSize: 20, textAlign: "left", marginTop: 10 }}>
                        {props.subsystemIntro}
                    </Typography>

                    {/*
                Stack contains a row of buttons for the different subsystems of the subteam.
                */}
                    {props.name != "Leads" && props.name != "Alumni" && <Stack direction="row" marginTop={10} justifyContent={"center"} alignItems={"center"}
                        sx={{
                            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'nowrap' },
                            gap: 3 //maintains both vertical and horizontal gap between buttons
                        }}
                    >
                        {props.subsystems.map((subsystem, index) => (

                            <Button key={index} sx={{
                                flex: '1 1 250px', //flexGrow, flexShrink: all buttons set relative to each other; flexBasis: base width when screen large enough
                                maxWidth: 250, // ensures that buttons dont get too big when wrapping
                                height: 180,
                                backgroundColor: '#943131', textAlign: 'center', borderRadius: 2
                            }}
                                //hover functionality
                                onMouseEnter={handleSubsystemClick[index]}
                                onMouseLeave={() => setShowSubsystem([false, false, false, false])}
                            >
                                {/*Conditionally render SubsystemButtonDisplay based on showSubsystem state*/}
                                {showSubsystem[index] && <SubsystemButtonDisplay name={subsystem.name} desc={subsystem.desc} />}

                                {/*Always display subsystem name on button*/}
                                <Typography sx={{ fontSize: 23, color: 'white' }}>
                                    {subsystem.name}
                                </Typography>
                            </Button>
                        ))}
                    </Stack>}

                    {/*TODO: change all to body 1*/}
                    {props.name != "Leads" && props.name != "Alumni" && <Typography variant="body1" sx={{ textAlign: "left", marginTop: 10 }}>
                        {"While the subsystems are distinct, members are able to work interchangeably among them."}
                    </Typography>}

                    {props.name != "Leads" && props.name != "Alumni" && <Typography sx={{ fontSize: 30, marginTop: 10, marginBottom: 5 }}>
                        {"If you are more interested in..."}
                    </Typography>}

                    {/*List of bullet points for other interests
                                    <Typography key={index} sx={{ fontSize: 20, marginTop: 5 }}>*/}

                    <Box textAlign={"left"} marginInline={10} >
                        {props.otherInterest.map((bulletPoint, index) => (
                            <Typography key={index} sx={{ fontSize: 20, marginTop: 2 }}>
                                {bulletPoint}
                            </Typography>
                        ))}
                    </Box>

                    <Typography sx={{ fontSize: 45, textAlign: "left", marginTop: 10, marginBottom: 3 }}>
                        {"Meet the team"}
                    </Typography>

                    <TeamMemberList teamName={props.name} />

                </Box>


            </Box>



        </Box>
    );
}

//Effect: returns image url for subteam photo
function GetSubteamPhoto(subteamName){
    switch(subteamName.toLowerCase()){
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

//Effect: when clicking on a button in subteam pages, displays subsystem information over section of screen
function SubsystemButtonDisplay({ name, desc }) {

    return (
        //position must be fixed (in terms of the SCREEN, away from doc flow), else will be constrained by the button itself
        //parent position must be relative
        <Fade in={true} timeout={300}>
            <Box sx={{
              bgcolor: 'black', textAlign: 'left', borderRadius: 5, padding: 5, zIndex: 100,
              position: 'fixed', height: 'auto', transform: 'translateY(-30%)',  // Center the box vertically
              wordWrap: 'break-word',  // Ensure the text breaks to the next line when it exceeds the container width
              left: '20%', right: '20%' //spacing from sides of screen
            }}>
                {/*Subsystem name header*/}
                <Typography sx={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
                    {name}
                </Typography>

                {/*Subsystem description*/}
                <Typography variant="body1" sx={{
                    color: 'white',
                    whiteSpace: 'pre-line'  // Ensures that \n creates line breaks in the text
                }}>
                    {desc}
                </Typography>
            </Box>
        </Fade>
    );
}
