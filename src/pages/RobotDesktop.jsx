import Apollo from '../assets/new-robots/ApolloMain.png';
import Jorm from '../assets/new-robots/JormMain.png';
import Huey from '../assets/new-robots/HueyMain.png';
import FourHorsemen from '../assets/new-robots/FourHorsemenMain.png';
import Benny from '../assets/new-robots/BennyMain.png';
import { Box, Stack, Typography, Container } from '@mui/material';
import RobotCardList from '../components/RobotCardList';
import StickyBox from '../components/StickyBox.tsx';
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

export default function RobotDesktop() {
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
        <Box display="flex" flexDirection="column" alignItems="center" mx="15%">
            <StickyBox />
            <Typography variant="desktopH1" sx={{ mt: 5 }}>
                ROBOTS
            </Typography>
            <Typography variant="desktopH2" sx={{ mt: 15 }}>
                May 2026 Comp
            </Typography>
            {/* <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                <Typography variant="desktopBody">
                    Check out the robots that we are working on this year in our Mechanical, Sportsman, and Autonomous subteams.
                </Typography>
            </Box> */}
            {/* first robot */}
            <Stack direction='row' spacing={5} sx={{ mt: "8%", alignItems: 'center', justifyContent: 'center' }}>
                <img src={Apollo} style={{ width: '50%', height: '30%' }} />
                <Stack spacing={2} mt='10'>
                    <Typography variant='desktopH3' align='left'>Apollo</Typography>
                    <Typography variant='desktopBody2' align='left' >
                        Kinetic
                    </Typography>
                </Stack>
            </Stack>
            {/* second robot */}
            <Stack direction='row' spacing={5} sx={{ mt: "8%", alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2} mt='10'>
                    <Typography variant='desktopH3' align='left'> Jörmungandr</Typography>
                    <Typography variant='desktopBody2' align='left' >
                        Sportsman
                    </Typography>
                </Stack>
                <img src={Jorm} style={{ width: '40%', height: 'auto' }} />
            </Stack>
            {/* third robot */}
            <Stack direction='row' spacing={5} sx={{ mt: "8%", alignItems: 'center', justifyContent: 'center' }}>
                <img src={Huey} style={{ width: '60%', height: '50%' }} />
                <Stack spacing={2} mt='10'>
                    <Typography variant='desktopH3' align='left'> Huey </Typography>
                    <Typography variant='desktopBody2' align='left' >
                        Autonomous
                    </Typography>
                </Stack>
            </Stack>
            {/* fourth robot */}
            <Stack direction='row' spacing={5} sx={{ mt: "8%", alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2} mt='10'>
                    <Typography variant='desktopH3' align='left'> Four Horsemen </Typography>
                    <Typography variant='desktopBody2' align='left' >
                        Infinity
                    </Typography>
                </Stack>
                <img src={FourHorsemen} style={{ width: '50%', height: 'auto' }} />
            </Stack>
            {/* fifth robot */}
            <Stack direction='row' spacing={5} sx={{ mt: "8%", alignItems: 'center', justifyContent: 'center' }}>
                <img src={Benny} style={{ width: '60%', height: '50%' }} />
                <Stack spacing={2} mt='10'>
                    <Typography variant='desktopH3' align='left'> Benny </Typography>
                    <Typography variant='desktopBody2' align='left' >
                        Kinetic
                    </Typography>
                </Stack>
            </Stack>
            <Typography variant="desktopH2" sx={{ mt: 15 }}>
                RETIRED ROBOTS
            </Typography>
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                <Typography variant='desktopBody'>
                    Here are all of our robots from previous years, in all their retired glory!
                </Typography>
            </Box>
            <RobotCardList type='Retired' capacity={4} />

            {/* minibots */}
            <Typography variant="desktopH2" sx={{ mt: 15 }}>
                MINI ROBOTS
            </Typography>
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                <Typography variant="desktopBody">
                    These are the valiant mini-bots that supported our 12lb robots in competition.
                </Typography>
            </Box>
            {/* wrapping robot card list centers it (idk why sob) */}
            <Box>
                <RobotCardList type='Mini' capacity={4} />
            </Box>

            {/* 3lb */}
            <Typography variant="desktopH2" sx={{ mt: 15 }}>
                3 LB ROBOTS
            </Typography>
            <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }} >
                <Typography variant='desktopBody'>
                    These are the 3lb robots that new members create as a part of CRC's training program!
                </Typography>
            </Box>
            <Box id="3lb_apply_link">
                <RobotCardList type='Three_lb' capacity={4} />
            </Box>
        </Box>
    );
}