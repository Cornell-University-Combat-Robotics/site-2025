import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider} from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
      <Typography variant="h3" sx={{color: "white"}}>
        NEW MEMBER EXPERIENCE
      </Typography>
      <Box sx={{
        // timeline container
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink',
          // backgroundImage: `url(${apply})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'top',
          // backgroundRepeat: 'no-repeat',
          // position: 'relative',
      }}>
        {/* timeline sections container */}
        <Box sx={{backgroundColor: 'blue'}}>
          <Typography variant="h4" sx={{color:"white"}}>
            Title 1
          </Typography>
          <Typography variant="p" sx={{color:"white"}}>
            Para 1
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
        <Box sx={{backgroundColor: 'blue'}}>
          <Typography variant="h4" sx={{color:"white"}}>
            Title 2
          </Typography>
          <Typography variant="p" sx={{color:"white"}}>
            Para 2
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
        <Box sx={{backgroundColor: 'blue'}}>
          <Typography variant="h4" sx={{color:"white"}}>
            Title 3
          </Typography>
          <Typography variant="p" sx={{color:"white"}}>
            Para 3
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
        <Box sx={{backgroundColor: 'blue'}}>
          <Typography variant="h4" sx={{color:"white"}}>
            Title 4
          </Typography>
          <Typography variant="p" sx={{color:"white"}}>
            Para 4
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
      </Box>
      <Box sx={{backgroundColor: 'orange'}}>
        {/* above encompasses all slider timeline data */}
        <Box>
          <Box>
            <Typography>
              Stick
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <img></img>
            </Box>
          </Box>
          <Box>
            <Typography>h2</Typography>
            <Typography>h3</Typography>
            <Typography>p</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        backgroundColor="#63080A"
        mt={5}
        sx={{
          color: 'white',
          paddingY: '40px',
          paddingX: '20px',
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <Box width="100%" justifyContent="center" alignItems="center">
          <Typography variant="h4" align="center" sx={{ fontFamily: 'Josefin Sans', mb: 4 }}>
            FAQ
          </Typography>

          <Box width="75%" justifyContent="center" alignItems="center" mx="auto">
            {/* Accordion Items */}
            <>
              <Accordion
                sx={{
                  backgroundColor: '#63080A',
                  color: 'white',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                    I am a company, how can I sponsor?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Via mail by filling out the donation form listed on the Sponsorship Packet above, or electronically donate through Cornell (shown above), or donate on Giving Day (shown above). Please email us to notify you wish to become a sponsor.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ backgroundColor: 'white', my: 2 }} />

              <Accordion
                sx={{
                  backgroundColor: '#63080A',
                  color: 'white',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                    I am an individual (not a company), how can I donate?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    You can donate through the same platforms a company would: via mail by filling out the donation form listed on the Sponsorship Packet, or electronically donate through Cornell, or donate on Giving Day.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ backgroundColor: 'white', my: 2 }} />

              <Accordion
                sx={{
                  backgroundColor: '#63080A',
                  color: 'white',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                    I am a company and want to renew or update my sponsorship packet, what is the process?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donate through the same portal listed above, and email us to notify you wish to renew or update your sponsorship.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ backgroundColor: 'white', my: 2 }} />

              <Accordion
                sx={{
                  backgroundColor: '#63080A',
                  color: 'white',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                    I am a company and would like to make an arrangement not listed on the Sponsorship Packet, what should I do?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Email us and we would be happy to make arrangements!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ backgroundColor: 'white', my: 2 }} />
            </>
          </Box>

          {/* Footer */}
          <Typography
            align="center"
            sx={{
              fontStyle: 'italic',
              fontFamily: 'Josefin Sans',
              mt: 4,
              color: 'white',
            }}
          >
            If you have any further questions, please email us at combatrobotics@cornell.edu.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
