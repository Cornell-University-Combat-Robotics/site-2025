import React from "react";
import { Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

export default function NavBarContents() {
    <Box
        id="navbar-links"
        sx={{
            right: "0px",
            display: "flex",
            gap: 2,
        }}
    >
        <NavBarButton bg="none" text="About" variant="secondary" />
        <NavBarButton bg="none" text="Team" variant="secondary" />
        <NavBarButton bg="none" text="Robots" variant="secondary" />
        <NavBarButton bg="none" text="Sponsors" variant="secondary" />
        <NavBarButton bg="none" text="Game" variant="secondary" />
        <NavBarButton bg="none" text="Apply" variant="secondary" />
        <NavBarButton bg="none" text="Merch" variant="secondary" />
    </Box>
}