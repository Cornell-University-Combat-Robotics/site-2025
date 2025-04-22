import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/crc-logo-cropped.png";
import background from "../assets/background-pictures/crcbackground.png";
import team_photo from "../assets/background-pictures/team-photo-hearts.png";
import Carousel from "../components/Carousel";

// Creates the About page for the website.
function About() {
  const isMobile = useContext(MobileContext);

  return (
    <Box >
      {/* CRCircuit as background */}
      <Box sx={{
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        <Box> {/* Header contents */}
          {/* crc logo*/}
          <img src={logo} style={{
            maxWidth: isMobile ? '70%' : '35%', // Keep logo relatively large on mobile
            height: 'auto',
            top: '50%',
            left: '50%',
            marginTop: isMobile ? '40%' : '18%',
          }}
          />

          {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
          <Typography
            variant={isMobile ? "mobileH2" : "desktopH2"}
            display="block"
            mb={isMobile ? '20%' : '18%'}
            sx={{
              top: '50%',
              left: '50%',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
              transform: 'translate(0, 50%)'
            }}>
            We. Build. Robots.
          </Typography>
        </Box>

        {/* Page contents */}
        <Box sx={{ mx: isMobile ? '8%' : '15%', mb: '10%' }}>
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

          {/* video, temporarily set as our team photo */}
          <img src={team_photo} style={{ maxWidth: isMobile ? '95%' : '70%', height: 'auto', transform: 'translate(0, 30%)', display: 'block', margin: '0 auto' }} />
        </Box>
      </Box>

      {/* Rest of page, separate from rest because background image is too small */}
      <Box sx={{ mx: isMobile ? '8%' : '15%', mt: isMobile ? '30%' : '18%', mb: isMobile ? '20%' : '10%'}}>
        {/* What do we value title and paragraph */}
        <Typography variant={isMobile ? 'mobileH2' : "desktopH2"} display="block" align="left" >
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