import React from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

export default function TimelineCell(props: Timeline1Cell) {
    return (
        <Card sx={{ width: "100%", height: "100%", backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <CardMedia
                sx={{ height: "0%" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>

    )

}