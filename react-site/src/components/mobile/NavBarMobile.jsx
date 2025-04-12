import React from "react";
import { Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavBarButton from "../NavBarButton";
import NavBarIcon from "../NavBarIcon";

/** GradientNavBar creates a navigation bar with a semi-transparent gradient for the top of the page. 
 * For mobile, the header only contains 2 icons: the logo, and the icon to open the NavBarContents page.*/
export default function NavBarMobile() {
    return (
        <Box
            id="navbar-wrapper"
            sx={{
                top: "0px",
                left: "0px",
                right: "0px",
                zIndex: 1000, //used to ensure the nav bar is in front of all other elements on the page
                background: 'linear-gradient(to top,  transparent, black)',
                alignItems: "center",
                position: "fixed",
                py: 1.5,
                px: 4,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <NavBarIcon />
            <MenuIcon />
        </Box>
    );
}
