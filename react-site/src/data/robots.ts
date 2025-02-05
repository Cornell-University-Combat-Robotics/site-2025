import { RobotCardProps } from "../components/RobotCard";
import nardoPhoto from "/src/assets/12lb/nardo/transparent.png"; // VSCode says it "cannnot find the module" for this file, which clearly is bs
import slugmaPhoto from "/src/assets/3lb/the_slugma_profile.png";
import batbotPhoto from "/src/assets/3lb/the_batbot.png";
import swissPhoto from "/src/assets/3lb/the_swiss_slinger_profile.png";
import hestrPhoto from "/src/assets/3lb/the_hestr_profile.png";
import beaterPhoto from "/src/assets/12lb/beater-b-barker/transparent.png";
import louisPhoto from "/src/assets/12lb/louis/transparent.png";
import rosiePhoto from "/src/assets/12lb/rosie/rosie.png";
import florencePhoto from "/src/assets/12lb/florence/florence.png";
import richardPhoto from "/src/assets/12lb/richard/richard-v1.png";
import lancePhoto from "/src/assets/12lb/lance/lance.png";
import mannyPhoto from "/src/assets/12lb/manny/manny.png";
import donatelloPhoto from "/src/assets/12lb/donatello/donatello.png";
import kennyPhoto from "/src/assets/12lb/kenny/kenny-removebg-preview.png";
import gorgeruselPhoto from "/src/assets/12lb/gorge-rusel/gorge-rusel.png";
import lbilletPhoto from "/src/assets/12lb/l-billet/l-billet.png";
import rosiejrPhoto from "/src/assets/12lb/rosie-junior/rosie-junior.png";
import twoFacePhoto from "../assets/12lb/two-face/two-face-1.png";
import biggieCheesePhoto from "../assets/12lb/biggie-cheese/biggie-cheese.png"; 
import blackBeetlePhoto from "../assets/12lb/black-beetle/black-beetle.png";
import bobbyBobboPhoto from "../assets/12lb/bobby-bobbo/bobby-bobbo.png";
import crcChanPhoto from "../assets/12lb/crc-chan/crcchan.png";
import crcuitPhoto from "../assets/12lb/crcuit/crcuit.png";
import dumbAndDumberPhoto from "../assets/12lb/dumb-and-dumber/dumb-and-dumber.png";
import fortunateSonPhoto from "../assets/12lb/fortunate-son/fortunate-son.png";
import hanakoPhoto from "../assets/12lb/hanako/hanako.png";
import heaveHoPhoto from "../assets/12lb/heave-ho/heave-ho.png";
import idiotSandwichPhoto from "../assets/12lb/idiot-sandwich/idiot-sandwich.png";
import knucklesPhoto from "../assets/12lb/knuckles/knuckles.png";
import mommyIssuesPhoto from "../assets/12lb/mommy-issues/mommy-issues.png";
import perryBotPhoto from "../assets/12lb/perrybot/perrybot.png";
import rockyPhoto from "../assets/12lb/rocky/rocky.png";
import rolypolyPhoto from "../assets/12lb/rolypoly/rolypoly.png";
import samuraiPhoto from "../assets/12lb/samurai/robot_cad_final.png";
import scorpionPhoto from "../assets/12lb/scorpion/scorpion-3.png";
import stevePhoto from "../assets/12lb/steve/steve.png";
import testBoxPhoto from "../assets/12lb/test-box/test-box.png";
import wabbitPhoto from "../assets/12lb/wabbit/wabbit.png";


/* 
  This file holds the necessary data for the robots. The data is stored in a dictionary (record), where the key is the category of the robot (Retired, Three_lb, etc).
  The value is an array of RobotCardProps objects, which are used to create the RobotCard components.
  Only details needed for the RobotCard component are stored here. For more detailed information, see the individual robot pages.
*/
const RobotsData: Record<string, RobotCardProps[]> = {
  Retired: [
    {
      name: "Beater B. Barker",
      subteam: ["Kinetic", "2023-2024"],
      desc: "Beater desc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: beaterPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Nardo",
      subteam: ["Sportsman", "2023-2024"],
      desc: "The second kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Louis XVII",
      subteam: ["Autonomous", "2023-2024"],
      desc: "The third kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: louisPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Rosie",
      subteam: ["Kinetic", "2022-2023"],
      desc: "The fourth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: rosiePhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Florence",
      subteam: ["Sportsman", "2022-2023"],
      desc: "The fifth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: florencePhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Richard",
      subteam: ["Kinetic", "2021-2023"],
      desc: "The sixth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: richardPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Lance",
      subteam: ["Sportsman", "Autonomous", "2021-2022"],
      desc: "The seventh kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: lancePhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Manny",
      subteam: ["Sportsman", "Autonomous", "2021-2022"],
      desc: "The eighth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: mannyPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Donatello",
      subteam: ["2019-2021"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: donatelloPhoto,
      link: "/robots/beater",
      color: 0,
    },
  ],
  Mini: [
    {
      name: "Kenny",
      subteam: ["Spring 2024"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: kennyPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Gorge Rusel",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: gorgeruselPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "L Billet",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: lbilletPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Rosie Junior",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: rosiejrPhoto,
      link: "/robots/beater",
      color: 0,
    },
  ],
  Three_lb: [
    {
      name: "Slugma",
      subteam: ["FA '24"],
      desc: "",
      image: slugmaPhoto,
      link: "/robots/slugma",
      color: 0,
    },
    {
      name: "Fangular Momentum",
      subteam: ["FA '24"],
      desc: "",
      image: batbotPhoto,
      link: "/robots/batbot",
      color: 1,
    },
    {
      name: "Dauður Hestr",
      subteam: ["FA '24"],
      desc: "",
      image: hestrPhoto,
      link: "/robots/hestr",
      color: 0,
    },
    {
      name: "Two Face",
      subteam: ["SP '24"],
      desc: "",
      image: twoFacePhoto,
      link: "/robots/3lb_twoface",
      color: 1,
    },
    {
      name: "Biggie Cheese",
      subteam: ["SP '24"],
      desc: "",
      image: biggieCheesePhoto,
      link: "/robots/biggie-cheese",
      color: 0,
    },
    {
      name: "Black Beetle",
      subteam: ["SP '24"],
      desc: "",
      image: blackBeetlePhoto,
      link: "/robots/black-beetle",
      color: 1,
    },
    {
      name: "Bobby Bobbo",
      subteam: ["SP '24"],
      desc: "",
      image: bobbyBobboPhoto,
      link: "/robots/bobby-bobbo",
      color: 0,
    },
    {
      name: "CRC-Chan",
      subteam: ["SP '24"],
      desc: "",
      image: crcChanPhoto,
      link: "/robots/crc-chan",
      color: 1,
    },
    {
      name: "CRCuit",
      subteam: ["SP '24"],
      desc: "",
      image: crcuitPhoto,
      link: "/robots/crcuit",
      color: 0,
    },
    {
      name: "Dumb and Dumber",
      subteam: ["SP '24"],
      desc: "",
      image: dumbAndDumberPhoto,
      link: "/robots/dumb-and-dumber",
      color: 1,
    },
    {
      name: "Fortunate Son",
      subteam: ["SP '24"],
      desc: "",
      image: fortunateSonPhoto,
      link: "/robots/fortunate-son",
      color: 0,
    },
    {
      name: "Hanako",
      subteam: ["SP '24"],
      desc: "",
      image: hanakoPhoto,
      link: "/robots/hanako",
      color: 1,
    },
    {
      name: "Heave Ho",
      subteam: ["SP '24"],
      desc: "",
      image: heaveHoPhoto,
      link: "/robots/heave-ho",
      color: 0,
    },
    {
      name: "Idiot Sandwich",
      subteam: ["SP '24"],
      desc: "",
      image: idiotSandwichPhoto,
      link: "/robots/idiot-sandwich",
      color: 1,
    },
    {
      name: "Knuckles",
      subteam: ["SP '24"],
      desc: "",
      image: knucklesPhoto,
      link: "/robots/knuckles",
      color: 0,
    },
    {
      name: "Mommy Issues",
      subteam: ["SP '24"],
      desc: "",
      image: mommyIssuesPhoto,
      link: "/robots/mommy-issues",
      color: 1,
    },
    {
      name: "PerryBot",
      subteam: ["SP '24"],
      desc: "",
      image: perryBotPhoto,
      link: "/robots/perrybot",
      color: 0,
    },
    {
      name: "Rocky",
      subteam: ["SP '24"],
      desc: "",
      image: rockyPhoto,
      link: "/robots/rocky",
      color: 1,
    },
    {
      name: "RolyPoly",
      subteam: ["SP '24"],
      desc: "",
      image: rolypolyPhoto,
      link: "/robots/rolypoly",
      color: 0,
    },
    {
      name: "Samurai",
      subteam: ["SP '24"],
      desc: "",
      image: samuraiPhoto,
      link: "/robots/samurai",
      color: 1,
    },
    {
      name: "Scorpion",
      subteam: ["SP '24"],
      desc: "",
      image: scorpionPhoto,
      link: "/robots/scorpion",
      color: 0,
    },
    {
      name: "Steve",
      subteam: ["SP '24"],
      desc: "",
      image: stevePhoto,
      link: "/robots/steve",
      color: 1,
    },
    {
      name: "Test Box",
      subteam: ["SP '24"],
      desc: "",
      image: testBoxPhoto,
      link: "/robots/test-box",
      color: 0,
    },
    {
      name: "Wabbit",
      subteam: ["SP '24"],
      desc: "",
      image: wabbitPhoto,
      link: "/robots/wabbit",
      color: 1,
    }
  ]
};

export default RobotsData;