import { RobotCardProps } from "../components/RobotCard";
import nardoPhoto from "/src/assets/retired/nardo/transparent.png"; // VSCode says it "cannnot find the module" for this file, which clearly is bs
import slugmaPhoto from "/src/assets/3lb/the_slugma_profile.png";
import batbotPhoto from "/src/assets/3lb/the_batbot.png";
import swissPhoto from "/src/assets/3lb/the_swiss_slinger_profile.png";
import hestrPhoto from "/src/assets/3lb/the_hestr_profile.png";
import beaterPhoto from "/src/assets/retired/beater-b-barker/transparent.png";
import louisPhoto from "/src/assets/retired/louis/transparent.png";
import rosiePhoto from "/src/assets/retired/rosie/rosie.png";
import florencePhoto from "/src/assets/retired/florence/florence.png";
import richardPhoto from "/src/assets/retired/richard/richard-v1.png";
import lancePhoto from "/src/assets/retired/lance/lance.png";
import mannyPhoto from "/src/assets/retired/manny/manny.png";
import donatelloPhoto from "/src/assets/retired/donatello/donatello.png";
import kennyPhoto from "/src/assets/mini/kenny/kenny-removebg-preview.png";
import gorgeruselPhoto from "/src/assets/mini/gorge-rusel/gorge-rusel.png";
import lbilletPhoto from "/src/assets/mini/l-billet/l-billet.png";
import rosiejrPhoto from "/src/assets/mini/rosie-junior/rosie-junior.png";
import twoFacePhoto from "../assets/3lb/two-face/two-face-1.png";
import biggieCheesePhoto from "../assets/3lb/biggie-cheese/biggie-cheese.png";
import blackBeetlePhoto from "../assets/3lb/black-beetle/black-beetle.png";
import bobbyBobboPhoto from "../assets/3lb/bobby-bobbo/bobby-bobbo.png";
import crcChanPhoto from "../assets/3lb/crc-chan/crcchan.png";
import crcuitPhoto from "../assets/3lb/crcuit/crcuit.png";
import dumbAndDumberPhoto from "../assets/3lb/dumb-and-dumber/dumb-and-dumber.png";
import fortunateSonPhoto from "../assets/3lb/fortunate-son/fortunate-son.png";
import hanakoPhoto from "../assets/3lb/hanako/hanako.png";
import heaveHoPhoto from "../assets/3lb/heave-ho/heave-ho.png";
import idiotSandwichPhoto from "../assets/3lb/idiot-sandwich/idiot-sandwich.png";
import knucklesPhoto from "../assets/3lb/knuckles/knuckles.png";
import mommyIssuesPhoto from "../assets/3lb/mommy-issues/mommy-issues.png";
import perryBotPhoto from "../assets/3lb/perrybot/perrybot.png";
import rockyPhoto from "../assets/3lb/rocky/rocky.png";
import rolypolyPhoto from "../assets/3lb/rolypoly/rolypoly.png";
import samuraiPhoto from "../assets/3lb/samurai/robot_cad_final.png";
import scorpionPhoto from "../assets/3lb/scorpion/scorpion-3.png";
import stevePhoto from "../assets/3lb/steve/steve.png";
import testBoxPhoto from "../assets/3lb/test-box/test-box.png";
import wabbitPhoto from "../assets/3lb/wabbit/wabbit.png";
import brunobotPhoto from "../assets/3lb/brunobot-lukebot/brunobot-lukebot.png";
import logoPhoto from "../assets/3lb/logobot/logobot.png";
import miloPhoto from "../assets/3lb/milo/milo.png";
import shadowPhoto from "../assets/3lb/shadow-richard/shadow-richard.png";
import stuffedMannyPhoto from "../assets/3lb/stuffed-manny/stuffed-manny.png";
import swissCheesePhoto from "../assets/3lb/swiss-cheese/swiss-cheese.png";


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
      link: "/robots/nardo",
      color: 1,
    },
    {
      name: "Louis XVII",
      subteam: ["Autonomous", "2023-2024"],
      desc: "The third kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: louisPhoto,
      link: "/robots/louis",
      color: 0,
    },
    {
      name: "Rosie",
      subteam: ["Kinetic", "2022-2023"],
      desc: "The fourth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: rosiePhoto,
      link: "/robots/rosie",
      color: 1,
    },
    {
      name: "Florence",
      subteam: ["Sportsman", "2022-2023"],
      desc: "The fifth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: florencePhoto,
      link: "/robots/florence",
      color: 0,
    },
    {
      name: "Richard",
      subteam: ["Kinetic", "2021-2023"],
      desc: "The sixth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: richardPhoto,
      link: "/robots/richard",
      color: 1,
    },
    {
      name: "Lance",
      subteam: ["Sportsman", "Autonomous", "2021-2022"],
      desc: "The seventh kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: lancePhoto,
      link: "/robots/lance",
      color: 0,
    },
    {
      name: "Manny",
      subteam: ["Sportsman", "Autonomous", "2021-2022"],
      desc: "The eighth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: mannyPhoto,
      link: "/robots/manny",
      color: 1,
    },
    {
      name: "Donatello",
      subteam: ["2019-2021"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: donatelloPhoto,
      link: "/robots/donatello",
      color: 0,
    },
  ],
  Mini: [
    {
      name: "Kenny",
      subteam: ["Spring 2024"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: kennyPhoto,
      link: "/robots/kenny",
      color: 1,
    },
    {
      name: "Gorge Rusel",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: gorgeruselPhoto,
      link: "/robots/gorgerusel",
      color: 0,
    },
    {
      name: "L Billet",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: lbilletPhoto,
      link: "/robots/lBillet",
      color: 1,
    },
    {
      name: "Rosie Junior",
      subteam: ["Spring 2023"],
      desc: "The ninth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: rosiejrPhoto,
      link: "/robots/rosieJunior",
      color: 0,
    },
  ],
  Three_lb: [
    {
      name: "Biggie Cheese",
      subteam: ["SP '24"],
      desc: "",
      image: biggieCheesePhoto,
      link: "/robots/biggiecheese",
      color: 0,
    },
    {
      name: "Black Beetle",
      subteam: ["SP '24"],
      desc: "",
      image: blackBeetlePhoto,
      link: "/robots/blackbeetle",
      color: 1,
    },
    {
      name: "Bobby & Bobbo",
      subteam: ["SP '24"],
      desc: "",
      image: bobbyBobboPhoto,
      link: "/robots/bobbyBobbo",
      color: 0,
    },
    {
      name: "Brunobot & Lukebot",
      subteam: ["SP '23"],
      desc: "",
      image: brunobotPhoto,
      link: "/robots/brunobotLukebot",
      color: 1,
    },
    {
      name: "CRC-Chan",
      subteam: ["SP '24"],
      desc: "",
      image: crcChanPhoto,
      link: "/robots/crcchan",
      color: 1,
    },
    {
      name: "CRSuit",
      subteam: ["SP '24"],
      desc: "",
      image: crcuitPhoto,
      link: "/robots/crsuit",
      color: 0,
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
      name: "Dumb and Dumber",
      subteam: ["SP '24"],
      desc: "",
      image: dumbAndDumberPhoto,
      link: "/robots/dumbanddumber",
      color: 1,
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
      name: "Fortunate Son",
      subteam: ["SP '24"],
      desc: "",
      image: fortunateSonPhoto,
      link: "/robots/fortunateson",
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
      link: "/robots/heaveHo",
      color: 0,
    },
    {
      name: "Idiot Sandwich",
      subteam: ["SP '24"],
      desc: "",
      image: idiotSandwichPhoto,
      link: "/robots/idiotSandwich",
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
      name: "Logobot",
      subteam: ["FA '24"],
      desc: "",
      image: logoPhoto,
      link: "/robots/logobot",
      color: 1,
    },
    {
      name: "Milo",
      subteam: ["SP '22"],
      desc: "",
      image: miloPhoto,
      link: "/robots/milo",
      color: 0,
    },
    {
      name: "Mommy Issues",
      subteam: ["SP '24"],
      desc: "",
      image: mommyIssuesPhoto,
      link: "/robots/mommyIssues",
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
      name: "Shadow Richard",
      subteam: ["FA '24"],
      desc: "",
      image: shadowPhoto,
      link: "/robots/shadowRichard",
      color: 1,
    },
    {
      name: "Slugma",
      subteam: ["FA '24"],
      desc: "",
      image: slugmaPhoto,
      link: "/robots/slugma",
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
      name: "Stuffed Manny",
      subteam: ["SP '22"],
      desc: "",
      image: stuffedMannyPhoto,
      link: "/robots/stuffedManny",
      color: 0,
    },
    {
      name: "Swiss Cheese",
      subteam: ["2020"],
      desc: "",
      image: swissCheesePhoto,
      link: "/robots/swissCheese",
      color: 1,
    },
    {
      name: "Swiss Slinger",
      subteam: ["FA '24"],
      desc: "",
      image: swissPhoto,
      link: "/robots/swiss",
      color: 1,
    },
    {
      name: "Test Box",
      subteam: ["SP '24"],
      desc: "",
      image: testBoxPhoto,
      link: "/robots/testBox",
      color: 0,
    },
    {
      name: "Two Face",
      subteam: ["SP '24"],
      desc: "",
      image: twoFacePhoto,
      link: "/robots/twoface",
      color: 1,
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