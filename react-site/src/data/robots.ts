import { RobotCardProps } from "../components/RobotCard";
import nardoPhoto from "../assets/nardo-whole.png"; // VSCode says it "cannnot find the module" for this file, which clearly is bs

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
      desc: "Beater desc",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Kinetic 2",
      subteam: "Kinetic",
      desc: "The second kinetic bot",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Kinetic 2",
      subteam: "Kinetic",
      desc: "The second kinetic bot",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
  ],
  Three_lb: [
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardoPhoto, 
      link: "/robots/beater",
      color: 1,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 0,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardoPhoto,
      link: "/robots/beater",
      color: 1,
    },
  ]
};

export default RobotsData;