import { Box, Button, Typography, Grid2 } from "@mui/material";
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
              <Box
                component="img"
                src={asmlLogo}
                alt="ASML Logo"
                sx={{ width: '250px', height: 'auto' }}
              />
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box
                component="img"
                src={kfmLogo}
                alt="KFM Logo"
                sx={{ width: "250px", height: 'auto' }}
              />
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box
                component="img"
                src={nhlrLogo}
                alt="NHRL Logo"
                sx={{ width: '250px', height: 'auto' }}
              />
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box
                component="img"
                src={autodeskLogo}
                alt="Autodesk Logo"
                sx={{ width: '250px', height: 'auto' }}
              />
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
              <Box
                component="img"
                src={cornellEngLogo}
                alt="Cornell Engineering Logo"
                sx={{ width: '350px', height: 'auto' }}
              />
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box
                component="img"
                src={keenLogo}
                alt="Keen Insites Logo"
                sx={{ width: "450px", height: 'auto' }}
              />
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box
                component="img"
                src={angelLogo}
                alt="Angel Shot Logo"
                sx={{ width: '200px', height: 'auto' }}
              />
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
    </Box>
  );
}
