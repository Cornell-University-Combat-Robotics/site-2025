import React from "react";
import { Box, Typography } from "@mui/material";

export interface Timeline2Cell {
    date: string
    description: string
    image: string
}

/**
 * Creates a timeline cell for the About page. This cell is dark, representing the unselected cell. 
 * NOTE: This is like copy and pasted from TimelineCell, so should change in the future.
 */
export default function TimelineCellDark(props: Timeline2Cell) {
    return (
        <Box sx={{
            height: '80vh',
            textAlign: 'left',
            backgroundColor: '#3D0E0E',
            zIndex: "-1",
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Typography variant="h3" style={{ zIndex: "1", paddingLeft: "10%", paddingTop: "10%", opacity: "40%" }}> {props.date} </Typography>
            <Typography style={{ zIndex: "1", paddingLeft: "10%", opacity: "40%" }}> {props.description} </Typography>
            <img src={props.image} style={{
                width: "110%",
                height: "110%",
                zIndex: "-100",
                objectFit: "cover",
                opacity: "60%",
                position: "relative",
                objectPosition: "center",
            }} />
        </Box >
    )

}