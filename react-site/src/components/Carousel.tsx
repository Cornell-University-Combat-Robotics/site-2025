import React, { useState, useEffect } from "react";
import { Box, IconButton, Slide, Stack } from "@mui/material";
import { NavigateBefore, NavigateNext, Lens, RadioButtonUnchecked } from "@mui/icons-material";
import Cell from "./TimelineCell.tsx";
import CellData from "../data/timeline1.ts";


export interface Carousel1 {
    numCells: number,
}

// Carousel makes the image carousel for the About page.
// NOTE: This carousel does not support full wrap around if you plan to have 
// a number of cells that is not divisible by 3, the last cell will just be 
// a giant image. 
function Carousel(props: Carousel1) {
    //stores cells (that are displayed in timeline)
    const [cells, setCells] = useState<React.ReactElement[]>([]);
    //current cell that is displayed
    const [currentPage, setCurrentPage] = useState(0);
    //determines animation direction (slide left or slide right)
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

    //how many cards per page
    const cellsPerPage = 3;

    {
        CellData.map((cell) => (
            <Cell {...cell} />
        ))
    }

    const refreshCards: React.ReactElement[] = CellData.map((cell) => (
        <Cell {...cell} />
    ));

    // handle button press for scroll left (->)
    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(refreshCards.length / cellsPerPage)); //support wraparound
    }

    // handle button press for scroll right (<-)
    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(refreshCards.length / cellsPerPage)) % Math.ceil(refreshCards.length / cellsPerPage));
        // prevpage is passed in through useState because it is a function
    }

    // sets initial data (blank timeline)
    useEffect(() => {
        setCells(refreshCards);
    }, []);

    return (
        <Box>
            {/* contains entire carousel, items added to this box go to the right (row) */}
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
                    sx={{ margin: "2%" }}>
                    <NavigateBefore sx={{ color: "white", transform: 'scale(2)', }} />
                </IconButton>

                {/* contains cards */}
                <Box sx={{
                    height: "90vh",
                    width: "100vw",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#3D0E0E',
                    zIndex: "-10"
                }}>
                    {/* iterate over each panel: 3 CELLS! must use Array.from because we go by cells */}
                    {Array.from({ length: Math.ceil(cells.length / cellsPerPage) }).map((_, index) => (
                        <Box
                            key={`cell-${index}`}  //creates unique identifier for each row
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
                    sx={{ margin: "2%", }} >
                    <NavigateNext sx={{ color: "white", transform: 'scale(2)', }} />
                </IconButton>
            </Box >
            {/* circles on bottom */}
            <Box sx={{ mt: "-5%" }}>
                <Lens sx={{ color: "white" }}></Lens>
                <RadioButtonUnchecked sx={{ color: "white" }}></RadioButtonUnchecked>
                <RadioButtonUnchecked sx={{ color: "white" }}></RadioButtonUnchecked>
            </Box>
            <Box sx={{ mt: "2%" }} />

        </Box>
    );

}

export default Carousel;