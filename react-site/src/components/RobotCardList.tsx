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
        display: "grid",
        gridTemplateColumns: `repeat(${capacity}, 1fr)`,
        gridAutoRows: '1fr',
        gap: "80px 40px",
        justifyContent: "center",
        alignItems: "center",
        margin: "120px auto",
        width: "fit-content",
        // flexWrap: "wrap",
        // margin: "5em 4em",
        // gridTemplateColumns: repeat(3, 1fr),
      }}>
        {/* Accesses the specific category in the RobotsData file, creating a RobotCard component for each individual robot. */}
        {RobotsData[type].map((props2) => (
          <RobotCard {...props2} />
        ))}
      </Box>
    </>
  );
}