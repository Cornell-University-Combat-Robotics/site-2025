import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Container } from '@mui/material';

import RobotCard from '../../components/RobotCard';
import RobotCardList from '../../components/RobotCardList';
import StickyBoxMobile from '../../components/StickyBoxMobile.tsx';

import Benny from '../../assets/new-robots/BennyRJohm.png';
import Capsize from '../../assets/new-robots/Capsize.png';
import Huey from '../../assets/new-robots/Huey.png';

export default function RobotMobile() {
    const location = useLocation();

    useEffect(() => {
        const id_hash = location.hash.substring(1); // Remove the '#' from the hash

        //get component that # id is attached to
        const comp_id = document.getElementById(id_hash);
        if (comp_id != null) {
            comp_id.scrollIntoView({
                behavior: 'smooth', // Scroll to the element smoothly
                block: 'center'
            });
        }
    }, [location]);
    /* Trigger this effect whenever the location (hash) changes: Example
    If the page is reloaded and the URL has a hash (e.g., /robots#section-id) (aka. when navigated from apply page), 
    useEffect will run because the location changes upon page load */


    return (
        <Container width="100%">
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ px: '5%', width: "90%" }}>
                {/* This is the actual robot animation component */}
                <StickyBoxMobile />
                <Typography variant="mobileH1" sx={{ my: "10%" }}>
                    ROBOTS
                </Typography>

                <Typography variant="mobileH2" sx={{ marginBottom: '5%' }}>
                    RECENT ROBOTS
                </Typography>
                {/* 
                <Typography variant="mobileBody" textAlign='left' sx={{ marginBottom: '15%' }}>
                    Take a sneak peek at the robots we are working on this year in our Kinetic, Sportsman, and Autonomous subteams.
                </Typography> */}

                {/* First robot section */}
                <img src={Benny} style={{ width: '50%', height: '50%', marginLeft: '-5%', paddingTop: '10%' }} />
                <Stack direction='row' spacing={'5%'} sx={{ marginTop: '10%' }}>
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left'>Benny R. Johm</Typography>
                        <Typography variant='mobileH3' align='left'>Kinetic </Typography>
                        <Typography variant='mobileBody2' align='left' width='100%'>
                            Benny R. Johm is interesting not only because of his name, but because
                            he is CRC's first hubmotor robot, its first drum design, and is CRC's
                            largest weapon to date. He is a continued innovation from the Kinetic
                            Subteam's most recent and most successful robot, Beater B. Barker, by
                            refining the drivetrain and electronics while bringing the hubmotor
                            concept to CRC to make our robots more compact.
                        </Typography>
                    </Stack>
                </Stack>

                {/* Second robot section */}
                <img src={Capsize} style={{ width: '40%', height: '40%', marginLeft: '-5%', paddingTop: '10%' }} />
                <Stack direction='row' spacing={'5%'} sx={{ my: '10%' }}>
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left'>Capsize</Typography>
                        <Typography variant='mobileH3' align='left'>Sportsman </Typography>
                        <Typography variant='mobileBody2' align='left' width='100%'>
                            Capsize sports a powerful 4 wheel indirect drive, which combined with wide treaded wheels and spiky cleats, makes her incredibly fast. Capsize's lifter is chain driven, and emits an eerie shanty, heard only by those with ill family members.
                        </Typography>
                    </Stack>
                </Stack>

                {/* Third robot section */}
                <img src={Huey} style={{ width: '60%', height: '60%', marginLeft: '-5%', paddingTop: '10%' }} />
                <Stack direction='row' spacing={'5%'} sx={{ my: '5%' }}>
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left'>Huey </Typography>
                        <Typography variant='mobileH3' align='left'>Autonomous </Typography>
                        <Typography variant='mobileBody2' align='left' width='100%'>
                            Huey is Autonomous' second iteration on a fully autonomous robot for NHRL, reimagining the previous year's design to be more accurate. Huey is a 3-lb kinetic robot that uses a camera outside the arena and a pathing algorithm to locate the bots and hunt the enemy robot. We are excited by the interchangeability of our autonomous design this year, since any robot can be used with our camera setup.
                        </Typography>
                    </Stack>
                </Stack>

                {/* Retired robots section */}
                <Typography variant="mobileH2" sx={{ marginTop: '20%', marginBottom: '5%' }}>
                    RETIRED ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="mobileBody" textAlign="left" width='100%'>
                        Here are all of our robots from previous years, in all their retired glory!
                    </Typography>
                </Box>
                <RobotCardList type='Retired' capacity={3} />

                {/* Mini robots section */}
                <Typography variant="mobileH2" sx={{ marginTop: '10%', marginBottom: '5%' }}>
                    MINI ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="mobileBody" textAlign="left" width='100%'>
                        These are the mini-bots that helped our 12lb bots in battle!
                    </Typography>
                </Box>
                <RobotCardList type='Mini' capacity={4} />

                {/* 3LB robots section */}
                <Typography variant="mobileH2" sx={{ marginTop: '10%', marginBottom: '5%' }}>
                    3 LB ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="mobileBody" textAlign="left" width='100%'>
                        These are the 3lb robots that new members create as a part of CRC's training program!
                    </Typography>
                </Box>

                <Box id="3lb_apply_link">
                    <RobotCardList type='Three_lb' capacity={4} />
                </Box>
            </Box>
        </Container>
    );
}