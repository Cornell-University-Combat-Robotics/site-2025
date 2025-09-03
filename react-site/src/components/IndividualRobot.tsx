import { useParams } from 'react-router-dom';
import { robotData } from "../data/robotData.ts";
import Indiv3lb from "./Indiv3lb.tsx";
import IndivNormal from "./IndivNormal.tsx";
import { Box } from '@mui/material';

/* **For each individual robot page, you will need to add it to 'App.jsx'. This is so our app recognizes the path to the page and can render 
  it when the user navigates to it.

  This file serves as a general component for individual robot pages. The idea is that it will format and render an IndividualRobot page
  completely, using the specific input passed in. This way, all the actual individual robot pages need to do is pass in the correct data to this reusable component.
*/
export default function IndividualRobot() {
  const { robotId } = useParams();
  const robotInfo = robotData[robotId || ""];
  const is3lb = robotInfo.is3lb;

  return (
    is3lb ? <Indiv3lb FullImageRender={FullImageRender}></Indiv3lb> : <IndivNormal FullImageRender={FullImageRender}></IndivNormal>
  )
}

{/**Component that handles rendering of full image when image button is clicked*/ }
function FullImageRender({ imageName, setRemoveFullImage }) {
  {/** Event listener that handles mouse click. */ }
  const handleOutsideClick = (event) => {
    if (event.type === "click") { //only runs when mouse clicked
      setRemoveFullImage(true);
      /*
      NOTE: Reason why setFullImage([false, false, false]) was not used here.
      Problem lies in React's asynchronous re-rendering. When calling setFullImage here 
      -- 
      assuming there is corresponding useEffect event listener in parent function that is dependent on the state of full image 
      (aka. is activated when fullImage state is changed) 
      -- 
      the state of fullImage IS changed! Therefore, useEffect does start running.
      However, somehow, no re-rendering is called. One possibility could be that the call to re-rendering in setFullImage is
      lost along the way to useEffect.
      
      As opposed to this current implementation, where a helper constant is changed that allows setFullImage to be called WITHIN
      useEffect itself, React can respond immediately to the change in state & thus re-render the image (or lack thereof).
      */
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: '0', //need to declare at least one of top or bottom when using non-relative position
        left: '0', //need to declare at least one of left or right when using non-relative position
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center', //horizontally center
        alignContent: "center", //vertically center
        zIndex: 1 //note: only zIndex of components of same hierarchy level are compared! higher zIndex: appears more FRONT
      }}
      onClick={handleOutsideClick} //auto removes event listener when box component is removed
    >
      <img
        src={imageName}
        style={{
          maxWidth: '60vw', //if not taking up max, can just auto fit
          maxHeight: '70vh',
          minWidth: '30vw',
          minHeight: '40vh', //ensures minimum size -> if auto size of image too small, will increase, maintaining aspect ratio
          objectPosition: 'center',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}