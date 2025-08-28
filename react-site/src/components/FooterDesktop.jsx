import { Box, Stack, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      id="footer-wrapper"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        bottom: "0px",
        height: "2.5%",
        minHeight: "50px",
        gap: '4%',
        backgroundColor: "#b11c1c",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "2px",
          flexDirection: "row",
          ml: "10px",
        }}
      >
        {/* Not necessary, but creating a FooterIcon component so we don't have to copy paste everything here would be nice. */}
        <IconButton aria-label="Email">
          <a href="mailto:combatrobotics@cornell.edu">
            <EmailIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a
            href="https://www.instagram.com/combatroboticscornell/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Facebook">
          <a
            href="https://www.facebook.com/combatroboticscornell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a
            href="https://www.linkedin.com/company/combat-robotics-at-cornell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="YouTube">
          <a
            href="https://www.youtube.com/channel/UCRoomTf0RRs6DNDzucEKDMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
      </Stack>

      <Typography width='50%' variant="body2" color="white" fontFamily='Josefin Sans, sans-serif' fontSize={17}>
        This organization is a registered student organization of Cornell University.
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment">
          <Typography variant="body2" color="white" fontFamily='Josefin Sans, sans-serif' fontSize={17} sx={{ textDecoration: 'underline', textAlign: 'right' }}>
            Equal Education and Employment
          </Typography>
        </a>
        <a href="/accessibility">
          <Typography variant="body2" color="white" fontFamily='Josefin Sans, sans-serif' fontSize={17} sx={{ textDecoration: 'underline', textAlign: 'right' }}>
            Accessibility Assistance
          </Typography>
        </a>
      </Box>

    </Box >
  );
};

export default Footer;
