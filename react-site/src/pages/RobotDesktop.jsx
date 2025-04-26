import Benny from '../assets/new-robots/BennyRJohm.png';
import Capsize from '../assets/new-robots/Capsize.png';
import nardo_whole from '../assets/nardo-whole.png';
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
        <Container mx="15%">
            <Box display="flex" flexDirection="column" alignItems="center">
                <StickyBox />
                <Typography variant="desktopH1" sx={{ mt: 5 }}>
                    ROBOTS
                </Typography>
                <Typography variant="desktopH2" sx={{ mt: 15 }}>
                    UPCOMING ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                    <Typography variant="desktopBody">
                        Check out the robots that we are working on this year in our Kinetic, Sportsman, and Autonomous subteams.
                    </Typography>
                </Box>
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <img src={Benny} style={{ width: '50%', height: 'auto' }} />
                    <Stack spacing={2} mt='10'>
                        <Typography variant='desktopH3' align='left'>Benjamin R. Johm Esq. | Kinetic</Typography>
                        <Typography variant='desktopBody' align='left' width='80%'>
                            Benjamin R. Johm Esq. is Kinetic's latest creation....
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <Stack spacing={2} mt='10'>
                        <Typography variant='desktopH3' align='left'>Capsize | Sportsman</Typography>
                        <Typography variant='desktopBody' align='left' width='80%'>
                            Capsize is Sportsman's latest robot...
                        </Typography>
                    </Stack>
                    <img src={Capsize} style={{ width: '50%', height: 'auto' }} />
                </Stack>
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
                    <Stack spacing={2} mt='10'>
                        <Typography variant='desktopH3' align='left'>Huey | Autonomous</Typography>
                        <Typography variant='desktopBody' align='left' width='80%'>
                            Huey is Autonomous' next robot to waddle into competition...
                        </Typography>
                    </Stack>
                </Stack>
                <Typography variant="desktopH2" sx={{ mt: 15 }}>
                    RETIRED ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                    <Typography width='75%' variant='desktopBody'>
                        Here are all of our robots from previous years, in all their retired glory!
                    </Typography>
                </Box>
                <RobotCardList type='Retired' capacity={3} />
                <Typography variant="desktopH2" sx={{ mt: 15 }}>
                    MINI ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
                    <Typography width='75%' variant="desktopBody">
                        These are the valiant mini-bots that supported our 12lb robots in competition.
                    </Typography>
                </Box>
                <RobotCardList type='Mini' capacity={4} />
                <Typography variant="desktopH2" sx={{ mt: 15 }}>
                    3 LB ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }} >
                    <Typography width='75%' variant='desktopBody'>
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