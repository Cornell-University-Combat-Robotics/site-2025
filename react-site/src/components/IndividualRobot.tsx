import { Box, Typography, Stack, CardMedia, Paper, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useParams } from 'react-router-dom';
import { robotData } from "../data/robotData.ts";
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import Indiv3lb from "./Indiv3lb.tsx";
import IndivNormal from "./IndivNormal.tsx";

/* **For each individual robot page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

  This file serves as a general component for individual robot pages. The idea is that it will format and render an IndividualRobot page
  completely, using the specific input passed in. This way, all the actual individual robot pages need to do is pass in the correct data to this reusable component.
*/
export default function IndividualRobot() {
  const { robotId } = useParams();
  const robotInfo = robotData[robotId || ""];
  const is3lb = robotInfo.is3lb;

  if (!robotInfo) {
    return <div>Robot not found</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  //controls when image is blown to full size of the screen (when gallery button clicked)
  //array with length == size of visible images
  const [fullImage, setFullImage] = useState([false, false, false]); //false: no image selected as default

  //note: even if number of images visible on screen changes, its still fine, cuz it gets first index
  const handleImageClick = [
    () => setFullImage([true, false, false]),
    () => setFullImage([false, true, false]),
    () => setFullImage([false, false, true]),
  ];

  useEffect(() => {
    //checks if fullImage state != [false, false, false]
    if (!fullImage.every(image => !image)) {
      //prevents scrolling when image is blown up
      document.body.style.overflow = 'hidden'
    } else {
      //re-activates scrolling when image is removed
      document.body.style.overflow = 'auto'
    }
  }, [fullImage]);

  //controls number of images in the visible list in the gallery section
  const [numImages, setNumImages] = useState(3);

  {/* Updates array of visible images in gallery carousell: 3 images at once.
  Requires "..." to combine two slices into a single array */}
  const visibleImages = [
    //2nd parameter of slice: ensures that end index of this single array slice does not exceed gallery length
    ...robotInfo.gallery.slice(currentIndex % robotInfo.gallery.length, Math.min(currentIndex + numImages, robotInfo.gallery.length)),
    //handles overflow images -> if gallery length exceeded in first array slice
    ...robotInfo.gallery.slice(0, Math.max(0, (currentIndex + numImages) - robotInfo.gallery.length))
  ];

  //prevIndex: refers to current index (before updated)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % robotInfo.gallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + robotInfo.gallery.length) % robotInfo.gallery.length);
  };

  /** true: you WANT to remove the fully blown image*/
  const [removeFullImage, setRemoveFullImage] = useState(false);

  useEffect(() => {
    /** Side effect logic: reset blown image state
    NOTE: since this changes the dependency, useEffect will re-run!
    Must wrap side effects in conditional logic to prevent infinite looping */
    if (removeFullImage) {
      setFullImage([false, false, false])
      setRemoveFullImage(false)
    }
  }, [removeFullImage]); // Dependency array: Runs when any listed dependency changes (aka. when clicking anywhere during full image screen)

  //gets theme
  const theme = useTheme();

  //useMediaQuery() returns boolean based on if the size of screen is medium or smaller
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  const isMDToLG = useMediaQuery(theme.breakpoints.between("md", "lg"))
  const isLG = useMediaQuery(theme.breakpoints.up("lg"))

  useEffect(() => {
    if (isMD) {
      setNumImages(1)
    } else if (isMDToLG) {
      setNumImages(2)
    } else {
      setNumImages(3)
    }
  }, [isMD, isMDToLG, isLG]); //dependecy array: only activates listener when any of these values change

  return (
    is3lb ? <Indiv3lb></Indiv3lb> : <IndivNormal></IndivNormal>
  )
}