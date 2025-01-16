import { RobotCardProps } from "../components/RobotCard";
import nardoPhoto from "../assets/nardo-whole.png"; // VSCode says it "cannnot find the module" for this file, which clearly is bs
import slugmaPhoto from "/src/assets/3lb/slugma_profile.jpg";
import batbotPhoto from "/src/assets/3lb/batbot.png";
import swissPhoto from "/src/assets/3lb/swiss_slinger_profile.png";
import hestrPhoto from "/src/assets/3lb/hestr_profile.png";

/* 
  This file holds the necessary data for the robots. The data is stored in a dictionary (record), where the key is the category of the robot (Retired, Three_lb, etc).
  The value is an array of RobotCardProps objects, which are used to create the RobotCard components.
  Only details needed for the RobotCard component are stored here. For more detailed information, see the individual robot pages.
*/
const RobotsData: Record<string, RobotCardProps[]> = {
  Retired: [
    {
      name: "Beater B. Barker",
      subteam: "Kinetic",
      desc: "Beater desc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Kinetic 2",
      subteam: "Kinetic",
      desc: "The second kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Kinetic 3",
      subteam: "Kinetic",
      desc: "The third kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Kinetic 4",
      subteam: "Kinetic",
      desc: "The fourth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Kinetic 5",
      subteam: "Kinetic",
      desc: "The fifth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Kinetic 6",
      subteam: "Kinetic",
      desc: "The sixth kinetic bot Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus auctor turpis sed luctus. Donec lobortis, sem eget scelerisque venenatis, sapien lectus viverra dui, vulputate commodo.",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
  ],
  Three_lb: [
    {
      name: "Slugma",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: slugmaPhoto,
      link: "/robots/slugma",
      color: 0,
    },
    {
      name: "Fangular Momentum",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: batbotPhoto, 
      link: "/robots/batbot",
      color: 1,
    },
    {
      name: "Dauður Hestr",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: hestrPhoto,
      link: "/robots/hestr",
      color: 0,
    },
    {
      name: "The Swiss Slinger",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: swissPhoto,
      link: "/robots/swiss",
      color: 1,
    },
  ]
};

export default RobotsData;