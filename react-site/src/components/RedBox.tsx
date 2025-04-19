import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MobileContext } from "../App.jsx"; 

export interface RedBoxProps {
  title: string; // Sponsor Us | Join Us
  text: string; // Description of the box
  word: string; // SPONSOR | APPLY
  link: string; // Link to the Sponsors and Apply page
  mTop: string; // margin for top and bottom
  mSide: string; // margin for left and right
}

export default function RedBox(props: RedBoxProps) {
  const isMobile = useContext(MobileContext);

  return (
    <Box bgcolor="#820002" sx={{ borderRadius: 5, my: `${props.mTop}`, mx: `${props.mSide}` }}>
      <Typography variant={isMobile ? "mobileBody" : "desktopBody"} sx={{ pt: '5%', pb: '2%', textAlign: "center" }} display="block">{props.title}</Typography>
      <Typography variant={isMobile ? "mobileBody" : "desktopBody"} sx={{ pb: '2%', textAlign: "center", fontWeight: 'bold' }} display="block">{props.text}</Typography>
      {/* TODO: Restrict link area to only the button. */}
      <Box sx={{ paddingBottom: `${props.mTop}` }}>
        <Link to={props.link} style={{ color: "inherit" }}>
          {/* button */}
          <Box bgcolor="rgba(255, 94, 94, 0.5)" sx={{ borderRadius: 12, width: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", boxShadow: "3px 5px 0px rgba(0, 0, 0, 0.4)" }}>
            <Typography variant={isMobile ? "mobileBody" : "desktopBody"} sx={{ textAlign: "center", padding: 1 }}>{props.word}</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
