import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
                <Typography variant="mobileH1" sx={{ fontFamily: 'Josefin Sans', my: "10%" }}>
                    ROBOTS
                </Typography>

                <Typography variant="mobileH2" sx={{ fontFamily: 'Josefin Sans', marginBottom: '5%' }}>
                    UPCOMING ROBOTS
                </Typography>

                <Typography variant="mobileBody" textAlign='left' sx={{ fontFamily: 'Josefin Sans', marginBottom: '15%' }}>
                    Take a sneak peek at the robots we are working on this year in our Kinetic, Sportsman, and Autonomous subteams.
                </Typography>

                {/* First robot section */}
                <Stack direction='row' spacing={'5%'} sx={{ marginTop: '10%' }}>
                    <img src={Benny} style={{ width: '50%', height: '50%', marginLeft: '-5%', paddingTop: '10%' }} />
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Benny R. Johm</Typography>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Kinetic </Typography>
                        <Typography variant='mobileBody' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
                            Benjamin R. Johm Esq. is Kinetic's latest creation....
                        </Typography>
                    </Stack>
                </Stack>

                {/* Second robot section */}
                <Stack direction='row' spacing={'5%'} sx={{ my: '10%' }}>
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Capsize</Typography>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Sportsman </Typography>
                        <Typography variant='mobileBody' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
                            Capsize is Sportsman's latest robot...
                        </Typography>
                    </Stack>
                    <img src={Capsize} style={{ width: '40%', height: '40%', marginLeft: '-5%', paddingTop: '10%' }} />
                </Stack>

                {/* Third robot section */}
                <Stack direction='row' spacing={'5%'} sx={{ my: '5%' }}>
                    <img src={Huey} style={{ width: '60%', height: '60%', marginLeft: '-5%', paddingTop: '10%' }} />
                    <Stack spacing={'2.5%'} mt='10'>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Huey </Typography>
                        <Typography variant='mobileH3' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Autonomous </Typography>
                        <Typography variant='mobileBody' align='left' width='100%' sx={{ fontFamily: 'Josefin Sans' }}>
                            Huey is Autonomous' next robot to waddle into competition...                        </Typography>
                    </Stack>
                </Stack>

                {/* Retired robots section */}
                <Typography variant="mobileH2" sx={{ fontFamily: 'Josefin Sans', marginTop: '20%', marginBottom: '5%' }}>
                    RETIRED ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="mobileBody" textAlign="left" width='100%'>
                        Here are all of our robots from previous years, in all their retired glory!
                    </Typography>
                </Box>
                <RobotCardList type='Retired' capacity={3} />

                {/* Mini robots section */}
                <Typography variant="mobileH2" sx={{ fontFamily: 'Josefin Sans', marginTop: '10%', marginBottom: '5%' }}>
                    MINI ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant="mobileBody" textAlign="left" width='100%'>
                        These are the mini-bots that helped our 12lb bots in battle!
                    </Typography>
                </Box>
                <RobotCardList type='Mini' capacity={4} />

                {/* 3LB robots section */}
                <Typography variant="mobileH2" sx={{ fontFamily: 'Josefin Sans', marginTop: '10%', marginBottom: '5%' }}>
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