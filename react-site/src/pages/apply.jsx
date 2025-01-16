import { Typography, Box } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";

/** Apply creates the Apply page for the website. */
export default function Apply() {
  return (
    <Box>
    <Box position="relative" display="inline-block">
      <img src={apply} style={{ width: '100%', height: 'auto' }} />
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Josefin Sans',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' // Add drop shadow
        }}
      >
        JOIN US
      </Typography>
    </Box>
    </Box>
  );
}
