import React, { useState, useEffect } from "react";
import { Box, IconButton, Slide, Stack } from "@mui/material";
import { NavigateBefore, NavigateNext, PropaneSharp } from "@mui/icons-material";
import Cell from "./Timeline1Cell.tsx";

function Carousel() {
    //stores cells (that are displayed in timeline)
    const [cells, setCells] = useState<React.ReactElement[]>([]);
    //current cell that is displayed
    const [currentPage, setCurrentPage] = useState(0);
    //determines animation direction (slide left or slide right)
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

    //how many cards per page
    const cellsPerPage = 3;
    //dummy array of cells (empty)
    const duplicateCards: React.ReactElement[] = Array.from(
        { length: 10 },
        (_, i) => <Cell
            date='October 2019'
            description="We’re Combat Robotics @ Cornell (CRC), and we build small-scale combat 
                  robots, much like those featured on the TV show Battlebots. Each year, we build two 12lb mechanical bots and one 3lb 
                  battlebot with AI based functionality."
            image={"../assets/background-pictures/team-photo-hearts.png"}
            key={1} />
    );

    // handle button press for scroll left (->)
    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage + 1);
    }

    // handle button press for scroll right (<-)
    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage - 1);
    }

    // sets initial data (blank timeline)
    useEffect(() => {
        setCells(duplicateCards);
    }, []); //empty array means this only runs once
    // need to link actual contents of cells to cells array

    return (
        // contains entire carousel
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "110%",
            backgroundColor: "green"
        }}>
            {/* handle previous page (<) button click */}
            <IconButton onClick={handlePrevPage}
                sx={{ margin: 5, }}
                disabled={currentPage === 0}> {/* disables this button when you are at the beginning of the array (cannot go back to -1) */}
                <NavigateBefore sx={{ color: "white" }} />
            </IconButton>

            {/* contains cards */}
            <Box sx={{
                height: "85vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* iterate over each cell in cells */}
                {cells.map((cell, index) => (
                    <Box
                        key={`cell-${index}`}  //creates unique identifier for each cell
                        sx={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "space-between",
                            backgroundColor: "purple",
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
                sx={{ margin: 5, }}
                disabled={currentPage >= Math.ceil((cells.length || 0) / cellsPerPage) - 1}
            // disables this button when you are at the beginning of the array (cannot go back to -1)
            >
                <NavigateNext sx={{ color: "white" }} />
            </IconButton>
        </Box >
    );

}

export default Carousel;