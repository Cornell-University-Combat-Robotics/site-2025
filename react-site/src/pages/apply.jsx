import { Typography, Box } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";

/** Apply creates the Apply page for the website. */
export default function Apply() {
  return (
    <Box sx={{}}>
      {/* above is body of site */}
      <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${apply})`,  // Your image URL
        backgroundSize: 'cover',      // Ensure the image covers the area
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            transform: 'translate(0,15%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}>
          JOIN US!
        </Typography>
      </Box>
        <Typography 
        // Our applications...h3 writing
          variant="h3"
          sx={{
            textAlign: 'center',
            color: 'white',
            margin: '1em 2em'
          }}>
          Our applications for Fall 2024 are open! All applications are due October 17th, 11:59PM
        </Typography>
        <Typography 
        // Recruitment Timeline h1
          variant="h1"
          sx={{
            textAlign: 'center',
            color: 'white',
            // add margins when text size smaller
          }}>
          RECRUITMENT TIMELINE
        </Typography>
      <Box sx={{
        // timeline container
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lime',
          // backgroundImage: `url(${apply})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'top',
          // backgroundRepeat: 'no-repeat',
          // position: 'relative',
      }}>
        {/* timeline sections container */}
        <Box sx={{backgroundColor: 'purple'}}>
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
        <Box sx={{backgroundColor: 'purple'}}>
          {/* box */}
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
        </Box>
        <Box sx={{backgroundColor: 'purple'}}>
          {/* box */}
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
        </Box>
        <Box sx={{backgroundColor: 'purple'}}>
          {/* next few boxes contain stuff for making timeline */}
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
        </Box>
        <Box sx={{backgroundColor: 'purple'}}>
          {/* box */}
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
        </Box>
        <Box sx={{backgroundColor: 'purple'}}>
          {/* box */}
          <Typography variant="h4" sx={{color:"white"}}>
            Hi
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
