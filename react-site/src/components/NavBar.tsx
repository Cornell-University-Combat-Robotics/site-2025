import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

const NavBar = ({ setHeight }: { setHeight: (height: number) => void }) => {
  {/** refContainer is used to export the height of the navbar so that pages
    such as the game page can be sized appropriately */ }
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refContainer.current) {
      // console.log("Navbar logging height");
      // console.log("height: " + refContainer.current.offsetHeight);
      setHeight(refContainer.current.offsetHeight);
    }
  }, [setHeight]);

  return (
    <Box
      id="navbar-wrapper"
      sx={{
        top: "0px",
        right: "0px",
        padding: 1.5,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black" 
      }}
      ref={refContainer}
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
        {/* This is a highlighted button with a background, if needed.
          <NavBarButton
            bg="#FF3225"
            text="Apply"
            variant="apply"
            sx={{
              // Align text with rest of buttons, accounting for borders
              transform: "translateY(-2px)",
            }}
        /> */}
      </Box>
    </Box>
  );
}

export default NavBar;
