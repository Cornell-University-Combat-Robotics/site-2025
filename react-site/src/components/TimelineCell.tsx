import React from "react";
import { Box, Typography } from "@mui/material";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

/**
 * Creates a timeline cell for the About page Carousel. Represents the selected cell.
 */
export default function TimelineCell(props: Timeline1Cell) {
    return (
        <Box>
            <Box sx={{
                height: '90vh',
                width: '28vw',
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
                    backdropFilter: "brightness(0.5)",
                    textAlign: 'left',
                    objectFit: "cover",
                    position: "relative",
                    px: "10%",
                    py: "10%"
                }}>
                    <Typography variant="h3" style={{ zIndex: "1" }}> {props.date} </Typography>
                    <Typography style={{ zIndex: "1", paddingRight: "20%" }}> {props.description} </Typography>
                </Box>
            </Box >
        </Box>

    )

}

{/* <img src={props.image} style={{
                width: "100%",
                height: "100%",
                zIndex: "-100",
                objectFit: "cover",
                opacity: "60%",
                position: "relative",
                objectPosition: "center",
            }} /> */}