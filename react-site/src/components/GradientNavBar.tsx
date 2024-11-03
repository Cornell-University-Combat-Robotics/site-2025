import React from "react";
import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

export default function GradientNavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        top: "0px",
        right: "0px",
        zIndex: 1000,
        background: 'linear-gradient(to top,  transparent, black)',
        alignItems: "center",
        my: -7,
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
