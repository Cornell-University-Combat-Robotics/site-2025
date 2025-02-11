import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/crc-logo-cropped.png";
import background from "../assets/background-pictures/crcbackground.png";
import team_photo from "../assets/background-pictures/team-photo-hearts.png";
import Carousel from "../components/Carousel";
import panel1 from "../assets/home-timeline/panel-3.jpg";
// DO NOT DELETE:: import background2 from "../assets/background-pictures/crcircuit.png"


// Creates the About page for the website.
function About() {
  return (
    <Box>
      {/* CRCircuit as background */}
      <Box sx={{
        width: '100%',
        backgroundImage: `url(${background})`,  // Your image URL
        backgroundSize: 'cover',      // Ensure the image covers the area
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        <Box> {/* Header contents */}
          {/* crc logo*/}
          <img src={logo} style={{
            maxWidth: '35%',
            height: 'auto',
            top: '50%',
            left: '50%',
            marginTop: '15%',
          }}
          />

          {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
          <Typography
            variant="h2"
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
        <Box sx={{ mx: '15%', mt: '7%' }}>
          <Typography variant="h2" align="left"
            sx={{
              fontFamily: 'Josefin Sans',
            }}>
            Who are we?
          </Typography>
          <Typography align="left">
            We&apos;re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those
            featured on the TV show Battlebots. Each year, our Sportsman and Kinetic subteams build two 12lb mechanical robots,
            while our Autonomous team builds a 3lb bot with AI based functionality. Our Marketing subteam keeps the team funded,
            maintains our website and social media, along with merch, trading cards, and more.
          </Typography>
          {/* stats box */}
          <Box height="30%" sx={{ mt: '10%', mx: '15%' }}>
            {/* entire stats */}
            <Stack direction="row" spacing="23%">
              {/* individual stat */}
              <Stack>
                <Typography variant="h3">40+</Typography>
                <Typography>members</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3">30+</Typography>
                <Typography>majors</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3">5+</Typography>
                <Typography>colleges</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3">6+</Typography>
                <Typography>years</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* video, temporarily set as our team photo */}
          <img src={team_photo} style={{ maxWidth: '70%', height: 'auto', transform: 'translate(0, 30%)' }} />

        </Box>
      </Box>

      {/* Rest of page, separate from rest because background image is too small */}
      <Box sx={{ mx: '15%', my: '15%' }}>
        {/* What do we value title and paragraph */}
        <Typography variant="h2" align="left" >
          What do we value?
        </Typography>

        <Typography align="left">
          We work towards establishing CRC as one of Cornell&apos;s premier environments, embodying technical excellence, start-up spirit, and strong camaraderie.
          At CRC, we prioritize building a passionate, diverse team eager to learn and collaborate, regardless of technical experience, and leverage our unique interdisciplinary skills to dominate the competition.
        </Typography>

        {/* our journey timeline */}
        <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: 'Josefin Sans', my: '15%' }}>
          OUR JOURNEY
        </Typography>

        {/* Timeline */}
        <Box >
          <Carousel image={panel1} numCells={10} />
        </Box>

      </Box>

    </Box >
  );
}

export default About

{/* Removed Join Us and Sponsor Us Boxes*/ }
{/* <Box height="80px" />
<Box>
  <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans' }}>
    You can shape the future of our team!
  </Typography>
</Box>

<Stack direction="row" sx={{ gap: 10, padding: 8 }} >
  <RedBox title="SUPPORT US" text="We're always looking to form valuable partnerships with companies and sponsors, and rely heavily on individual donations to keep our team running." 
    word="SPONSOR!" link="/sponsors" />
  <RedBox title="JOIN US" text="Interested in joining our unique team? We'd love to meet you during our application season, regardless of major or prior experience!"
    word="APPLY!" link="/apply" />
</Stack> */}