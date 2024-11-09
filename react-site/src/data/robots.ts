import { RobotCardProps } from "../components/RobotCard";
import nardo from "../assets/nardo-whole.png";

const RobotsData: Record<string, RobotCardProps[]> = {
  Retired: [
    {
      name: "Beater B. Barker",
      subteam: "Kinetic",
      desc: "Beater desc",
      image: nardo,
      link: "../pages/robots/beater",
      color: 0,
    },
    {
      name: "Kinetic 2",
      subteam: "Kinetic",
      desc: "The second kinetic bot",
      image: nardo,
      color: 1,
    },
    {
      name: "Kinetic 2",
      subteam: "Kinetic",
      desc: "The second kinetic bot",
      image: nardo,
      color: 0,
    },
    
  ],
  Three_lb: [
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardo,
      color: 0,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardo,
      color: 1,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardo,
      color: 0,
    },
    {
      name: "Three Pound Bot",
      subteam: "FA '24",
      desc: "The first 3lb bot",
      image: nardo,
      color: 1,
    },
  ]
};

export default RobotsData;