import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton, Slide, Stack, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import Cell from "./TimelineCell.tsx";
import CellData from "../data/timeline1.ts";
import { MobileContext } from "../App.jsx";


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

    const isMobile = useContext(MobileContext);
    //how many cards per page
    const cellsPerPage = isMobile ? 1 : 3;

    const pages = cells.length / cellsPerPage;

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

    const handleDotChange = (event) => {
        setCurrentPage(Number(event.target.value)); // when user clicks on a circle, it moves the timeline to that number
        console.log("Number: " + Number(event.target.value));
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
                    height: isMobile ? '65vh' : "90vh", // if you change this, also change it in TimelineCell 
                    justifyContent: "center",
                    alignItems: "center",
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

            {/* Dots */}
            {!isMobile &&
                <RadioGroup row value={currentPage} onChange={handleDotChange} sx={{
                    mt: "-5%", justifyContent: "center",
                    alignItems: "center", mb: "1%", gap: "1%"
                }}>
                    {[...Array(pages)].map((_, index) => (
                        <FormControlLabel
                            key={index}
                            value={String(index)}
                            control={<Radio size="small"
                                sx={{ color: "white", '&.Mui-checked': { color: "white" }, transform: 'scale(2)', mx: "1%" }} />}
                            label=""
                        />
                    ))}
                </RadioGroup>
            }
        </Box>
    );

}

export default Carousel;