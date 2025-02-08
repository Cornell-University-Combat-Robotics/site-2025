import React, { useEffect, useRef } from "react";

const HeroAnimation: React.FC = () => {
  const html = document.documentElement;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // Set this to the number of frames there are in the video
  const frameCount = 180;

  // Set this to the path where the folder of the frames are
  const currentFrame = (index: number): string =>
    `/src/assets/nardo-explode-frames/${index.toString().padStart(4, "0")}.png`;

  const preloadImages = (): void => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image();
  img.src = currentFrame(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;

    img.onload = function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number): void => {
      img.src = currentFrame(index);
      img.onload = () => {
        if (contextRef.current && canvas) {
          canvas.width = img.width;
          canvas.height = img.height;
          contextRef.current.drawImage(img, 0, 0);
        }
      };
    };

    // this function controls how far the video has played/which frame you are on
    // depending on how much you have scrolled
    // ScrollTop should be the size of the whole page?
    // maxScrollTop is how much of the screen you want to have scrolled past before 
    // the video starts scrolling
    const handleScroll = (): void => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = window.innerHeight * 0.8;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);

    preloadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} id="robot-animation"></canvas>;
};

export default HeroAnimation;
