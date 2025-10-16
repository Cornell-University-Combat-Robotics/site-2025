import React from "react";
import { Link } from "react-router-dom";

import { Box, Slide, Button, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "../IconButton";
import NavBarContents from "./NavBarContents.tsx";

/** GradientNavBar creates a navigation bar with a semi-transparent gradient for the top of the page. 
 * For mobile, the header only contains 2 icons: the logo, and the icon to open the NavBarContents page.*/
export default function NavBarMobile() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        console.log("toggled");
        setOpen((prev) => !prev);
    }

    return (
        <>
            <Slide direction="left" in={open} mountOnEnter unmountOnExit sx={{ position: 'fixed', zIndex: 10000, width: '100%', height: '100vh', backgroundColor: theme.palette.primary.grey }}>
                <Box>
                    <NavBarContents open={open} onClose={handleToggle} sx={{
                        position: 'fixed',
                        zIndex: 10000, // set the zindex to be in front of the old header
                        backgroundColor: theme.palette.primary.grey
                    }} />
                </Box>
            </Slide>

            <Box
                id="navbar-wrapper"
                sx={{
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 100, //used to ensure the nav bar is in front of all other elements on the page
                    background: 'linear-gradient(to top,  transparent, black)',
                    alignItems: "center",
                    position: "fixed",
                    py: 1.5,
                    px: 4,
                    display: "flex",
                    justifyContent: "space-between",
                    visibility: open ? "hidden" : "visible"
                }}
            >
                <IconButton image="/logo.png" to="/" width="2rem" height="2rem" />
                <Button onClick={handleToggle}>
                    <MenuIcon sx={{ color: 'white' }} />
                </Button>

            </Box>

        </>

    );
}
