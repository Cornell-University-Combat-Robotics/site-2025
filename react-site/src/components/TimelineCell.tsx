import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { MobileContext } from "../App.jsx";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

/**
 * Creates a timeline cell for the About page Carousel. Represents the selected cell.
 */
export default function TimelineCell(props: Timeline1Cell) {
    const isMobile = useContext(MobileContext);
    return (
        <Box>
            <Box sx={{
                height: isMobile ? '65vh' : '90vh',
                width: isMobile ? '78vw' : '28vw',
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                //zIndex: "-1",
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Box sx={{
                    width: "fit-content",
                    height: "100%",
                    //zIndex: "100",
                    backdropFilter: "brightness(0.4)",
                    textAlign: 'left',
                    objectFit: "cover",
                    position: "relative",
                    px: "10%",
                    py: "15%"
                }}>
                    <Typography variant={isMobile ? "mobileH2" : "desktopH3"} display="block"> {props.date} </Typography>
                    <Typography variant={isMobile ? "mobileH3" : "desktopBody"}> {props.description} </Typography>
                </Box>
            </Box >
        </Box>

    )

}