import { Box } from "@mui/material";
import logo from "../assets/crc-logo.png";

function About() {
  return (
    <Box sx={{ flex: 1 }}>
      {/* TODO: Make version of logo with white text */}
      <img
        src={logo}
      />
    </Box>
  );
}

export default About