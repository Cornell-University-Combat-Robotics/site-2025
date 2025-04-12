import Benny from '../../assets/new-robots/BennyRJohm.png';
import Capsize from '../../assets/new-robots/Capsize.png';
// import Benny from '../../assets/new-robots/BennyRJohm.png';
import nardo_whole from '../../assets/nardo-whole.png';
import { Box, Stack, Typography, Container } from '@mui/material';
import RobotCard from '../../components/RobotCard';
import RobotCardList from '../../components/RobotCardList';
import StickyBoxMobile from '../../components/StickyBoxMobile.tsx';
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ px: '5%' }}>
                {/* This is the actual robot animation component */}
                <StickyBoxMobile />
                <Typography variant="h1" sx={{ fontFamily: 'Josefin Sans', my: "10%" }}>
                    ROBOTS
                </Typography>

                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
                    UPCOMING ROBOTS
                </Typography>

                <Box display='flex' justifyContent='center' alignItems='center' sx={{ my: "20%" }}>
                    <Typography textAlign='left' sx={{ fontFamily: 'Josefin Sans' }}>
                        Check out the robots that we are working on this year in our Kinetic, Sportsman, and Autonomous subteams.
                    </Typography>
                </Box>

                {/* First robot section */}
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <img src={Benny} style={{ width: '50%', height: 'auto', marginLeft: '-5%' }} />
                    <Stack spacing={2} mt='10'>
                        <Typography variant='h2' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Benjamin R. Johm Esq. | Kinetic</Typography>
                        <Typography variant='body1' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
                            Benjamin R. Johm Esq. is Kinetic's latest creation....
                        </Typography>
                    </Stack>
                </Stack>
                <Typography variant='body1' align='left' width='100%' sx={{ my: '10%' }}>
                    Benjamin R. Johm Esq. is Kinetic's latest creation....
                </Typography>

                {/* Second robot section */}
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <Stack spacing={2} mt='10'>
                        <Typography variant='h2' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Capsize | Sportsman</Typography>
                        <Typography variant='body1' align='left' width='80%'>
                            Capsize is Sportsman's latest robot...
                        </Typography>
                    </Stack>
                    <img src={Capsize} style={{ width: '50%', height: 'auto' }} />
                </Stack>
                <Typography variant='body1' align='left' width='100%' sx={{ fontFamily: 'Josefin Sans', my: '10%' }}>
                    Capsize is Sportsman's latest robot...
                </Typography>

                {/* Third robot section */}
                <Stack direction='row' spacing={4} marginLeft='-5%' sx={{ mt: 5 }}>
                    <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
                    <Stack spacing={2} mt='10'>
                        <Typography variant='h2' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Huey | Autonomous</Typography>
                        <Typography variant='body1' align='left' width='80%'>
                            Huey is Autonomous' next robot to waddle into competition...
                        </Typography>
                    </Stack>
                </Stack>
                <Typography variant='body1' align='left' width='100%' sx={{ fontFamily: 'Josefin Sans', my: '10%' }}>
                    Huey is Autonomous' next robot to waddle into competition...
                </Typography>

                {/* Retired robots section */}
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', my: "10%" }}>
                    RETIRED ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography width='100%' sx={{ fontFamily: 'Josefin Sans' }}>
                        Here are all of our robots from previous years, in all their retired glory!
                    </Typography>
                </Box>
                <RobotCardList type='Retired' capacity={3} />

                {/* Mini robots section */}
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
                    MINI ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }}>
                        These are the mini-bots that helped our 12lb bots in battle!
                    </Typography>
                </Box>
                <RobotCardList type='Mini' capacity={4} />

                {/* 3LB robots section */}
                <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
                    3 LB ROBOTS
                </Typography>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }} >
                    <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }} >
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