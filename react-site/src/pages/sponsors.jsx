import { Box, Button, Typography, Grid2, Link, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import team from "../assets/team-photo-hearts.png";
import platLogo from "../assets/crc_plat.png";
import asmlLogo from "../assets/asml.png";
import kfmLogo from "../assets/kfm.png";
import nhlrLogo from "../assets/nhrl.png";
import autodeskLogo from "../assets/autodesk.png";
import cornellEngLogo from "../assets/cornell_engineering_logo.png"
import goldLogo from "../assets/crc_gold.png"
import keenLogo from "../assets/Keen_Insites_Logo_3.png"
import angelLogo from "../assets/Angel_Shot_Logo.png"
import silverLogo from "../assets/crc_silver.png"
import boeingLogo from "../assets/boeing.png"
import bronzeLogo from "../assets/crc_bronze.png"
import purpleLogo from "../assets/crc_purple.png"
import redbullLogo from "../assets/redbull.png"
import daylightLogo from "../assets/daylight.png"
import raymondLogo from "../assets/raymond.png"
import sendcutsendLogo from "../assets/sendcutsend.png"

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
      <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="40px">
        <Box display='flex' width="75%" justifyContent="space-between" sx={{ flexDirection: 'row' }}>
          <Button sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "330px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px" }}>VIEW OUR SPONSORSHIP PACKET</Button>
          <Button sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "330px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px" }}>DONATE THROUGH CORNELL</Button>
          <Button sx={{ backgroundColor: "#820002", color: "white", fontSize: "1.5em", width: "330px", height: "100px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px" }}>DONATE THROUGH GIVING DAY</Button>
        </Box>
      </Box>
      <Box display='flex' justifyContent="center" alignItems="center" sx={{ flexDirection: 'column' }}>
        <Typography align='justify' width='75%' sx={{ fontFamily: 'Josefin Sans', my: 2 }}>
          As a new robotics team, we rely heavily on raising money from sponsorships and donations and we'd be glad to hear from you! Read more about our history and the benefits of supporting our team outlined in the Sponsorship Packet.
        </Typography>
        <Typography align='justify' width='75%' sx={{ fontFamily: 'Josefin Sans', my: 2 }}>
          You can also directly donate through Cornell above, please specify that the donation is for Combat Robotics at Cornell. We are a 501(c)(3) organization and all donations are tax deductible. Reach out to us directly if you're interested in making a specific arrangement not outlined in the sponsorship packet above.
        </Typography>
      </Box>

      {/* Sponsor Logos Section with Light Blue Rectangle */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="75%"
          sx={{
            backgroundColor: '#212D38',
            padding: '20px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Left side: large logo and title */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={platLogo}
              alt="Large Plat Logo"
              sx={{ width: '400px', height: 'auto', mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              PLATINUM
            </Typography>
          </Box>

          {/* Right side: Sponsor logos Grid2 */}
          <Grid2 container spacing={3} ml="90px" sx={{ maxWidth: '60%' }}>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.asml.com/en">
                <Box
                  component="img"
                  src={asmlLogo}
                  alt="ASML Logo"
                  sx={{ width: '250px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.kfm-llc.com/">
                <Box
                  component="img"
                  src={kfmLogo}
                  alt="KFM Logo"
                  sx={{ width: "250px", height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.nhrl.io/">
                <Box
                  component="img"
                  src={nhlrLogo}
                  alt="NHRL Logo"
                  sx={{ width: '250px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.autodesk.com/">
                <Box
                  component="img"
                  src={autodeskLogo}
                  alt="Autodesk Logo"
                  sx={{ width: '250px', height: 'auto' }}
                />
              </Link>
            </Grid2>
          </Grid2>

          {/* Light Blue Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              right: '0px',
              top: 0,
              bottom: 0,
              width: '20px',
              backgroundColor: '#2AF1F1', // Light blue color
            }}
          />
        </Box>
      </Box>

      {/* Gold Sponsor Logos Section with Gold Rectangle */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="75%"
          sx={{
            backgroundColor: '#342819',
            padding: '20px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Gold Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              left: '0px',
              top: 0,
              bottom: 0,
              width: '20px',
              backgroundColor: '#DEBF28', // Gold color
            }}
          />
          {/* Left side: Sponsor logos Grid2 */}
          <Grid2 container spacing={3} ml="90px" sx={{ maxWidth: '60%' }}>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.engineering.cornell.edu/">
                <Box
                  component="img"
                  src={cornellEngLogo}
                  alt="Cornell Engineering Logo"
                  sx={{ width: '350px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://angelshotapp.com/">
                <Box
                  component="img"
                  src={angelLogo}
                  alt="Angel Shot Logo"
                  sx={{ width: '200px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.keeninsites.com/">
                <Box
                  component="img"
                  src={keenLogo}
                  alt="Keen Insites Logo"
                  sx={{ width: "400px", height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://daylightsavings.us/">
                <Box
                  component="img"
                  src={daylightLogo}
                  alt="The Daylight Savings Company Logo"
                  sx={{ width: '400px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.raymondcorp.com/">
                <Box
                  component="img"
                  src={raymondLogo}
                  alt="Raymond Logo"
                  sx={{ width: '350px', height: 'auto' }}
                />
              </Link>
            </Grid2>
          </Grid2>

          {/* Left side: large logo and title */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={goldLogo}
              alt="Large Gold Logo"
              sx={{ width: '400px', height: 'auto', mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              GOLD
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Silve Sponsor Logos Section with Grey Rectangle */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="75%"
          sx={{
            backgroundColor: '#383838',
            padding: '20px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Left side: large logo and title */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={silverLogo}
              alt="Large Silver Logo"
              sx={{ width: '400px', height: 'auto', mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              SILVER
            </Typography>
          </Box>

          {/* Right side: Sponsor logos Grid2 */}
          <Grid2 container spacing={3} mx="auto" sx={{ maxWidth: '60%' }}>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.boeing.com/">
                <Box
                  component="img"
                  src={boeingLogo}
                  alt="Boeing Logo"
                  sx={{ width: '450px', height: 'auto' }}
                />
              </Link>
            </Grid2>
          </Grid2>

          {/* Light Grey Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              right: '0px',
              top: 0,
              bottom: 0,
              width: '20px',
              backgroundColor: '#B8B8B8', // Light grey color
            }}
          />
        </Box>
      </Box>

      {/* Bronze Sponsor Logos Section with Bronze Rectangle */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="75%"
          sx={{
            backgroundColor: '#352216',
            padding: '20px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Bronze Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              left: '0px',
              top: 0,
              bottom: 0,
              width: '20px',
              backgroundColor: '#CF5401', // Bronze color
            }}
          />
          {/* Left side: Sponsor logos Grid2 */}
          <Grid2 container spacing={3} mx="auto" my="auto" sx={{ maxWidth: '60%' }}>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://sendcutsend.com/">
                <Box
                  component="img"
                  src={sendcutsendLogo}
                  alt="SendCutSend Logo"
                  sx={{ width: '350px', height: 'auto' }}
                />
              </Link>
            </Grid2>
          </Grid2>

          {/* Left side: large logo and title */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={bronzeLogo}
              alt="Large Bronze Logo"
              sx={{ width: '400px', height: 'auto', mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              BRONZE
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Partner Logos Section with Purple Rectangle */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={5} mb={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="75%"
          sx={{
            backgroundColor: '#291936',
            padding: '20px',
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Left side: large logo and title */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={purpleLogo}
              alt="Large Purple Logo"
              sx={{ width: '400px', height: 'auto', mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              PARTNERS
            </Typography>
          </Box>

          {/* Right side: Sponsor logos Grid2 */}
          <Grid2 container spacing={3} ml="90px" alignItems="center" justifyContent="center" sx={{ maxWidth: '60%' }}>
            <Grid2 item xs={6} sm={3}>
              <Link href="https://www.redbull.com/us-en">
                <Box
                  component="img"
                  src={redbullLogo}
                  alt="Red Bull Logo"
                  sx={{ width: '250px', height: 'auto' }}
                />
              </Link>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Link style={{ textDecoration: 'none', color: "white" }} href="https://www.cee.cornell.edu/cee/facilities/bovay-laboratory-complex">
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: "2.5rem" }}> BOVAY LABORATORY COMPLEX </Typography>
              </Link>
            </Grid2>
          </Grid2>

          {/* Light Purple Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              right: '0px',
              top: 0,
              bottom: 0,
              width: '20px',
              backgroundColor: '#8307E4', // Light purple color
            }}
          />
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
