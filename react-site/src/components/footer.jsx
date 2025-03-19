import { Box, Stack, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      id="footer-wrapper"
      sx={{
        width: "100%",
        bottom: "0px",
        display: "flex",
        height: "2.5%",
        minHeight: "50px",
        padding: "6px 0",
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
            href="https://www.facebook.com/cucombatrobotics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/bigred-hacks-698107269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Cornell-University-Combat-Robotics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: "25px" }} />
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

      <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%" mr="2%" flexDirection="row" gap="0.5%">
        <Typography variant="body2" color="white" >
          This organization is a registered student organization of Cornell University.
        </Typography>
        <a href="/accessibility">
          <Typography variant="body2" color="white" sx={{ textDecoration: 'underline' }}>
            Accessibility Assistance
          </Typography>
        </a>
      </Box>

    </Box>
  );
};

export default Footer;
