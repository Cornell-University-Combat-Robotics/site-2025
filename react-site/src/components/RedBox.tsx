import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface RedBoxProps {
  title: string; // Sponsor Us | Join Us
  text: string; // Description of the box
  word: string; // SPONSOR | APPLY
  link: string; // Link to the Sponsors and Apply page
  mTop: string; // margin for top and bottom
  mSide: string; // margin for left and right
}

export default function RedBox(props: RedBoxProps) {
  return (
    <Box bgcolor="#820002" sx={{ borderRadius: 5, my: `${props.mTop}`, mx: `${props.mSide}` }}>
      <Typography variant="body2" sx={{ pt: '5%', pb: '2%', textAlign: "center" }}>{props.title}</Typography>
      <Typography variant="body2" sx={{ pb: '5%', textAlign: "center", fontWeight: 'bold' }}>{props.text}</Typography>
      {/* TODO: Restrict link area to only the button. */}
      <Box sx={{ paddingBottom: `${props.mTop}` }}>
        <Link to={props.link} style={{ color: "inherit" }}>
          {/* button */}
          <Box bgcolor="#B23030" boxShadow={7} sx={{ borderRadius: 12, width: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <Typography variant="h4" sx={{ textAlign: "center", padding: 1, fontFamily: 'Josefin Sans' }}>{props.word}</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
