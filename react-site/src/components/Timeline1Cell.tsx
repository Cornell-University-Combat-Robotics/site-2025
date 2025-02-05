import React from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";

export interface Timeline1Cell {
    date: string
    description: string
    image: string
}

export default function TimelineCell(props: Timeline1Cell) {
    return (
        <Card sx={{ width: "250px", height: "335px" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`url(${props.image})`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )

}