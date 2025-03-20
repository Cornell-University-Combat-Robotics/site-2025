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
        // gridTemplateColumns: `repeat(${capacity}, 1fr)`,
        gridTemplateColumns: {
          xs: `repeat(2, 1fr)`,
          sm: `repeat(2, 1fr)`,
          md: `repeat(${capacity}, 1fr)`,
        },
        gridAutoRows: '1fr',
        gap: "30px 20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "70px auto",
        // backgroundColor: "yellow",
        width: "fit-content",
      }}>
        {/* Accesses the specific category in the RobotsData file, creating a RobotCard component for each individual robot. */}
        {RobotsData[type].map((props2, index) => (
          <RobotCard key={index} {...props2} />
        ))}
      </Box>
    </>
  );
}