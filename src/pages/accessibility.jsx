import { Typography, Stack, Box } from "@mui/material";
import background from "../assets/background-pictures/accessibilitybackground.png";
import { useTheme } from '@mui/material/styles';

export default function Accessibility() {

  const theme = useTheme();

  return (
    <Box sx={{
      width: 'auto',
      height: 'auto',
      backgroundImage: `url(${background})`,  // Your image URL
      backgroundSize: 'cover',      // Ensure the image covers the area
      backgroundPosition: 'top',
      position: 'relative',
    }}>
      <Stack>
        <Typography sx={{
          marginTop: '7%',
          fontSize: {
            xs: theme.typography.mobileH2.fontSize,
            md: theme.typography.desktopH2.fontSize,
          },
          fontFamily: theme.typography.mobileBody.fontFamily
        }}>
          ACCESSIBILITY
        </Typography>
        <Typography sx={{
          padding: '5%', textAlign: 'left', mb: '5vh',
          fontSize: {
            xs: theme.typography.mobileBody.fontSize,
            md: theme.typography.desktopBody.fontSize,
          },
          fontFamily: theme.typography.mobileBody.fontFamily
        }}>
          Combat Robotics at Cornell, and Cornell University, are committed to making our websites accessible to everyone, including individuals with disabilities. To report a problem or to request an accommodation to access online materials, information, resources, and/or services, please contact ur-accessibility@cornell.edu. In your message, include the website address or URL and the specific problems you have encountered. You will receive a reply as soon as possible.
        </Typography>
        <Typography sx={{
          fontSize: {
            xs: theme.typography.mobileH2.fontSize,
            md: theme.typography.desktopH2.fontSize,
          },
          fontFamily: theme.typography.mobileBody.fontFamily
        }}>
          DIVERSITY AND INCLUSION
        </Typography>
        <Typography sx={{
          padding: '5%', textAlign: 'left',
          fontSize: {
            xs: theme.typography.mobileBody.fontSize,
            md: theme.typography.desktopBody.fontSize,
          },
          fontFamily: theme.typography.mobileBody.fontFamily
        }}>
          At Cornell Combat Robotics at Cornell, we value diversity in all its forms. We pledge to continually educate ourselves and our members on issues of diversity, equity, and inclusion, and to actively confront and address any instances of discrimination, bias, or exclusion within our club. Creating a truly inclusive community requires ongoing effort and we are committed to fostering a culture of belonging where everyone can feel respected and empowered.
        </Typography>
      </Stack>
    </Box>
  );
}
