import { Box, Typography, Button } from "@mui/material";
import marketing_photo from "../assets/marketing-photo.jpg";
import TeamMemberList from "../components/MemberList";

/*Marketing subteam page within Team Page*/
export default function Marketing(){

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Business", desc: "Generates revenue, maintains corporate relations, delivers pitches, and identifies opportunities for members and the team.\nThis subsystem strives to expand our network and secure the resources necessary for CRC's growth." },
        { name: "Software", desc: "Develops and maintains CRC’s website and implements other promotional projects such as our video games.\nSoftware seeks to incorporate members' personalities into our projects and showcase the appeal of our team." },
        { name: "Media", desc: "Manages content for CRC's social media presence, which includes photography, videography, writing, and editing.\nThis subsystem aims to create engaging posts that reflect the team's personality and encourage member creativity." },
        { name: "Design", desc: "Encompasses art and graphic design for CRC’s public image and merchandise, including trading cards, stickers, clothing, and more.\nDesign fosters an environment for members to express their passions, turning our robots into beloved characters." }
    ];
    

    return(
        <>
        <Box sx={{position: 'relative', overflow: 'hidden'}}> 

            {/*First image unblurred*/}
            <Box sx={{
                overflow: 'hidden', width: '100%', height: 'auto'
            }}>
                {/*TODO: zoom in*/}
                <img src={marketing_photo} style={{width: '100%', height: '100%'}} />
            </Box>

            {/* Effect: sets first image as unblurred background for all other components within this box 
             Note: background image will only be displayed if there are components in the box (e.g if box has no components, no background image will be rendered) 
             */}
            <Box sx={{
                position: 'relative', 
                width: '100%', 
                height: '100%', 
                backgroundImage: `url(${marketing_photo})`, // Use the image as a background.
                backgroundRepeat: 'repeat', // Repeat the image both horizontally and vertically -> same blurred image will render as you scroll down
                backgroundSize: 'contain', // Ensure the image retains its original size in repeats
                backgroundPosition: 'top' // top of image will render before bottom
            }}> 
                {/*backdrop filter applies to the PARENT of the box (the "backdrop"). This makes the background image blurry & darker w/o changing the text components*/}
                <Box sx={{position: 'relative', zIndex: 1, padding: 20, backdropFilter: 'blur(5px) brightness(0.5)'}}>
                    {/*This box is formatted using column that contains both the Marketing title & its brief blurb*/}
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        {/*Text/Components to be placed above blurred image*/}
                        <Typography sx={{fontSize: 80, zIndex: 1, marginRight: 10, textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)'}}>
                            {"MARKETING"}
                        </Typography>

                        <Typography sx={{fontSize: 20, textAlign: 'left'}}>    
                            {"Within the Marketing Subteam, we specialize in promoting and enhancing CRC's brand. Our mission is to strengthen CRC's presence and reputation, elevating it beyond just a robotics team."}
                        </Typography>
                    </Box>

                    <Typography sx={{fontSize: 20, textAlign: "left", marginTop: 10}}>
                        {"Our approach to marketing revolves around four critical subsystems:"}
                    </Typography>

                    {/*This box contains a row of buttons for the different subsystems of the subteam.
                    change to stack -> more conventional*/}
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3, marginTop: 10}}>
                        {subsystems.map((subsystem, index) => (
                            
                            // TODO: on click: button renders subteam description
                            <Button key={index} sx={{flex: 1, //flex: all buttons made same size
                                height: 180, // TODO: width doesnt seem to change even if i specify width
                                backgroundColor: '#943131', textAlign: 'center', padding: 5, borderRadius: 2}}
                                onClick={() => {}}
                            >
                                <Typography sx={{fontSize: 30, color: 'white'}}>
                                    {subsystem.name}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    {/*TODO: change all to body 1*/}
                    <Typography variant="body1" sx={{textAlign: "left", marginTop: 10}}>
                        {"While the subsystems are distinct, members are able to work interchangeably among them."}
                    </Typography>

                    <Typography sx={{fontSize: 30, marginTop: 10}}>
                        {"If you are more interested in..."}
                    </Typography>

                    <Typography sx={{fontSize: 20, marginTop: 5}}>
                        {"• Robot construction. Our Kinetic or Sportsman subteams may be a better fit"}<br />
                        {"• Programming or wiring, our Autonomous subteam may be a better fit"}
                    </Typography>

                    <Typography sx={{fontSize: 45, textAlign: "left", marginTop: 10}}>
                        {"Meet the team"}
                    </Typography>

                    <TeamMemberList teamName={"Marketing"} />

                </Box>
        
            </Box>



        </Box>
        </>
    );
}
