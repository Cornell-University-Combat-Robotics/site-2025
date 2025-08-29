import { Typography, Stack, Box } from "@mui/material";
import background from "../assets/background-pictures/accessibilitybackground.png";

export default function Accessibility() {
  return (
    <Box sx={{
      width: '100%',
      height: 'auto',
      backgroundImage: `url(${background})`,  // Your image URL
      backgroundSize: 'cover',      // Ensure the image covers the area
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      <Stack>
        <Typography variant="h2" sx={{ fontSize: '3rem', marginTop: '7%' }}>
          ACCESSIBILITY
        </Typography>
        <Typography sx={{ padding: '5%', textAlign: 'left', fontSize: '1.27rem', lineHeight: '1.3rem' }}>
          Combat Robotics at Cornell, and Cornell University, are committed to making our websites accessible to everyone, including individuals with disabilities. To report a problem or to request an accommodation to access online materials, information, resources, and/or services, please contact ur-accessibility@cornell.edu. In your message, include the website address or URL and the specific problems you have encountered. You will receive a reply as soon as possible.
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '3rem' }}>
          DIVERSITY AND INCLUSION
        </Typography>
        <Typography sx={{ padding: '5%', textAlign: 'left', fontSize: '1.27rem', lineHeight: '1.3rem' }}>
          At Cornell Combat Robotics at Cornell, we value diversity in all its forms. We pledge to continually educate ourselves and our members on issues of diversity, equity, and inclusion, and to actively confront and address any instances of discrimination, bias, or exclusion within our club. Creating a truly inclusive community requires ongoing effort and we are committed to fostering a culture of belonging where everyone can feel respected and empowered.
        </Typography>
      </Stack>
    </Box>
  );
}
