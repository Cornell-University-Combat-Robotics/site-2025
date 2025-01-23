import { Box, Stack, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

/*
This icon was hella scuffed so we decided to get rid of it.

const TikTokIcon = () => {
  return (
    <svg
      fill={"white"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="9%"
      height="9%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};
*/

const Footer = ({ setHeight }) => {
  {/** refContainer is used to export the height of the footer so that pages
    such as the game page can be sized appropriately */ }
  const refContainer = useRef();
  useEffect(() => {
    if (refContainer.current) {
      // console.log("Footer logging height");
      // console.log("height: " + refContainer.current.offsetHeight);
      setHeight(refContainer.current.offsetHeight);
    }
  }, []);
  return (
    <Box
      id="footer-wrapper"
      sx={{
        width: "100%",
        bottom: "0px",
        display: "flex",
        height: "60px",
        //justifyContent: "center",
        backgroundColor: "#b11c1c",
      }}
      ref={refContainer}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "2px",
          flexDirection: "row",
          ml: "10px",
        }}
      >
        {/* Not necessary, but creating a FooterIcon component so we don't have to copy paste everything here would be nice. */}
        <IconButton aria-label="Email">
          <a href="mailto:combatrobotics@cornell.edu">
            <EmailIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a
            href="https://www.instagram.com/combatroboticscornell/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Facebook">
          <a
            href="https://www.facebook.com/cucombatrobotics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/bigred-hacks-698107269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Cornell-University-Combat-Robotics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
        {/*<IconButton aria-label="TikTok">
          <a
            href="https://www.tiktok.com/@combatroboticsatcornell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTokIcon />
          </a>
        </IconButton>*/}
        <IconButton aria-label="YouTube">
          <a
            href="https://www.youtube.com/channel/UCRoomTf0RRs6DNDzucEKDMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ color: "white", fontSize: "25px" }} />
          </a>
        </IconButton>
      </Stack>
      <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%" mr="50px">
        <Stack>
          <Typography variant="body2" color="white">
            This organization is a registered student organization of Cornell University.
          </Typography>
          <a href="/accessibility">
            <Typography color="white" sx={{ textDecoration: 'underline' }}>
              Accessibility Assistance
            </Typography>
          </a>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
