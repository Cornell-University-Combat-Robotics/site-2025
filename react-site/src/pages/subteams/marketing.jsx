import SubteamPage from "../../components/SubteamPage";
import React from "react";

/*Marketing subteam page within Team Page*/
export default function Marketing() {

    //array for subsystem with key-value pairs
    const subsystems = [
        { name: "Business", desc: "Generates revenue, maintains corporate relations, delivers pitches, and identifies opportunities for members and the team.\n\nThis subsystem strives to expand our network and secure the resources necessary for CRC's growth." },
        { name: "Software", desc: "Develops and maintains CRC’s website and implements other promotional projects such as our video games.\n\nSoftware seeks to incorporate members' personalities into our projects and showcase the appeal of our team." },
        { name: "Media", desc: "Manages content for CRC's social media presence, which includes photography, videography, writing, and editing.\n\nThis subsystem aims to create engaging posts that reflect the team's personality and encourage member creativity." },
        { name: "Design", desc: "Encompasses art and graphic design for CRC’s public image and merchandise, including trading cards, stickers, clothing, and more.\n\nDesign fosters an environment for members to express their passions, turning our robots into beloved characters." }
    ];

    return (
        <SubteamPage
            name="Marketing"
            desc="Within the Marketing Subteam, we specialize in promoting and enhancing CRC's brand. Our mission is to strengthen CRC's presence and reputation, elevating it beyond just a robotics team."
            optionalDesc=""
            subsystemIntro="Our approach to marketing revolves around four critical subsystems:" //TODO: make bold
            subsystems={subsystems}
            otherInterest={[
                "• Robot construction. our Kinetic or Sportsman subteams may be a better fit",
                "• Programming or wiring, our Autonomous subteam may be a better fit"
            ]}
        />
    );
}
