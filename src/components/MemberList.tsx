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

  return (
    <>
      <Box sx={{
        width: '100%',
        // backgroundColor: 'yellow',
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

// <Box sx={{
//         display: "inline-grid",
//         gridTemplateColumns: {
//           xs: `repeat(1, 1fr)`,
//           sm: `repeat(2, 1fr)`, //2 columns (aka. 2 member cards) occupying equal width.
//           md: `repeat(3, 1fr)`,
//           lg: `repeat(${numElements}, 1fr)`
//         },
//         gridAutoRows: '1fr', //when elements in list > numElements. Each row occupies same height.
//         gap: "1%",
//         alignItems: "center",
//         justifyContent: "center", //used to be justifyItems which was bugged.  justifyContent aligns everything in a container and justifyItems aligns content in cards
//         ...sx
//       }}></Box>