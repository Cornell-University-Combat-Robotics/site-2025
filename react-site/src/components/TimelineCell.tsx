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
        <Box sx={{
            height: '80vh',
            width: 'auto',
            textAlign: 'left',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#3D0E0E',
            zIndex: "-1",
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Typography variant="h3" style={{ zIndex: "1", paddingLeft: "10%", paddingTop: "10%" }}> {props.date} </Typography>
            <Typography style={{ zIndex: "1", paddingLeft: "10%" }}> {props.description} </Typography>
            {/* cannot use backgroundImage because opacity impacts the text AND image */}
            <img src={props.image} style={{
                width: "100%",
                height: "100%",
                zIndex: "-100",
                objectFit: "cover",
                opacity: "60%",
                position: "relative",
                objectPosition: "center",
            }} />
        </Box >

    )

}

// <Card sx={{ width: "100%", height: "100%", backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
//     <CardMedia
//         sx={{ height: "0%" }}
//     />
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             {props.date}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             {props.description}
//         </Typography>
//     </CardContent>
// </Card>