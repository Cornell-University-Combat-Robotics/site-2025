import TimelineCell from "./Timeline1Cell";
import CellData from "../data/timeline1.ts";
import React from "react";
import { Box } from "@mui/material";


export default function Timeline1List() {
    return (
        <>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: `repeat(3, 1fr)`,
                gridAutoRows: '1fr',
                gap: "5px",
                alignItems: "start",
                justifyItems: "center",
            }}>
                {/* Creates a TimelineCell component for each individual cell. */}
                {CellData.map((cell) => (
                    <TimelineCell {...cell} />
                ))}
            </Box>
        </>
    );
}