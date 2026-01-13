import { useContext, useState, useEffect } from 'react';
import { MobileContext } from '../App.jsx';
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/crc-logo-cropped.png";
import background from "../assets/background-pictures/crcbackground.png";
import team_photo from "../assets/background-pictures/team-photo-hearts.png";
import Carousel from "../components/Carousel.js";
import CRLogo from '../components/CRLogo.js';
import LogoAnimation from '../components/CRLogo.js';

// Creates the About page for the website.
function About() {
  const isMobile = useContext(MobileContext);
  //margin top for "Who are we?"
  const [mtWAW, setMtWAW] = useState("0%");

  useEffect(() => {
    const handleMargin = () => {
      const width = window.innerWidth;
      console.log("ergrege", width);
      if (width < 800) setMtWAW("0vh")
      else if (width < 900) setMtWAW("10vh")
      else if (width < 1200) setMtWAW("0vh")
      else if (width < 1300) setMtWAW("7%")
      else setMtWAW("10%")
    };

    handleMargin();

    window.addEventListener('resize', handleMargin);

    return () => window.removeEventListener('resize', handleMargin);
  }, [])

  return (
    <Box>
      {/* CRCircuit as background */}
      <Box sx={{
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        //backgroundColor: 'yellow'
      }}>
        <Box > {/* Header contents */}
          {/* crc animated logo*/}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // horizontal center
              alignItems: 'center',     // vertical center
              width: '100%',
              height: isMobile ? '50vh' : '90vh'
            }}
          >
            <LogoAnimation />

              {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
            <Typography
              variant={isMobile ? "mobileH2" : "desktopH2"}
              mt={isMobile ? '-20%' : '-15%'} //negative margin to overlap with logo
              sx={{
                top: '50%',
                left: '50%',
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
                transform: 'translate(0, 50%)'
              }}>
              We. Build. Robots.
            </Typography>
          </Box>
          
        
        </Box>

        <Box sx={{ mx: isMobile ? '8%' : '15%', mt: mtWAW, mb: '10%' }}>
          <Typography variant={isMobile ? "mobileH2" : "desktopH2"} display="block" align="left">
            Who are we?
          </Typography>
          <Typography variant={isMobile ? "mobileBody" : "desktopBody"} display="block" align="left">
            We&apos;re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those
            featured on the TV show Battlebots. Each year, our Sportsman and Kinetic subteams build two 12lb mechanical robots,
            while our Autonomous team builds a 3lb bot with AI based functionality. Our Marketing subteam keeps the team funded,
            maintains our website and social media, along with merch, trading cards, and more.
          </Typography>
          {/* stats box */}
          <Box height="30%" sx={{ mt: isMobile ? '20%' : '12%', mx: 'auto', mb: isMobile ? '10%' : '2%' }}>
            {/* entire stats */}
            {isMobile ? (
              // Mobile layout: 2×2 grid
              <Stack direction="column" spacing={3} sx={{ alignItems: 'center' }}>
                {/* First row: members and majors */}
                <Stack direction="row" spacing={5} sx={{ width: '100%', justifyContent: 'center' }}>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant={"mobileH2"}>40+</Typography>
                    <Typography variant={"mobileH3"}>members</Typography>
                  </Stack>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant={"mobileH2"}>30+</Typography>
                    <Typography variant={"mobileH3"}>majors</Typography>
                  </Stack>
                </Stack>

                {/* Second row: colleges and years */}
                <Stack direction="row" spacing={5} sx={{ width: '100%', justifyContent: 'center' }}>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant={"mobileH2"}>5+</Typography>
                    <Typography variant={"mobileH3"}>colleges</Typography>
                  </Stack>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant={"mobileH2"}>6+</Typography>
                    <Typography variant={"mobileH3"}>years</Typography>
                  </Stack>
                </Stack>
              </Stack>
            ) : (
              // Desktop layout: single row
              <Stack direction="row" spacing="17%">
                <Stack>
                  <Typography variant="desktopH3">40+</Typography>
                  <Typography variant="desktopH3">members</Typography>
                </Stack>
                <Stack>
                  <Typography variant="desktopH3">30+</Typography>
                  <Typography variant="desktopH3">majors</Typography>
                </Stack>
                <Stack>
                  <Typography variant="desktopH3">5+</Typography>
                  <Typography variant="desktopH3">colleges</Typography>
                </Stack>
                <Stack>
                  <Typography variant="desktopH3">6+</Typography>
                  <Typography variant="desktopH3">years</Typography>
                </Stack>
              </Stack>
            )}
          </Box>
        </Box>
      </Box>

      {/* Rest of page, separate from rest because background image is too small */}
      <Box sx={{ mx: isMobile ? '8%' : '15%', mt: isMobile ? '20%' : '0%', mb: isMobile ? '20%' : '10%' }}>
        {/* "About Us." YouTube video embed */}
        <div style={{ 
          width: '100%', 
          margin: '0 auto', 
          aspectRatio: '16 / 9' 
        }}>
        <iframe
          style={{ border: 'none' }} 
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5D4foI4BLac" // Link to About Us YouTube video
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

        {/* What do we value title and paragraph */}
        <Typography variant={isMobile ? 'mobileH2' : "desktopH2"} display="block" align="left" mt={isMobile ? '20%' : '10%'}>
          What do we value?
        </Typography>

        <Typography align="left" variant={isMobile ? 'mobileBody' : "desktopBody"} display="block">
          We work towards establishing CRC as one of Cornell&apos;s premier environments, embodying technical excellence, start-up spirit, and strong camaraderie.
          At CRC, we prioritize building a passionate, diverse team eager to learn and collaborate, regardless of technical experience, and leverage our unique interdisciplinary skills to dominate the competition.
        </Typography>

      </Box>
      {/* Timeline */}
      <Box sx={{ mb: '2%' }}>
        <Typography variant={isMobile ? 'mobileH2' : "desktopH2"}>
          OUR HISTORY
        </Typography>
      </Box>
      <Box marginLeft="0%" sx={{ width: "98vw", mb: isMobile ? '15%' : '5%' }}>
        <Carousel numCells={10} />
      </Box>
    </Box >

  );
}

export default About