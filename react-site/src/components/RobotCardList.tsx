import RobotCard from "./RobotCard";
import RobotsData from "../data/robots";
import React from "react";
import { Box } from "@mui/material";

export interface RobotCardListProps {
  type: string; // Retired, Three_lb
  capacity: number; // Number of cards to display per row. Needed because the two sections format differently
}

export default function RobotCardList(props: RobotCardListProps) {
  const { type, capacity } = props;

  return (
    <>
      <Box sx={{
        // OLD (display grid)
        // display: "grid",
        // CHANGED (display flex):
        display: "flex",
        gridTemplateColumns: `repeat(${capacity}, 1fr)`,
        gridAutoRows: '1fr',
        gap: "5px",
        // CHANGED (justifycontent and flexWrap):
        justifyContent: "center",
        flexWrap: "wrap",
        // OLD (alignItems start and justifyItems center)
        // alignItems: "start",
        // justifyItems: "center",
      }}>
        {/* Accesses the specific category in the RobotsData file, creating a RobotCard component for each individual robot. */}
        {RobotsData[type].map((props2) => (
          <RobotCard {...props2} />
        ))}
      </Box>
    </>
  );
}