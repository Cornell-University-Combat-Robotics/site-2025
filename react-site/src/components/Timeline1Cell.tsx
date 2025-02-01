import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

export default function TimelineCell(props: Timeline1Cell) {
    return (
        <Box sx={{
            width: '50%',
            height: '80vh',
            backgroundImage: `url(${props.image})`,  // Your image URL
            backgroundSize: 'cover',      // Ensure the image covers the area
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
        }
        }>
            <Typography> {props.description} </Typography>


        </Box >

    )

}