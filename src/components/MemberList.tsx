import teamMembers from "../data/members.ts";
import Member from "../components/Member.tsx";
import { SxProps, Theme, Box } from "@mui/material";

export interface TeamMemberListProps {
  teamName: string;
  sx?: SxProps<Theme>;
}

export default function TeamMemberList(props: TeamMemberListProps) {
  const { teamName, sx } = props;

  return (
    <>
      <Box sx={{
        width: '100%',
        display: "flex",
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center", //used to be justifyItems which was bugged.  justifyContent aligns everything in a container and justifyItems aligns content in cards 
        ...sx
      }}>
        {teamMembers[teamName].map((props2) => (
          <Member {...props2} />
        ))}
      </Box>
    </>
  );
}