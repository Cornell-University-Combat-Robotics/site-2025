import React, { useState, useEffect } from "react";
import { Box, IconButton, Slide, Stack } from "@mui/material";
import { NavigateBefore, NavigateNext, PropaneSharp } from "@mui/icons-material";
import Cell from "./TimelineCell.tsx";
import DarkCell from "./TimelineCellDark.tsx";

export interface Carousel1 {
    image: string,
    numCells: number
}

function Carousel(props: Carousel1) {
    //stores cells (that are displayed in timeline)
    const [cells, setCells] = useState<React.ReactElement[]>([]);
    //current cell that is displayed
    const [currentPage, setCurrentPage] = useState(0);
    //determines animation direction (slide left or slide right)
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

    //how many cards per page
    const cellsPerPage = 3;

    const refreshCards: React.ReactElement[] = Array.from(
        { length: props.numCells },
        (_, i) => i === currentPage ?
            < Cell
                date='October 2019'
                description="We’re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those featured on the TV show Battlebots.Each year, we build two 12lb mechanical bots and one 3lb battlebot with AI based functionality."
                image={props.image}
                key={1} />
            :
            <DarkCell date='October 2019'
                description="We’re Combat Robotics @ Cornell (CRC), and we build small-scale combat robots, much like those featured on the TV show Battlebots.Each year, we build two 12lb mechanical bots and one 3lb battlebot with AI based functionality."
                image={props.image}
                key={1} />
    );

    // handle button press for scroll left (->)
    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage === refreshCards.length - 1 ? 0 : prevPage + 1); //support wraparound
    }

    // handle button press for scroll right (<-)
    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage === 0 ? refreshCards.length - 1 : prevPage - 1);
        // prevpage is passed in through useState because it is a function
    }

    // sets initial data (blank timeline)
    useEffect(() => {
        setCells(refreshCards);
    });

    return (
        // contains entire carousel
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
        }}>
            {/* handle previous page (<) button click */}
            <IconButton onClick={handlePrevPage}
                sx={{ margin: "0%" }}>
                <NavigateBefore sx={{ color: "white", transform: 'scale(2)', }} />
            </IconButton>

            {/* contains cards */}
            <Box sx={{
                height: "90vh",
                // width: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* iterate over each cell in cells: INITIALIZATION*/}
                {cells.map((cell, index) => (
                    <Box
                        key={`cell-${index}`}  //creates unique identifier for each cell
                        sx={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            display: currentPage === index ? "block" : "none", //checks if card is index (should be displayed) and only displays it if true
                        }} >
                        {/* slide animation */}
                        <Slide direction={slideDirection} in={currentPage === index} >
                            {/* format cards as stack */}
                            <Stack
                                spacing={"0%"}
                                direction="row"
                                alignContent="center"
                                justifyContent="center"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "1000",
                                }}>
                                {cells.slice(
                                    index * cellsPerPage,
                                    index * cellsPerPage + cellsPerPage
                                )}
                            </Stack>
                        </Slide>
                    </Box>
                ))}
            </Box>
            {/* handle previous page (<) button click */}
            < IconButton onClick={handleNextPage}
                sx={{ margin: "0%", }} >
                <NavigateNext sx={{ color: "white", transform: 'scale(2)', }} />
            </IconButton>
        </Box >
    );

}

export default Carousel;