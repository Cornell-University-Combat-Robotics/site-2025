import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, Stack, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NavBarButton from "./NavBarButtonMobile.tsx";
import CustomIconButton from "../IconButton";
// import NavBarIcon from "./NavBarIcon";

/** Contents of the mobile navigation bar after it opens. */
export default function NavBarContents({ open, onClose }) {
    const theme = useTheme();

    // disable scroll while navbar is open
    useEffect(() => {
        console.log(open);
        if (!open) return; // if navbar is not open, do not disable scroll

        // block scrollwheel (for testing on desktop)
        const preventWheel = (e: WheelEvent) => e.preventDefault();
        window.addEventListener("wheel", preventWheel, { passive: false });

        // block touch (mobile)
        const preventTouch = (e: TouchEvent) => e.preventDefault();
        window.addEventListener("touchmove", preventTouch, { passive: false });

        // block keyboard scrolling (arrow keys, spacebar)
        const preventKeys = (e: KeyboardEvent) => {
            if (["Space", "ArrowUp", "ArrowDown"].includes(e.code)) {
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", preventKeys);

        // allow scroll if open
        return () => {
            window.removeEventListener("wheel", preventWheel);
            window.removeEventListener("touchmove", preventTouch);
            window.removeEventListener("keydown", preventKeys);
        };
    }, [open]); // rerun when open changes

    return (
        <Box
            flexDirection="column"
            sx={{
                position: 'fixed',
                width: 'auto',
                height: '100vh',
                overflowX: 'hidden',
            }}>
            <Stack px='2%' py='2%' direction="row">
                <Box width="80%" />
                <IconButton
                    onClick={onClose}
                    sx={{ color: 'white', paddingTop: '5%' }}>
                    <CloseIcon />
                </IconButton>
            </Stack>

            {/* the links to all the pages. 'text' must exactly match the name of the link.  */}
            <Box flexDirection='column' display="flex" paddingTop="10%">
                <NavBarButton bg="none" text="About" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Team" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Robots" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Sponsors" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Game" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Apply" variant="secondary" close={onClose} />
                <NavBarButton bg="none" text="Merch" variant="secondary" close={onClose} />
            </Box>

            <Box flexDirection='column' display="flex" paddingTop="10%" marginLeft="10%" width="85%" >
                <Typography variant="mobileBody" textAlign="left"> This organization is a registered student organization of Cornell University.</Typography>
                <Link to="/accessibility" style={{ display: 'flex', alignItems: 'left' }}>
                    <Typography variant="mobileBody" textAlign="left">
                        Accessibility Assistance
                    </Typography>
                </Link>

            </Box>
        </Box>
    );
}