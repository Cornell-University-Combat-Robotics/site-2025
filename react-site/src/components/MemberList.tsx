import teamMembers from "../data/members.ts";
import Member from "../components/Member.tsx";
import { SxProps, Theme, Box } from "@mui/material";
import React from "react";

export interface TeamMemberListProps {
  teamName: string;
  sx?: SxProps<Theme>;
}

export default function TeamMemberList(props: TeamMemberListProps) {
  const { teamName, sx } = props;
  const numElements = 4;

  return (
    <>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${numElements}, 1fr)`,
        gridAutoRows: '1fr',
        gap: "5px",
        alignItems: "start",
        justifyItems: "center",
        ...sx
      }}>
        {teamMembers[teamName].map((props2) => (
          <Member {...props2} />
        ))}
      </Box>
    </>
  );
}
