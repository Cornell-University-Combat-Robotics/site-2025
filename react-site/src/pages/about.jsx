import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/crc-logo-cropped.png";
import team_photo from "../assets/team-photo.png";

function About() {
  return (
    <Box>
      <img src={logo} style={{ maxWidth: '60%', height: 'auto' }} />
      <Box ml="50px">
        <Typography variant="h2" align="left" fontWeight="bold" sx={{ fontFamily: 'Josefin Sans' }}>
          Who are we?
        </Typography>
        <Typography align="left">
          We&apos;re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those featured on the TV show Battlebots.
          Each year, we build two 12lb mechanical bots and one 3lb battlebot with AI based functionality.
        </Typography>
        <Box height="20px" />
        <Stack direction="row" spacing="220px">
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
      <Box height="40px" />
      <Box ml="50px">
        <Typography variant="h2" align="left" fontWeight="bold" sx={{ fontFamily: 'Josefin Sans' }}>
          What do we value?
        </Typography>
        <Typography align="left">
          We work towards establishing CRC as one of Cornell&apos;s premier environments, embodying technical excellence, start-up spirit, and strong camaraderie.
          At CRC, we prioritize building a passionate, diverse team eager to learn and collaborate, regardless of technical experience, and leverage our unique interdisciplinary skills to dominate the competition.
        </Typography>
        <Box height="40px" />
      </Box>
      <img src={team_photo} style={{ maxWidth: '70%', height: 'auto' }} />
      <Box height="80px" />

      <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: 'Josefin Sans' }}>
        OUR JOURNEY
      </Typography>

      <Box height="80px" />
      <Box>
        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans' }}>
          You can shape the future of our team!
        </Typography>
      </Box>
    </Box>
  );
}

export default About