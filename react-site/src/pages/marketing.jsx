import { Box, Typography, Button } from "@mui/material";
import marketing_photo from "../assets/marketing-photo.jpg";
import TeamMemberList from "../components/MemberList";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

/*Marketing subteam page within Team Page*/
export default function Marketing() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Business", desc: "Generates revenue, maintains corporate relations, delivers pitches, and identifies opportunities for members and the team.\n\nThis subsystem strives to expand our network and secure the resources necessary for CRC's growth." },
        { name: "Software", desc: "Develops and maintains CRC’s website and implements other promotional projects such as our video games.\n\nSoftware seeks to incorporate members' personalities into our projects and showcase the appeal of our team." },
        { name: "Media", desc: "Manages content for CRC's social media presence, which includes photography, videography, writing, and editing.\n\nThis subsystem aims to create engaging posts that reflect the team's personality and encourage member creativity." },
        { name: "Design", desc: "Encompasses art and graphic design for CRC’s public image and merchandise, including trading cards, stickers, clothing, and more.\n\nDesign fosters an environment for members to express their passions, turning our robots into beloved characters." }
    ];

    //TODO: how to encapsulate for different number of buttons
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
        //wrapping in ParallaxProvider to handle parallax content
        <ParallaxProvider>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>

                {/*Blurred background image is static (not in parallax section)*/}

                {/* 
                TODO: update comments
                Effect: sets first image as unblurred background for all other components within this box 
                Note: background image will only be displayed if there are components in the box (e.g if box has no components, no background image will be rendered) 
                */}
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${marketing_photo})`, // Use the image as a background.
                    backgroundSize: 'cover', // Ensure the image retains its original size in repeats
                    backgroundPosition: 'contain',
                    backgroundAttachment: 'fixed' // Keeps the background image fixed during scroll
                }}>


                    {/*Parallax Section: Text over image*/}
                    <Parallax speed={10}>

                        {/*Box is empty except for button: just a full length of photo unblurred b4 the blurred text comes in*/}
                        <Box sx={{ height: '100vh', position: 'relative' }}>

                            {/*
                            Back button returning to teams page
                            position must be absolute to parent to handle overlap over the box
                            */}
                            <Button
                                sx={{
                                    borderRadius: 2, textAlign: 'center', outline: 2, outlineColor: 'black',
                                    position: 'absolute', bottom: '20%', left: '10%', width: 'auto'
                                }}
                                onClick={() => navigate('/teams')} //back to teams page
                            >
                                <Typography sx={{ fontSize: 25, color: 'black', whiteSpace: 'nowrap' }}>
                                    {"< Back"}
                                </Typography>
                            </Button>
                
                        </Box>

                        {/*backdrop filter applies to the PARENT of the box (the "backdrop"). This makes the background image blurry & darker w/o changing the text components*/}
                        <Box sx={{
                            position: 'relative', zIndex: 1, padding: 20, backdropFilter: 'blur(5px) brightness(0.5)',
                            height: '100%'
                        }}>
                            {/*This box is formatted using column that contains both the Marketing title & its brief blurb*/}
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {/*Text/Components to be placed above blurred image*/}
                                <Typography sx={{ fontSize: 80, zIndex: 1, marginRight: 10, textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)' }}>
                                    {"MARKETING"}
                                </Typography>

                                <Typography sx={{ fontSize: 20, textAlign: 'left' }}>
                                    {"Within the Marketing Subteam, we specialize in promoting and enhancing CRC's brand. Our mission is to strengthen CRC's presence and reputation, elevating it beyond just a robotics team."}
                                </Typography>
                            </Box>

                            <Typography sx={{ fontSize: 20, textAlign: "left", marginTop: 10 }}>
                                {"Our approach to marketing revolves around four critical subsystems:"}
                            </Typography>

                            {/*This box contains a row of buttons for the different subsystems of the subteam.
                        change to stack -> more conventional*/}
                            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3, marginTop: 10 }}>
                                {subsystems.map((subsystem, index) => (

                                    <Button key={index} sx={{
                                        position: 'relative', //must set position to relative for the subsystem description to be displayed relative to entire screen
                                        flex: 1, //flex: all buttons made same size
                                        height: 180, // TODO: width doesnt seem to change even if i specify width
                                        backgroundColor: '#943131', textAlign: 'center', padding: 5, borderRadius: 2
                                    }}
                                        //hover functionality
                                        onMouseEnter={handleSubsystemClick[index]}
                                        onMouseLeave={() => setShowSubsystem([false, false, false, false])}
                                    >
                                        {/*Conditionally render SubsystemButtonDisplay based on showSubsystem state*/}
                                        {showSubsystem[index] && <SubsystemButtonDisplay name={subsystem.name} desc={subsystem.desc} />}

                                        {/*Always display subsystem name on button*/}
                                        <Typography sx={{ fontSize: 30, color: 'white' }}>
                                            {subsystem.name}
                                        </Typography>
                                    </Button>
                                ))}
                            </Box>

                            {/*TODO: change all to body 1*/}
                            <Typography variant="body1" sx={{ textAlign: "left", marginTop: 10 }}>
                                {"While the subsystems are distinct, members are able to work interchangeably among them."}
                            </Typography>

                            <Typography sx={{ fontSize: 30, marginTop: 10 }}>
                                {"If you are more interested in..."}
                            </Typography>

                            <Typography sx={{ fontSize: 20, marginTop: 5 }}>
                                {"• Robot construction. Our Kinetic or Sportsman subteams may be a better fit"}<br />
                                {"• Programming or wiring, our Autonomous subteam may be a better fit"}
                            </Typography>

                            <Typography sx={{ fontSize: 45, textAlign: "left", marginTop: 10 }}>
                                {"Meet the team"}
                            </Typography>

                            <TeamMemberList teamName={"Marketing"} />

                        </Box>
                    </Parallax>

                </Box>



            </Box>
        </ParallaxProvider>
    );
}

//Effect: when clicking on a button in subteam pages, displays subsystem information over section of screen
//TODO: maybe make export
function SubsystemButtonDisplay({ name, desc }) {

    return (
        //position must be fixed (in terms of the SCREEN, away from doc flow), else will be constrained by the button itself
        //parent position must be relative
        <Box sx={{
            bgcolor: 'black', textAlign: 'left', borderRadius: 5, padding: 5, zIndex: 100,
            position: 'fixed', height: 'auto',
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
    );
}
