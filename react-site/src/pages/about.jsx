import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import logo from "../assets/crc-logo-cropped.png";
import background from "../assets/background-pictures/crcbackground.png";
import team_photo from "../assets/background-pictures/team-photo-hearts.png";
import Carousel from "../components/Carousel";

// Creates the About page for the website.
function About() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

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
            marginTop: isMobile ? '25%' : '15%',
          }}
          />

          {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
          <Typography
            variant="h3"
            sx={{
              fontStyle: "italic",
              top: '50%',
              left: '50%',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
              transform: 'translate(0, 50%)'
            }}>
            We. Build. Robots.
          </Typography>
        </Box>

        {/* Page contents */}
        <Box sx={{ mx: isMobile ? '8%' : '15%', mt: isMobile ? '10%' : '7%', mb: '10%' }}>
          <Typography variant={isMobile ? "h5" : "h2"} align="left"
            sx={{
              fontFamily: 'Josefin Sans',
            }}>
            Who are we?
          </Typography>
          <Typography align="left" sx={{ fontSize: isMobile ? '1.1rem' : 'inherit' }}>
            We&apos;re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those
            featured on the TV show Battlebots. Each year, our Sportsman and Kinetic subteams build two 12lb mechanical robots,
            while our Autonomous team builds a 3lb bot with AI based functionality. Our Marketing subteam keeps the team funded,
            maintains our website and social media, along with merch, trading cards, and more.
          </Typography>
          {/* stats box */}
          <Box height="30%" sx={{ mt: '10%', mx: 'auto', mb: '5%' }}>
            {/* entire stats */}
            {isMobile ? (
              // Mobile layout: 2×2 grid
              <Stack direction="column" spacing={3} sx={{ alignItems: 'center' }}>
                {/* First row: members and majors */}
                <Stack direction="row" spacing={5} sx={{ width: '100%', justifyContent: 'center' }}>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant="h3">40+</Typography>
                    <Typography>members</Typography>
                  </Stack>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant="h3">30+</Typography>
                    <Typography>majors</Typography>
                  </Stack>
                </Stack>

                {/* Second row: colleges and years */}
                <Stack direction="row" spacing={5} sx={{ width: '100%', justifyContent: 'center' }}>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant="h3">5+</Typography>
                    <Typography>colleges</Typography>
                  </Stack>
                  <Stack sx={{ alignItems: 'center' }}>
                    <Typography variant="h3">6+</Typography>
                    <Typography>years</Typography>
                  </Stack>
                </Stack>
              </Stack>
            ) : (
              // Desktop layout: single row
              <Stack direction="row" spacing="23%">
                <Stack>
                  <Typography variant="h2">40+</Typography>
                  <Typography>members</Typography>
                </Stack>
                <Stack>
                  <Typography variant="h2">30+</Typography>
                  <Typography>majors</Typography>
                </Stack>
                <Stack>
                  <Typography variant="h2">5+</Typography>
                  <Typography>colleges</Typography>
                </Stack>
                <Stack>
                  <Typography variant="h2">6+</Typography>
                  <Typography>years</Typography>
                </Stack>
              </Stack>
            )}
          </Box>

          {/* video, temporarily set as our team photo */}
          <img src={team_photo} style={{ maxWidth: isMobile ? '95%' : '70%', height: 'auto', transform: isMobile ? 'translate(0, 15%)' : 'translate(0, 30%)', display: 'block', margin: '0 auto' }} />
        </Box>
      </Box>

      {/* Rest of page, separate from rest because background image is too small */}
      <Box sx={{ mx: isMobile ? '8%' : '15%', mt: isMobile ? '20%' : '15%', mb: '7%' }}>
        {/* What do we value title and paragraph */}
        <Typography variant={isMobile ? 'h3' : "h2"} align="left" >
          What do we value?
        </Typography>

        <Typography align="left" sx={{ fontSize: isMobile ? '1.1rem' : 'inherit' }}>
          We work towards establishing CRC as one of Cornell&apos;s premier environments, embodying technical excellence, start-up spirit, and strong camaraderie.
          At CRC, we prioritize building a passionate, diverse team eager to learn and collaborate, regardless of technical experience, and leverage our unique interdisciplinary skills to dominate the competition.
        </Typography>

      </Box>
      {/* Timeline */}
      <Box sx={{ mb: '2%' }}>
        <Typography variant={isMobile ? 'h3' : "h2"}>
          OUR HISTORY
        </Typography>
      </Box>
      <Box marginLeft="0%" sx={{ width: "98vw", }}>
        <Carousel numCells={10} />
      </Box>
    </Box >

  );
}

export default About