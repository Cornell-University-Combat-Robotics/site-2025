import { Box, Typography } from "@mui/material";
import team from "../assets/team-photo-hearts.png";

export default function Sponsors() {
  return (
    <Box>
      <Box position="relative" display="inline-block">
        <img src={team} style={{ width: '100%', height: 'auto' }} />
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Josefin Sans',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}
        >
          SUPPORT THE TEAM
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', mt: 5 }}>
        OUR SPONSORS
      </Typography>
      <Typography sx={{ fontFamily: 'Josefin Sans', mt: 2 }}>
        As a new robotics team, we rely heavily on raising money from sponsorships and donations and we'd be glad to hear from you! Read more about our history and the benefits of supporting our team outlined in the Sponsorship Packet. You can also directly donate through Cornell above, please specify that the donation is for Combat Robotics at Cornell. We are a 501(c)(3) organization and all donations are tax deductible. Reach out to us directly if you're interested in making a specific arrangement not outlined in the sponsorship packet above.
      </Typography>
    </Box>
  );
}
