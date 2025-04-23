import { Box, Button, Typography, Grid2, Link, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import team from "../assets/background-pictures/team-photo-hearts.png";
import pdfFile from '../assets/2023-24_packet.pdf';
import FAQ from "../components/FAQ.tsx";
import { LinkToPage } from "../components/FAQ.tsx";

/** Sponsors creates the Sponsors page of the website. */
export default function Sponsors() {

  const cornellDonate = "https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&cid=27217&dids=5398&sort=1&bledit=1"
  const givingDay = "https://givingday.cornell.edu/campaigns/combat-robotics"

  /** list of all FAQ questions & answers */
  const questions = [
    "I am a company, how can I sponsor?",
    "I am an individual (not a company), how can I donate?",
    "I am a company and want to renew or update my sponsorship packet, what is the process?",
    "I am a company and would like to make an arrangement not listed on the Sponsorship Packet, what should I do?"
  ];

  //To add hyperlink in middle of text by using <Link> component, must wrap in <p>
  const answers =
    [
      <p>
        Via mail by filling out the donation form listed on the {LinkToPage
          ({ id: pdfFile, text: "Sponsorship Packet" })} above, or electronically donate through {LinkToPage
            ({ id: cornellDonate, text: "Cornell" })} (shown above), or donate on {LinkToPage
              ({ id: givingDay, text: "Giving Day" })} (shown above). Please email us to notify you wish to become a sponsor.
      </p>,
      <p>
        You can donate through the same platforms a company would: via mail by filling out the donation form listed on the {LinkToPage
          ({ id: pdfFile, text: "Sponsorship Packet" })}, or electronically donate through {LinkToPage
            ({ id: cornellDonate, text: "Cornell" })}, or donate on {LinkToPage
              ({ id: givingDay, text: "Giving Day" })}.
      </p>,
      <p>
        Donate through the same {LinkToPage
          ({ id: pdfFile, text: "portal" })} listed above, and email us to notify you wish to renew or update your sponsorship.
      </p>
      ,
      <p>
        Email us and we would be happy to make arrangements!
      </p>
    ]

  return (
    <Box>
      <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${team})`,  // Your image URL
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
            fontSize: 'clamp(2rem, 10vw, 6rem)',
            maxWidth: '90%'
          }}>
          SUPPORT THE <br></br> TEAM
          {/* SUPPORT THE TEAM */}
        </Typography>
      </Box>

    <Box padding="0px 6%">

      <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', mt: 5 }} id="sponsor-box">
        OUR SPONSORS
      </Typography>
      {/*Three horizontal buttons for 3 actions users can do. Nested in a double 
      box. The inside box sets the width to 75% of screen. The outside box sets 
      the content inside (the inner box) to be center of screen horizontally. 
      Use hred within Button mui component to link the button. sx is the styling 
      details. &focus is for when the button is clicked (removing the blue border 
      when clicked. &hover is for making the text color white (don't change when
      button is not hovered over.*/}
      <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="40px">
        <Box display='flex' gap="20px" justifyContent="center" flexWrap="wrap" sx={{ flexDirection: 'row' }} >
          <Button href={pdfFile} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "100%", maxWidth:"330px", minWidth:"250px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:focus': { outline: 'none', }, '&:hover': { color: 'white', }, }}>VIEW OUR SPONSORSHIP PACKET</Button>
          <Button href={cornellDonate} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "100%", maxWidth:"330px", minWidth:"250px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:focus': { outline: 'none', }, '&:hover': { color: 'white', } }}>DONATE THROUGH CORNELL</Button>
          {/* <Button href={givingDay} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "330px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:focus': { outline: 'none', }, '&:hover': { color: 'white', } }}>DONATE THROUGH GIVING DAY</Button> */}
          {/* delete giving day button */}
        </Box>
      </Box>

      {/*The box component centers the content inside and sets them to stack vertically
      hence "column". The Typography is the text component, we have with to 75% of
      screen. */}
      <Box display='flex' justifyContent="center" alignItems="center" sx={{ flexDirection: 'column' }}>
        <Typography align='left' sx={{ fontFamily: 'Josefin Sans', my: 2 }}>
          As a new robotics team, we rely heavily on raising money from sponsorships and donations and we'd be glad to hear from you! Read more about our history and the benefits of supporting our team outlined in the Sponsorship Packet.
        </Typography>
        <Typography align='left' sx={{ fontFamily: 'Josefin Sans', my: 2 }}>
          You can also directly donate through Cornell above, please specify that the donation is for Combat Robotics at Cornell. We are a 501(c)(3) organization and all donations are tax deductible. Reach out to us directly if you're interested in making a specific arrangement not outlined in the sponsorship packet above.
        </Typography>
      </Box>



      {/* Below is better version of sponsor ribbons */}
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" paddingTop="20px" paddingBottom="20px">
        
        {/* Platinum */}
        <Box display="flex" flexDirection="row" marginBottom="40px" width="100%">
          <Box flex="0 1 40%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" sx={{backgroundColor:"#212D38"}}>
            <Box
              component="img"
              src={"/sponsors/crc_plat.png"}
              alt="Large Plat Logo"
              sx={{ width: '100%', height: 'auto', maxWidth: "300px", objectFit: "contain"}}
            />
            <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>PLATINUM</Typography>
          </Box>
          <Box display="flex" flex="1.5" flexWrap="wrap" borderRight="1.5rem solid cyan" sx={{backgroundColor:"#212D38"}}>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/kfm.png"}
                alt="KFM Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/nhrl.png"}
                alt="NHRL Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/asml.png"}
                alt="ASML Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/autodesk.png"}
                alt="Autodesk Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
          </Box>
        </Box>
        
        {/* Gold */}
        {/* NOTE: Every other banner uses flexDirection="row-reverse" which flips banner orientation */}
        <Box display="flex" flexDirection="row-reverse" marginBottom="40px" width="100%">
          <Box flex="0 1 40%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" sx={{backgroundColor:"#342819"}}>
            <Box
              component="img"
              src={"/sponsors/crc_gold.png"}
              alt="Large Gold Logo"
              sx={{ width: '100%', height: 'auto', maxWidth: "300px", objectFit: "contain"}}
            />
            <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>GOLD</Typography>
          </Box>
          <Box display="flex" flex="1.5" flexWrap="wrap" borderLeft="1.5rem solid #DEBF28" sx={{backgroundColor:"#342819"}}>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/cornell_engineering_logo.png"}
                alt="Cornell Engineering Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/Angel_Shot_Logo.png"}
                alt="Angel Shot Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/Keen_Insites_Logo.png"}
                alt="Keen Insites"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/daylight.png"}
                alt="The Daylight Savings Company Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/raymond.png"}
                alt="Raymond Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
          </Box>
        </Box>

        {/* Silver */}
        <Box display="flex" flexDirection="row" marginBottom="40px" width="100%">
          <Box flex="0 1 40%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" sx={{backgroundColor:"#383838"}}>
            <Box
              component="img"
              src={"/sponsors/crc_silver.png"}
              alt="Large Silver Logo"
              sx={{ width: '100%', height: 'auto', maxWidth: "300px", objectFit: "contain"}}
            />
            <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>SILVER</Typography>
          </Box>
          <Box display="flex" flex="1.5" flexWrap="wrap" borderRight="1.5rem solid #B8B8B8" sx={{backgroundColor:"#383838"}}>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/boeing.png"}
                alt="Boeing Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
          </Box>
        </Box>

        {/* Bronze */}
        <Box display="flex" flexDirection="row-reverse" marginBottom="40px" width="100%">
          <Box flex="0 1 40%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" sx={{backgroundColor:"#352216"}}>
            <Box
              component="img"
              src={"/sponsors/crc_bronze.png"}
              alt="Large Plat Logo"
              sx={{ width: '100%', height: 'auto', maxWidth: "300px", objectFit: "contain"}}
            />
            <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>BRONZE</Typography>
          </Box>
          <Box display="flex" flex="1.5" flexWrap="wrap" borderLeft="1.5rem solid #CF5401" sx={{backgroundColor:"#352216"}}>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/sendcutsend.png"}
                alt="SendCutSend Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
            </Box>
          </Box>
        </Box>

        {/* Partners */}
        <Box display="flex" flexDirection="row" marginBottom="20px" width="100%">
          <Box flex="0 1 40%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" sx={{backgroundColor:"#291936"}}>
            <Box
              component="img"
              src={"/sponsors/crc_purple.png"}
              alt="Large Purple Logo"
              sx={{ width: '100%', height: 'auto', maxWidth: "300px", objectFit: "contain"}}
            />
            <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>PARTNERS</Typography>
          </Box>
          <Box display="flex" flex="1.5" flexWrap="wrap" borderRight="1.5rem solid #8307E4" sx={{backgroundColor:"#291936"}}>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/redbull.png"}
                alt="Redbull Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
              {/* <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>BOVAY LABORATORY COMPLEX</Typography> */}
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/tastelli.JPG"}
                alt="Tastelli Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
              {/* <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>BOVAY LABORATORY COMPLEX</Typography> */}
            </Box>
            <Box width={{xs: "100%", sm: "50%"}} padding="10px" boxSizing="border-box" display="flex" justfyContent="center" alignItems="center">
              <Box
                component="img"
                src={"/sponsors/poppi.png"}
                alt="Poppi Logo"
                sx={{ width: '100%', height: 'auto', maxHeight: "200px", objectFit: "contain"}}
              />
              {/* <Typography variant="h2" marginTop="2px" sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: "center", fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem"} }}>BOVAY LABORATORY COMPLEX</Typography> */}
            </Box>
          </Box>
        </Box>

      </Box>

      <FAQ qn={questions} ans={answers} />
      
    </Box>

    </Box>
  );
}
