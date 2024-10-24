import { Box, Typography } from "@mui/material";
import team_photo from "../assets/team-photo-formal.png";
import TeamMemberList from "../components/MemberList";

export default function Teams() {
  return (
    <Box>
      <Box position="relative" display="inline-block">
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
  );
}
