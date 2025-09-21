import React, { useEffect, useRef } from "react";
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import logo_00000 from "../assets/logo-frames/final_00000.png";
import logo_00001 from "../assets/logo-frames/final_00001.png";
import logo_00002 from "../assets/logo-frames/final_00002.png";
import logo_00003 from "../assets/logo-frames/final_00003.png";
import logo_00004 from "../assets/logo-frames/final_00004.png";
import logo_00005 from "../assets/logo-frames/final_00005.png";
import logo_00006 from "../assets/logo-frames/final_00006.png";
import logo_00007 from "../assets/logo-frames/final_00007.png";
import logo_00008 from "../assets/logo-frames/final_00008.png";
import logo_00009 from "../assets/logo-frames/final_00009.png";
import logo_00010 from "../assets/logo-frames/final_00010.png";
import logo_00011 from "../assets/logo-frames/final_00011.png";
import logo_00012 from "../assets/logo-frames/final_00012.png";
import logo_00013 from "../assets/logo-frames/final_00013.png";
import logo_00014 from "../assets/logo-frames/final_00014.png";
import logo_00015 from "../assets/logo-frames/final_00015.png";
import logo_00016 from "../assets/logo-frames/final_00016.png";
import logo_00017 from "../assets/logo-frames/final_00017.png";
import logo_00018 from "../assets/logo-frames/final_00018.png";
import logo_00019 from "../assets/logo-frames/final_00019.png";
import logo_00020 from "../assets/logo-frames/final_00020.png";
import logo_00021 from "../assets/logo-frames/final_00021.png";
import logo_00022 from "../assets/logo-frames/final_00022.png";
import logo_00023 from "../assets/logo-frames/final_00023.png";
import logo_00024 from "../assets/logo-frames/final_00024.png";
import logo_00025 from "../assets/logo-frames/final_00025.png";
import logo_00026 from "../assets/logo-frames/final_00026.png";
import logo_00027 from "../assets/logo-frames/final_00027.png";
import logo_00028 from "../assets/logo-frames/final_00028.png";
import logo_00029 from "../assets/logo-frames/final_00029.png";
import logo_00030 from "../assets/logo-frames/final_00030.png";
import logo_00031 from "../assets/logo-frames/final_00031.png";
import logo_00032 from "../assets/logo-frames/final_00032.png";
import logo_00033 from "../assets/logo-frames/final_00033.png";
import logo_00034 from "../assets/logo-frames/final_00034.png";
import logo_00035 from "../assets/logo-frames/final_00035.png";
import logo_00036 from "../assets/logo-frames/final_00036.png";
import logo_00037 from "../assets/logo-frames/final_00037.png";
import logo_00038 from "../assets/logo-frames/final_00038.png";
import logo_00039 from "../assets/logo-frames/final_00039.png";
import logo_00040 from "../assets/logo-frames/final_00040.png";
import logo_00041 from "../assets/logo-frames/final_00041.png";
import logo_00042 from "../assets/logo-frames/final_00042.png";
import logo_00043 from "../assets/logo-frames/final_00043.png";
import logo_00044 from "../assets/logo-frames/final_00044.png";
import logo_00045 from "../assets/logo-frames/final_00045.png";
import logo_00046 from "../assets/logo-frames/final_00046.png";
import logo_00047 from "../assets/logo-frames/final_00047.png";
import logo_00048 from "../assets/logo-frames/final_00048.png";
import logo_00049 from "../assets/logo-frames/final_00049.png";




/*
Implementation process:
- import logo video as picture frames with high frame rate
- animate automatically once about us page loads 
- should be split between a fixed time duration -- e.g. 3 seconds: meaning if 180 frames, then 60 per second

- Difference from Nardo:
    - not scrolling
    - 

- Components needed: 
    - preloaded images
    - html element, canvas, 2D rendering context for canvas
*/

//note: read ScrollControlledVideo.tsx for documentation
const LogoAnimation: React.FC = () => {
    const isMobile = useContext(MobileContext);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    //change later
    const frameCount = 50;

    const logoFrames = [
        logo_00000,
        logo_00001,
        logo_00002,
        logo_00003,
        logo_00004,
        logo_00005,
        logo_00006,
        logo_00007,
        logo_00008,
        logo_00009,
        logo_00010,
        logo_00011,
        logo_00012,
        logo_00013,
        logo_00014,
        logo_00015,
        logo_00016,
        logo_00017,
        logo_00018,
        logo_00019,
        logo_00020,
        logo_00021,
        logo_00022,
        logo_00023,
        logo_00024,
        logo_00025,
        logo_00026,
        logo_00027,
        logo_00028,
        logo_00029,
        logo_00030,
        logo_00031,
        logo_00032,
        logo_00033,
        logo_00034,
        logo_00035,
        logo_00036,
        logo_00037,
        logo_00038,
        logo_00039,
        logo_00040,
        logo_00041,
        logo_00042,
        logo_00043,
        logo_00044,
        logo_00045,
        logo_00046,
        logo_00047,
        logo_00048,
        logo_00049,
    ];


    const currentFrame = (index : number) : string => logoFrames[index];
    const preloadedImages: (HTMLImageElement | null)[] = [];

    const preloadImages = () : void => {
        for(let i=0; i<frameCount; i++){
            const img = new Image();
            img.src = currentFrame(i);
            preloadedImages[i] = img;
        }
    }

    /** temporary image to just set canvas size */
    const tempImg = new Image();
    tempImg.src = currentFrame(0); //arbitrary frame

         /**
         * Initial time when animation starts
         * 
         * useRef: Persists for the lifetime of the react component, allows us to store mutable data without causing re-renders.
         * why not useState: updating state triggers a re-render
         */
    const startTime = useRef<number | null>(null);

    /**
    * useEffect lets you run side effects after React renders the component. 
    * e.g. time based animation
    */
    useEffect(() => {
        preloadImages();

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext("2d");
        if(!context) return;
        contextRef.current = context;

        //setting canvas size using temporary image
        //draws the very first frame before the user scrolls
        tempImg.onload = function(){
            canvas.width = tempImg.width;
            canvas.height = tempImg.height;
            context.drawImage(tempImg, 0, 0);
        }

        /** updates current image we want to render based on fixed time duration */
        const updateImage = (index : number) : void => {
            const curImg = preloadedImages[index];
            if(!curImg) return;

            if(contextRef.current && canvas){
                canvas.width = curImg.width;
                canvas.height = curImg.height;
                contextRef.current.drawImage(curImg, 0, 0);
            }
        }

        /**
         * updates image based on time duration
         * @param timeframe the current time provided automatically by requestAnimationFrame
         */
        const animateLogo = (timeframe : number) : void => {
            if (!startTime.current) startTime.current = timeframe;
            const elapsed = (timeframe - startTime.current) / 1000; //convert ms to seconds
            const maxDuration = 2; //2 seconds to fully animate
            const curFrameIndex = Math.min(frameCount, Math.ceil((elapsed / maxDuration) * frameCount));

            updateImage(curFrameIndex);

            if(elapsed < maxDuration) requestAnimationFrame(animateLogo);
        }
        requestAnimationFrame(animateLogo);
            console.log(canvas.width)
            console.log(canvas.height)


    }, []) //no dependencies, only renders once

    return <canvas ref={canvasRef} id="logo-animation" style={{ width: isMobile ? "150vw": "80vw" }}/>;
};

export default LogoAnimation;