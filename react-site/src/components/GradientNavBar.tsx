import React from "react";
import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

/* 
GradientNavBar creates a navigation bar with a semi-transparent gradient for the top of the page.
*/
export default function GradientNavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        top: "0px",
        left:"0px",
        right:"0px",
        zIndex: 1000, //used to ensure the nav bar is in front of all other elements on the page
        background: 'linear-gradient(to top,  transparent, black)',
        alignItems: "center",
        position: "absolute",
        py: 1.5,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <NavBarIcon />
      <Box
        id="navbar-links"
        sx={{
          right: "0px",
          display: "flex",
          gap: 2,
        }}
      >
        <NavBarButton bg="none" text="About" variant="secondary" />
        <NavBarButton bg="none" text="Teams" variant="secondary" />
        <NavBarButton bg="none" text="Robots" variant="secondary" />
        <NavBarButton bg="none" text="Sponsors" variant="secondary" />
        <NavBarButton bg="none" text="Game" variant="secondary" />
        <NavBarButton bg="none" text="Apply" variant="secondary" />
      </Box>
    </Box>
  );
}
