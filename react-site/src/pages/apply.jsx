import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import join01 from "../assets/background-pictures/join-01-background.png";
import join02 from "../assets/background-pictures/join-02-background.png";
import join03 from "../assets/background-pictures/join-03-background.png";
import join04 from "../assets/background-pictures/join-04-background.png";
/** Apply creates the Apply page for the website. */
export default function Apply() {

  //list of all events in the recruitment timeline
  const event = [
    { name: 'Project Team Fest', date: '6/9/25' },
    { name: 'Clubfest', date: '6/10/25' },
    { name: 'Info Session 1', date: '6/11/25' },
    { name: 'Info Session 2', date: '6/12/25' },
    { name: 'Info Session 3', date: '6/13/25' },
    { name: 'Applications Due', date: '11.59PM  7/1/25' }
  ];

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

      <Box padding={10} textAlign={"center"}>
        <Typography
          // Our applications...h3 writing
          variant="h2"
          sx={{
            color: 'white',
            mb: 2
          }}>
          Our applications for Fall 2024 are open!
        </Typography>

        <Typography
          // Our applications...h3 writing
          variant="h2"
          sx={{
            color: '#B21D1D',
            fontWeight: 'bold'
          }}>
          All applications are due October 17th, 11:59PM
        </Typography>
      </Box>


      <Typography
        // Recruitment Timeline h1
        variant="h1"
        sx={{
          textAlign: 'center',
          color: 'white',
          mb: 0
          // add margins when text size smaller
        }}>
        RECRUITMENT TIMELINE
      </Typography>


      {/*Contains geometric timeline*/}
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
        }}
      >
        {/*Must wrap line component in SVG (Scalable Vector Graphics): good for geometric elements like lines and shapes*/}
        <svg width="100%" height="20%">

          <line
            x1="10%" //coordinates of the line: 10% from the left
            x2="85%" //TODO: change, last element is slightly off
            y1="10%" //set 10% from top of svg component
            y2="10%" 
            stroke={"white"}
            stroke-width="5"
          >
          </line>

          {event.map(({ name, date }, index) => {
            const xPos = [`${10 + index * 15}%`]; //increments x position to the right according to index

            return (
              <g> {/*groups shapes tgt, since all returned elements within a map must be wrapped in a single element*/}
                <circle
                  cx={xPos}
                  cy="10%" //same as line -> falls on line
                  r={10} //radius
                  fill="white" //color
                >
                </circle>

                {/*Note: svg components do support attributes that Material-UI components usually use (e.g. variant, color)*/}
                <text key={index} fill="white" fontFamily='Josefin Sans, sans-serif' fontSize={25} y="50%" 
                  textAnchor="middle" //horizontally centered
                >
                  {/*use tspan to separate texts, since svg does not support new-line*/}
                  <tspan x={xPos} >
                    {name}
                  </tspan>
                  <tspan x={xPos} 
                    dy="2rem" //changes y position of this tspan relative to tspan above
                  > 
                    {date}
                  </tspan>
                </text>
              </g>
            );
          })}

        </svg>


      </Box>

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
        <Box sx={{ backgroundColor: 'purple' }}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
          {/* next few boxes contain stuff for making timeline */}
        </Box>
        <Box sx={{ backgroundColor: 'purple' }}>
          {/* box */}
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: 'purple' }}>
          {/* box */}
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: 'purple' }}>
          {/* next few boxes contain stuff for making timeline */}
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: 'purple' }}>
          {/* box */}
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: 'purple' }}>
          {/* box */}
          <Typography variant="h4" sx={{ color: "white" }}>
            Hi
          </Typography>
        </Box>
      </Box>
      <Typography variant="h3" sx={{ color: "white" }}>
        NEW MEMBER EXPERIENCE
      </Typography>


      <Box sx={{
        // timeline container
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'pink',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        // gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
        // gap: '40px 2px',
        // margin: '40px 120px',
        width: '1000px',
        height: '600px',
        margin: '20px auto',
        // padding: '0px',
        lineHeight: '1.2',
        padding: "10px",


        // backgroundImage: `url(${apply})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'top',
        // backgroundRepeat: 'no-repeat',
        // position: 'relative',
      }}>
        <Box
          // container for 01020304
          sx={{
            width: '90%',
            height: 'auto',
            backgroundImage: `url(${join01})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-end",
              textAlign: "right",
              marginTop: "50px",
              marginRight: "20px",
            }}
          >
            INFO SESSIONS
          </Typography>
          <Typography variant="body1"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-start",
              textAlign: "left",
              marginBottom: "10px",
              marginRight: "60px",
              marginLeft: "10px",
              fontSize: "15pt",
              // marginBottom: "10px",
            }}
          >
            We highly encourage you to meet our team at an info session! If you cannot make any sessions you may contact us, but we strongly recommend attending an info session to meet the team directly.
          </Typography>
        </Box>
        <Box
          // container for 01020304
          sx={{
            width: '90%',
            height: 'auto',
            backgroundImage: `url(${join02})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-end",
              textAlign: "right",
              marginTop: "50px",
              marginRight: "20px",
            }}
          >
            APPLICATIONS DUE
          </Typography>
          <Typography variant="body1"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-start",
              textAlign: "left",
              marginBottom: "10px",
              marginRight: "60px",
              marginLeft: "10px",
              fontSize: "15pt",
              // marginBottom: "10px",
            }}
          >
            All applications (Freshman, Upperclassmen, and Transfer) are due October 17th, 11:59pm
          </Typography>
        </Box>
        <Box
          // container for 01020304
          sx={{
            width: '90%',
            height: 'auto',
            backgroundImage: `url(${join03})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-end",
              textAlign: "right",
              marginTop: "50px",
              marginRight: "20px",
            }}
          >
            GROUP INTERVIEW
          </Typography>
          <Typography variant="body1"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-start",
              textAlign: "left",
              marginBottom: "10px",
              marginRight: "60px",
              marginLeft: "10px",
              fontSize: "15pt",
              // marginBottom: "10px",
            }}
          >
            Work with other applicants (and more importantly, have fun!) in our group interview
          </Typography>
        </Box>
        <Box
          // container for 01020304
          sx={{
            width: '90%',
            height: 'auto',
            backgroundImage: `url(${join04})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-end",
              textAlign: "right",
              marginTop: "50px",
              marginRight: "20px",
            }}
          >
            INDIVIDUAL INTERVIEW
          </Typography>
          <Typography variant="body1"
            sx={{
              // margin: "auto",
              // alignSelf: "flex-end",
              alignSelf: "flex-start",
              textAlign: "left",
              marginBottom: "10px",
              marginRight: "60px",
              marginLeft: "10px",
              fontSize: "15pt",
              // marginBottom: "10px",
            }}
          >
            We want to see your interest and fit for your chosen subteam, but no prior experience is necessary.
          </Typography>
        </Box>

      </Box>










      <Box sx={{ backgroundColor: 'orange' }}>
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
