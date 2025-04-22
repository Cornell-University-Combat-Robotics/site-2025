import React from "react";
import { Box } from "@mui/material";
import { useContext } from 'react';

import RobotCard from "./RobotCard";
import RobotCardMobile from "./mobile/RobotCardMobile";
import RobotsData from "../data/robots";
import { MobileContext } from '../App.jsx';

export interface RobotCardListProps {
  type: string; // Retired, Three_lb
  capacity: number; // Number of cards to display per row. Needed because the two sections format differently
}

export default function RobotCardList(props: RobotCardListProps) {
  const { type, capacity } = props;
  const isMobile = useContext(MobileContext);

  return (
    <>
      <Box sx={{
        display: "grid",
        // gridTemplateColumns: `repeat(${capacity}, 1fr)`,
        gridTemplateColumns: {
          xs: `repeat(1, 1fr)`,
          sm: `repeat(1, 1fr)`,
          md: `repeat(${capacity}, 1fr)`,
        },
        gridAutoRows: '1fr',
        gap: "30px 20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "70px auto",
        height: 'auto',
        width: "fit-content",
      }}>
        {/* Accesses the specific category in the RobotsData file, creating a RobotCard component for each individual robot. */}
        {

          isMobile ? RobotsData[type].map((props2) => (
            <RobotCardMobile {...props2} />
          )) : RobotsData[type].map((props2) => (
            <RobotCard {...props2} />
          ))
        }
      </Box>
    </>
  );
}