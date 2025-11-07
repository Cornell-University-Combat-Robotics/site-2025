import React from "react";
import { Box, Typography } from "@mui/material";

export default function PageNotFound() {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ height: '100vh', mx: '10%' }}>
            <Typography variant="mobileH1"> 404 </Typography>
            <Typography variant="mobileBody"> Your page was not found. Please double-check your link and try again. </Typography>
        </Box>);
}