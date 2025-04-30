import Benny from '../assets/new-robots/BennyRJohm.png';
import Capsize from '../assets/new-robots/Capsize.png';
import Huey from '../assets/new-robots/Huey.png';
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
                        <Typography variant='desktopBody2' align='left'>
                            Benny R. Johm is interesting not only because of his name, but because
                            he is CRC's first hubmotor robot, its first drum design, and is CRC's
                            largest weapon to date. He is a continued innovation from the Kinetic
                            Subteam's most recent and most successful robot, Beater B. Barker, by
                            refining the drivetrain and electronics while bringing the hubmotor
                            concept to CRC to make our robots more compact.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <Stack spacing={2} mt='10'>
                        <Typography variant='desktopH3' align='left'>Capsize | Sportsman</Typography>
                        <Typography variant='desktopBody2' align='left'>
                            Capsize sports a powerful 4 wheel indirect drive, which combined with wide treaded wheels and spiky cleats, makes her incredibly fast. Capsize's lifter is chain driven, and emits an eerie shanty, heard only by those with ill family members.
                        </Typography>
                    </Stack>
                    <img src={Capsize} style={{ width: '50%', height: 'auto' }} />
                </Stack>
                <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
                    <img src={Huey} style={{ width: '50%', height: 'auto' }} />
                    <Stack spacing={2} mt='10'>
                        <Typography variant='desktopH3' align='left'>Huey | Autonomous</Typography>
                        <Typography variant='desktopBody2' align='left'>
                            Huey is Autonomous' second iteration on a fully autonomous robot for NHRL, reimagining the previous year's design to be more accurate. Huey is a 3-lb kinetic robot that uses a camera outside the arena and a pathing algorithm to locate the bots and hunt the enemy robot. We are excited by the interchangeability of our autonomous design this year, since any robot can be used with our camera setup.
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