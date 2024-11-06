import RobotCard from "./RobotCard";
import RobotsData from "../data/robots";
import React from "react";
import { Box } from "@mui/material";

export interface RobotCardListProps {
  type: string; // Retired, Three_lb, etc
  capacity: number; // Number of cards to display per row
}

export default function RobotCardList(props: RobotCardListProps) {
  const { type, capacity } = props;
  const numElements = capacity;

  return (
    <>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${numElements}, 1fr)`,
        gridAutoRows: '1fr',
        gap: "5px",
        alignItems: "start",
        justifyItems: "center",
      }}>
        {RobotsData[type].map((props2) => (
          <RobotCard {...props2} />
        ))}
      </Box>
    </>
  );
}