import { Box, Typography, Button } from "@mui/material";
import team_photo from "../assets/team-photo-formal.png";
import TeamMemberList from "../components/MemberList";

/** Teams creates the Teams page of the website. */
export default function Teams() {
  return (
    <>
      <Box position="relative" >
        <Box position="relative" display="inline-block"> {/* Set position to relative for GradientNavBar. */}
          <img src={team_photo} style={{ width: '100%', height: 'auto' }} />
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
            MEET THE TEAM
          </Typography>
          <Box>
            <Typography variante="h2" sx={{ fontFamily: 'Josefin Sans' }}>
              Our entire team consists of four subteams: Kinetic, Sportsman, Autonomous, and Marketing. Click the buttons below to learn more about each of them!
            </Typography>
          </Box>
          
          {/*Three horizontal buttons for 3 actions users can do. Nested in a double 
            box. The inside box sets the width to 75% of screen. The outside box sets 
            the content inside (the inner box) to be center of screen horizontally. 
            Use hred within Button mui component to link the button. sx is the styling 
            details. &focus is for when the button is clicked (removing the blue border 
            when clicked. &hover is for making the text color white (don't change when
            button is not hovered over.*/}
          <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="40px">
            <Box display='flex' width="75%" justifyContent="space-between" sx={{ flexDirection: 'row' }}>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px", color: "white", fontSize: "1.5em", width: "260px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#7AE997"} }}>Kinetic</Button>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px",color: "white", fontSize: "1.5em", width: "260px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#8CA5FA"} }}>Sportsman</Button>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px",color: "white", fontSize: "1.5em", width: "260px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#F9F999"} }}>Autonomous</Button>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px",color: "white", fontSize: "1.5em", width: "260px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#BC81F0"} }}>Marketing</Button>
            </Box>
          </Box>
          <Box display='flex' justifyContent="center" alignItems="center" mt="20px" mb="40px">
            <Box display='flex' width="75%" justifyContent="space-between" sx={{ flexDirection: 'row' }}>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px", color: "white", fontSize: "1.5em", width: "550px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#b21d1d"} }}>Team Leads</Button>
              <Button variant = "outlined" sx={{ backgroundColor: "#1C1C1C", borderColor: "white", borderWidth: "2px",color: "white", fontSize: "1.5em", width: "550px", height: "150px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", px: "20px", borderRadius: "16px", '&:hover': { color: 'white', borderColor: "white", backgroundColor: "#b21d1d"} }}>Alumni</Button>
              
            </Box>
          </Box>
        </Box>
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          LEADS
        </Typography>
        <TeamMemberList teamName={"Leads"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          MARKETING
        </Typography>
        <TeamMemberList teamName={"Marketing"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          KINETIC
        </Typography>
        <TeamMemberList teamName={"Kinetic"} />
        <Typography variant="h2" sx={{ fontFamily: 'Josefin Sans' }}>
          SPORTSMAN
        </Typography>
        <TeamMemberList teamName={"Sportsman"} />
      </Box>
    </>
  );
}
