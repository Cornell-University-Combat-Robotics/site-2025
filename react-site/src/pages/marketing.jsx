import { Box, Typography } from "@mui/material";
import marketing_photo from "../assets/marketing-photo.jpg";

/*Marketing subteam page within Team Page*/
export default function Marketing(){
    return(
        <>
        <Box sx={{position: 'relative', overflow: 'hidden'}}> 
            <Box sx={{
                overflow: 'hidden', width: '100%', height: 'auto'
            }}>
                {/*TODO: zoom in*/}
                <img src={marketing_photo} style={{width: '100%', height: '100%'}} />
            </Box>

            <Box sx={{
                position: 'absolute', //absolute position to allow text below to overlap image
                width: '100%',
                height: '100%', 
                backgroundImage: `url(${marketing_photo})`, // Use the image as a background
                backgroundRepeat: 'repeat', // Repeat the image both horizontally and vertically -> same blurred image will render as you scroll down
                backgroundSize: 'auto', // Ensure the image retains its original size in repeats
                filter: 'blur(5px)',
                opacity: 0.5,
                zIndex: -1 //ensures text is above image
            }}> </Box>

            {/*Text/Components to be placed above blurred image*/}
            <Typography sx={{position: 'absolute', fontSize: 70, top: 100, left: 100}}>
                {"MARKETING"}
            </Typography>


        </Box>
        </>
    );
}
