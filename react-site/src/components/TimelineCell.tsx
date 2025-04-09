import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

/**
 * Creates a timeline cell for the About page Carousel. Represents the selected cell.
 */
export default function TimelineCell(props: Timeline1Cell) {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    return (
        <Box>
            <Box sx={{
                height: '90vh',
                width: isMobile ? '68vw' : '28vw',
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: "-1",
                position: 'relative',
                overflow: 'hidden',

            }}>
                <Box sx={{
                    width: "inherit",
                    height: "inherit",
                    zIndex: "100",
                    backdropFilter: "brightness(0.4)",
                    textAlign: 'left',
                    objectFit: "cover",
                    position: "relative",
                    px: "10%",
                    py: "15%"
                }}>
                    <Typography variant="h3" style={{ zIndex: "1" }}> {props.date} </Typography>
                    <Typography style={{ zIndex: "1", paddingRight: "20%" }}> {props.description} </Typography>
                </Box>
            </Box >
        </Box>

    )

}