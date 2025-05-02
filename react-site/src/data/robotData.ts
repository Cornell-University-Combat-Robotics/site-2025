import beater1 from "../assets/retired/beater-b-barker/transparent.png";
import beater2 from "../assets/retired/beater-b-barker/PXL_20240420_003111230.jpg";
import beater3 from "../assets/retired/beater-b-barker/PXL_20240420_003358932.jpg";
import beater4 from "../assets/retired/beater-b-barker/PXL_20240420_145847329.jpg";
import beater5 from "../assets/retired/beater-b-barker/IMG_0390.jpeg";
import beater6 from "../assets/retired/beater-b-barker/IMG_5773.JPG";
import beater7 from "../assets/retired/beater-b-barker/IMG_6360.jpeg";
import beater8 from "../assets/retired/beater-b-barker/737305434.220657.jpg";
import beater9 from "../assets/retired/beater-b-barker/IMG_0432.jpeg";
import beater10 from "../assets/retired/beater-b-barker/IMG_6957.jpeg";

import nardo_main from "../assets/retired/nardo/nardo main.png";
import nardo1 from "../assets/retired/nardo/nardo 2.png";
import nardo2 from "../assets/retired/nardo/nardo 3.jpeg";
import nardo3 from "../assets/retired/nardo/nardo 4.JPG";
import nardo4 from "../assets/retired/nardo/nardo 6.JPG";

import louis1 from "../assets/retired/louis/louis-1.png";
import louis2 from "../assets/retired/louis/IMG_6782.JPG";
import louis3 from "../assets/retired/louis/20240420_104441.jpg";

import rosie_main from "../assets/retired/rosie/rosie.png";
import rosie1 from "../assets/retired/rosie/rosie-1.png";
import rosie2 from "../assets/retired/rosie/rosie-2.mp4";
import rosie3 from "../assets/retired/rosie/rosie-3.jpg";
import rosie4 from "../assets/retired/rosie/rosie-4.png";
import rosie5 from "../assets/retired/rosie/rosie-5.jpg";
import rosie6 from "../assets/retired/rosie/rosie-6.png";
import rosie7 from "../assets/retired/rosie/rosie-7.png";

import florence_main from "../assets/retired/florence/florence.JPG";
import florence1 from "../assets/retired/florence/florence-8.jpg";
import florence2 from "../assets/retired/florence/florence-11.jpg";
import florence3 from "../assets/retired/florence/florence-video-1.mp4";
import florence4 from "../assets/retired/florence/florence-video-2.mp4";
import florence5 from "../assets/retired/florence/florence-3.jpg";
import florence6 from "../assets/retired/florence/florence-4.jpg";
import florence7 from "../assets/retired/florence/florence-6.jpg";
import florence8 from "../assets/retired/florence/florence-7.jpg";
import florence9 from "../assets/retired/florence/florence-video-3.mp4";
import florence10 from "../assets/retired/florence/florence-10.jpg";
import florence11 from "../assets/retired/florence/florence-2.JPG";
import florence12 from "../assets/retired/florence/florence-9.jpg";

import richard_main from "../assets/retired/richard/richard-v1.png";
import richard1 from "../assets/retired/richard/richard-pixel.png";
import richard2 from "../assets/retired/richard/richard-v2.jpg";
import richard3 from "../assets/retired/richard/richard-v3.png";
import richard4 from "../assets/retired/richard/richard-2.jpg";
import richard5 from "../assets/retired/richard/richard-1.jpg";
import richard6 from "../assets/retired/richard/richard-5.jpg";
import richard7 from "../assets/retired/richard/richard-6.png";
import richard8 from "../assets/retired/richard/richard-7.jpeg";
import richard9 from "../assets/retired/richard/richard-8.mp4";
import richard10 from "../assets/retired/richard/richard-9.png";
import richard11 from "../assets/retired/richard/richard-10.mp4";
import richard12 from "../assets/retired/richard/richard-11.jpeg";
import richard13 from "../assets/retired/richard/richard-12.jpeg";
import richard14 from "../assets/retired/richard/richard-13.jpg";
import richard15 from "../assets/retired/richard/richard-14.jpeg";
import richard16 from "../assets/retired/richard/richard-15.jpg";
import richard17 from "../assets/retired/richard/richard-16.jpg";
import richard18 from "../assets/retired/richard/richard-17.jpg";
import richard19 from "../assets/retired/richard/richard-18.jpg";
import richard20 from "../assets/retired/richard/richard-19.jpg";
import richard21 from "../assets/retired/richard/richard-20.jpg";
import richard22 from "../assets/retired/richard/richard-21.jpg";
import richard23 from "../assets/retired/richard/richard-22.jpg";
import richard24 from "../assets/retired/richard/richard-23.png";
import richard25 from "../assets/retired/richard/richard-24.jpg";
import richard26 from "../assets/retired/richard/richard-lines.png";

import lance_main from "../assets/retired/lance/lance.png";
import lance1 from "../assets/retired/lance/lance-1.jpeg";
import lance2 from "../assets/retired/lance/lance-2.mp4";
import lance3 from "../assets/retired/lance/lance-3.jpg";
import lance4 from "../assets/retired/lance/lance-4.jpg";

export interface RobotData {
  name: string;
  makers: string[];
  description: string;
  image: string;
  stats: {
    vintage: string;
    height: string;
    weight: string;
    fights: string;
    wins: string;
    top_speed: string;
    weapon_speed: string;
    most_damaged_part: string;
    favorite_movie: string;
  };
  featured_fight: string;
  design: string;
  trivia: string[];
  fights: {
    event: string;
    opponent: string;
    result: string;
    by: string;
    video: string;
    length: string;
  }[];
  gallery: string[];
}

export const robotData: { [key: string]: RobotData } = {
  batbot: {
    name: "Fangular Momentum",
    makers: ["Ruslan Black", "Gurjot Gill", "Sophie Cheng", "Ruihan Chu"],
    description:
      "Growing up in Gotham City's hardware store Fangular Momentum had a tough upbringing. He decided to turn his dark past into a force for good and take on his alter ego, BatBot. Every day he protects the aisles of Gotham City's Home Depot from fierce foes like JokerBot and BaneBot.",
    image: "/src/assets/3lb/batbot.png",
    stats: {
      vintage: "2024",
      height: "10 inches",
      weight: "3 lbs",
      fights: "JokerBot",
      wins: "RiddlerBot, BaneBot",
      top_speed: "As fast as the batmobile",
      weapon_speed: "1000 rpm",
      most_damaged_part: "Ears",
      favorite_movie: "Real Steel"
    },
    featured_fight:
      "",
    design:
      "Fangular Momentum has a vertical spinner in the shape of a batarang.",
    trivia: ["Fangular Momentum refuses to KO JokerBot"],
    fights: [
      {
        event: "Event 1",
        opponent: "Opponent 1",
        result: "Win",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "2:30"
      },
      {
        event: "Event 2",
        opponent: "Opponent 2",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:00"
      },
      {
        event: "Event 3",
        opponent: "Opponent 3",
        result: "Win",
        by: "Decision",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:30"
      }
    ],
    gallery: [
      "/src/assets/3lb/batbot.png",
      "/src/assets/3lb/the_batbot.png",
      // "https://www.instagram.com/p/DCX2RjuOpGA/",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    ]
  },

  beater: {
    name: "Beater B. Barker",
    makers: [
      "Anna Boese",
      "Isaac Newcomb",
      "Stella Taglich",
      "Zander Knight",
      "James LaSalle",
      "Ethan Hernandez",
      "Kevin Sturm",
      "Mattew Anazco",
      "Mohammed Chowdhury"
    ],
    description:
      "Beater B. Barker? I hardly know her! With his big 🅱 energy and his quick footwork on the arena floor, Beater absolutely dominates the competition. However, his one fatal flaw is the hubris of having a flywheel: he thinks he can turn on a dime, but he has to lean on the wall for 10 seconds if he's overzealous.",
    image: beater1,
    stats: {
      vintage: "2024",
      height: "5.4 inches",
      weight: "13.2 lbs",
      fights: "5",
      wins: "3",
      top_speed: "11 mph",
      weapon_speed: "272mph max but closer to 210 average",
      most_damaged_part:
        "Beater once destroyed his own weapon motor during a spin-up gone awry",
      favorite_movie: "Spider-Man: Into the Spider-Verse"
    },
    featured_fight:
      "https://www.youtube.com/embed/CCGriVVoWeM?si=4x3IdA3Oya5a9RH1",
    design:
      "A counter-rotating brass flywheel sits in the center of Beater's bright red beater bar. The flywheel and weapon counteract each other's angular momentum to reduce the gyro effect when Beater turns in place.",
    trivia: [
      "Beater has destroyed two of his flywheel motors during testing because he applies Taylor Swift's mantra to all parts his parents forget to loctite: 'Shake It Off.'",
      "Beater's cleats look almost identical to those on Maximizer."
    ],
    fights: [
      {
        event: "event",
        opponent: "Carve",
        result: "Loss",
        by: "Tapout",
        video: "",
        length: ""
      },
      {
        event: "event",
        opponent: "Herbie 4.0",
        result: "Win",
        by: "Forfeit",
        video: "https://www.youtube.com/live/CCGriVVoWeM?feature=shared&t=24320",
        length: ""
      },
      {
        event: "event",
        opponent: "Paje",
        result: "Win",
        by: "Tapout",
        video: "https://youtu.be/wf528BQr0eA?t=17852",
        length: "77"
      },
      {
        event: "event",
        opponent: "Junkernaut",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/live/k55Q36gNngQ?feature=shared&t=6734",
        length: "107"
      },
      {
        event: "event",
        opponent: "Marauder",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=33573",
        length: "22"
      }
    ],
    gallery: [
      beater2,
      beater3,
      beater4,
      beater5,
      beater6,
      beater7,
      beater8,
      beater9,
      beater10
    ]
  },

  hestr: {
    name: "Dauður Hestr",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description:
      "FLAMETHROWERS!! Who doesn't love flamethrowers?",
    image: "/src/assets/3lb/hestr_profile.png",
    stats: {
      vintage: "2024",
      height: "0 ft",
      weight: "0 lbs",
      fights: "None, yet...",
      wins: "∞",
      top_speed: "So much faster than a slug",
      weapon_speed: "5 rpm",
      most_damaged_part: "Lifter",
      favorite_movie: "Pokemon: Destiny Deoxys"
    },
    featured_fight:
      "",
    design:
      "Slugma is an all-rounder battle-bot with both a vertical lifter and a flamethrower, designed to paralyze and incinerate opponents.",
    trivia: [
      "Originally named Venus Fly Trap, but later changed due to design constraints."
    ],
    fights: [
      {
        event: "Event 1",
        opponent: "Opponent 1",
        result: "Win",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "2:30"
      },
      {
        event: "Event 2",
        opponent: "Opponent 2",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:00"
      },
      {
        event: "Event 3",
        opponent: "Opponent 3",
        result: "Win",
        by: "Decision",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:30"
      }
    ],
    gallery: [
      // "/src/assets/3lb/nardo-whole.png",
      // "/src/assets/3lb/team-photo-hearts.png",
      // "/src/assets/3lb/team-photo-formal.png",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    ]
  },

  slugma: {
    name: "Slugma",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description:
      "FLAMETHROWERS!! Who doesn't love flamethrowers?",
    image: "/src/assets/3lb/slugma_profile.jpg",
    stats: {
      vintage: "2024",
      height: "0 ft",
      weight: "0 lbs",
      fights: "None, yet...",
      wins: "∞",
      top_speed: "So much faster than a slug",
      weapon_speed: "5 rpm",
      most_damaged_part: "Lifter",
      favorite_movie: "Pokemon: Destiny Deoxys"
    },
    featured_fight:
      "",
    design:
      "Slugma is designed to both lift and incinerate its opponents with a dual-weapon system.",
    trivia: [
      "Originally intended to be named Venus Fly Trap, but hot TPU made the design unworkable."
    ],
    fights: [
      {
        event: "Event 1",
        opponent: "Opponent 1",
        result: "Win",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "2:30"
      },
      {
        event: "Event 2",
        opponent: "Opponent 2",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:00"
      },
      {
        event: "Event 3",
        opponent: "Opponent 3",
        result: "Win",
        by: "Decision",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        length: "3:30"
      }
    ],
    gallery: [
      // "/src/assets/3lb/nardo-whole.png",
      // "/src/assets/3lb/team-photo-hearts.png",
      // "/src/assets/3lb/team-photo-formal.png",
      "/src/assets/3lb/slugma_cad.png",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

    ]
  },

  swiss: {
    name: "The Swiss Slinger",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description:
      "FLAMETHROWERS!! Who doesn't love flamethrowers?",
    image: "/src/assets/3lb/swiss_slinger_profile.png",
    stats: {
      vintage: "2024",
      height: "0 ft",
      weight: "0 lbs",
      fights: "None, yet...",
      wins: "∞",
      top_speed: "So much faster than a slug",
      weapon_speed: "5 rpm",
      most_damaged_part: "Lifter",
      favorite_movie: "Pokemon: Destiny Deoxys"
    },
    featured_fight:
      "",
    design:
      "The Swiss Slinger uses a spinning mechanism similar to Slugma's to deliver rapid-fire attacks.",
    trivia: [
      "Originally named Venus Fly Trap; later changed due to design hazards."
    ],
    fights: [
      {
        event: "Event 1",
        opponent: "Opponent 1",
        result: "Win",
        by: "KO",
        video: "",
        length: "2:30"
      },
      {
        event: "Event 2",
        opponent: "Opponent 2",
        result: "Loss",
        by: "KO",
        video: "",
        length: "3:00"
      },
      {
        event: "Event 3",
        opponent: "Opponent 3",
        result: "Win",
        by: "Decision",
        video: "",
        length: "3:30"
      }
    ],
    gallery: [
      // "/src/assets/3lb/nardo-whole.png",
      // "/src/assets/3lb/team-photo-hearts.png",
      // "/src/assets/3lb/team-photo-formal.png",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    ]
  },

  twoface: {
    name: "Two-Face",
    makers: ["Rachel Pineda", "Tyler Sprague", "Chris Adonizio"],
    description:
      "Two-Face is the most streamlined robot the modern battlebots scene has ever seen—too powerful to set foot on the battlefield.",
    image: "/src/assets/3lb/two-face/two-face-1.png",
    stats: {
      vintage: "2024",
      height: "3 inches",
      weight: "3 lbs",
      fights: "0",
      wins: "0",
      top_speed: "Unknown",
      weapon_speed: "180 degrees",
      most_damaged_part: "None yet",
      favorite_movie: "The Dark Knight"
    },
    featured_fight: "",
    design:
      "Armed with a massive hammer that rotates 180° and two defensive wedges, Two-Face dominates with sheer presence.",
    trivia: [
      "Two-Face loves the truth.",
      "It can be driven both forward and backward.",
      "Originally named 'See-saw'."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/two-face/two-face-1.png",
      "/src/assets/3lb/two-face/two-face-2.png",
      "/src/assets/3lb/two-face/two-face-3.png",
      "/src/assets/3lb/two-face/two-face-pixel.png"
    ]
  },

  kenny: {
    name: "Kenny",
    makers: ["Zander Knight", "Tyler Sprague"],
    description:
      "Kenny, CRC's newest Minibot, was built to assist Beater B. Barker in competition by controlling the opponent.",
    image: "/src/assets/mini/kenny/kenny.png",
    stats: {
      vintage: "2024",
      height: "3.9 inches",
      weight: "45 lbs",
      fights: "4",
      wins: "2",
      top_speed: "9 mph",
      weapon_speed: "N/A",
      most_damaged_part: "Bro was untouched",
      favorite_movie: "The Polar Express"
    },
    featured_fight:
      "https://www.youtube.com/embed/CCGriVVoWeM?si=4x3IdA3Oya5a9RH1&start=28006",
    design:
      "Kenny has no active weapon but is equipped with a titanium wedge or aluminum forks to control opponents.",
    trivia: ["Kenny’s favorite color is blue!"],
    fights: [
      {
        event: "event",
        opponent: "Carve",
        result: "Loss",
        by: "Tapout",
        video: "",
        length: ""
      },
      {
        event: "event",
        opponent: "Herbie 4.0",
        result: "Win",
        by: "Forfeit",
        video: "https://www.youtube.com/live/CCGriVVoWeM?feature=shared&t=24320",
        length: ""
      },
      {
        event: "event",
        opponent: "Paje",
        result: "Win",
        by: "Tapout",
        video: "https://youtu.be/wf528BQr0eA?t=17852",
        length: "77"
      },
      {
        event: "event",
        opponent: "Junkernaut",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/live/k55Q36gNngQ?feature=shared&t=6734",
        length: "107"
      },
      {
        event: "event",
        opponent: "Marauder",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=33573",
        length: "22"
      }
    ],
    gallery: [
      "/src/assets/retired/beater-b-barker/PXL_20240420_003358932.jpg",
      "/src/assets/retired/beater-b-barker/IMG_0390.jpeg",
      "/src/assets/retired/beater-b-barker/IMG_0432.jpeg",
      "/src/assets/retired/beater-b-barker/IMG_5773.JPG",
      "/src/assets/retired/beater-b-barker/IMG_6360.jpeg"
    ]
  },

  louis: {
    name: "Louis XVII",
    makers: [
      "Ethan Zhang", "Shao Stassen", "Aaron Harnish", "Richard Jin", "Christopher Adonizio",
      "Alyssa Hsu", "Ananya Jajodia", "Camille Yap", "Grace Lim", "Jenny Wu", "Katie Huntley"
    ],
    description:
      "Louis XVII is CRC's first competition-ready autonomous robot that uses an object detection model to identify targets. On detecting an enemy, he charges with his mighty sword.",
    image: louis1,
    stats: {
      vintage: "2024",
      height: "6'7\"",
      weight: "3 lbs",
      fights: "Misogynists, 3",
      wins: "none sadly :( (our chassis exploded Beater B. Barker tho)",
      top_speed: "3,000,000 mph",
      weapon_speed: "3,000,000 mph",
      most_damaged_part: "his mechanical heart from having insane runtimes",
      favorite_movie: "Real Steel"
    },
    featured_fight: "https://www.youtube.com/embed/h5GmDUyQwPU?si=H5xcpEor-MdjNQGx",
    design:
      "The Raspberry Pi serves as Louis XVII's brain, while his eyes are a Pi camera and Time of Flight sensor. He charges with his sword in hand.",
    trivia: [
      "Louis XVII is a little obsessed with walls, wheels, and feet.",
      "He unofficially beat Kinetic's Beater B. Barker."
    ],
    fights: [],
    gallery: [
      louis2,
      louis3,
      "https://www.youtube.com/embed/h5GmDUyQwPU?si=H5xcpEor-MdjNQGx",
      "https://www.youtube.com/embed/9w-z1FVGgCQ?si=22n3HiZlpaWTX4oU"
    ]
  },

  nardo: {
    name: "Nardo",
    makers: [
      "Caleb Schlissel", "Alex Jenkins", "Charles Liu", "Marcus Esposito", "Narayan Rueppel",
      "Zarif Pathan", "Kai Rodger", "Manuely Feliz Portes", "Tyler Sprague"
    ],
    description:
      "Nardo was born from our team's desire to improve our engineering process. Named as a tribute to Leonardo, his legacy carries on.",
    image: nardo_main,
    stats: {
      vintage: "2024",
      height: "4.5 inches",
      weight: "18 lbs",
      fights: "2",
      wins: "0",
      top_speed: "8 mph",
      weapon_speed: "36lbs",
      most_damaged_part: "Nut strips",
      favorite_movie: "Teenage Mutant Ninja Turtles: Mutant Mayhem"
    },
    featured_fight:
      "https://www.youtube.com/embed/CCGriVVoWeM?si=7y5COqB0JsCX-RX7&start=15857",
    design:
      "Nardo is a true Sportsman robot with a rear-driven four-bar lifter and an unconventional drive mechanism.",
    trivia: [
      "Nardo continues the legacy of our spring robot Leo.",
      "His graffiti-inspired gradient color honors the Teenage Mutant Ninja Turtle Leonardo.",
      "He operates in two modes: wedges on and off.",
      "His unconventional drive allowed him to exceed the weight limit slightly."
    ],
    fights: [
      {
        event: "event",
        opponent: "Paje",
        result: "Loss",
        by: "KO",
        video:
          "https://www.youtube.com/live/CCGriVVoWeM?si=iP5egu4nLMlIbVyL&t=8443",
        length: "NA"
      },
      {
        event: "event",
        opponent: "Amphisbaena",
        result: "Loss",
        by: "Tapout",
        video:
          "https://www.youtube.com/live/CCGriVVoWeM?si=KWI6Re1eMNT9H7Bh&t=15855",
        length: "25"
      }
    ],
    gallery: [
      nardo1,
      nardo2,
      nardo3,
      nardo4,
    ]
  },

  biggiecheese: {
    name: "Biggie Cheese",
    makers: ["Caleb Schlissel", "Shao Stassen", "Zander Knight"],
    description:
      "Born Chester Latorace Cheese, Biggie Cheese began rapping at age 9 and soon embraced robot combat. He’s a talented musical artist and hopeless romantic whose spinners shatter steel.",
    image: "/src/assets/3lb/biggie-cheese/biggie-cheese.png",
    stats: {
      vintage: "2022",
      height: "5 inches",
      weight: "3.01 lbs",
      fights: "Undefeated",
      wins: "All of them",
      top_speed: "Mach 5",
      weapon_speed: "Incomprehensible",
      most_damaged_part: "His Heart",
      favorite_movie: "Barnyard"
    },
    featured_fight: "",
    design:
      "Biggie Cheese’s three interchangeable blades and phat wedge allow him to dominate on stage and in the cage.",
    trivia: [
      "Biggie Cheese likes Brie, Swiss, Provolone, Gouda, Mozzarella, Cheddar, Ricotta, and Asiago—but hates cheese in general."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/biggie-cheese/biggie-cheese-1.png",
      "/src/assets/3lb/biggie-cheese/biggie-cheese-2.png",
      "/src/assets/3lb/biggie-cheese/biggie-cheese-3.png",
      "/src/assets/3lb/biggie-cheese/biggie-cheese-4.png",
      "/src/assets/3lb/biggie-cheese/biggie-cheese-5.png",
      "/src/assets/3lb/biggie-cheese/biggie-cheese-6.png",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-7.jpg",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-8.gif",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-9.jpg",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-10.jpg",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-11.jpg",
      // "/src/assets/3lb/biggie-cheese/biggie-cheese-12.jpg"
    ]
  },

  blackbeetle: {
    name: "Black Beetle",
    makers: ["Richard Jin"],
    description:
      "Black Beetle is an electrifying combat robot with a glossy black exoskeleton and a pneumatic flipper that launches opponents into the air.",
    image: "/src/assets/3lb/black-beetle/black-beetle.png",
    stats: {
      vintage: "2021",
      height: "???",
      weight: "3 lbs",
      fights: "0",
      wins: "0",
      top_speed: "Unknown",
      weapon_speed: "Pretty fast",
      most_damaged_part: "Wedges",
      favorite_movie: "Black Panther"
    },
    featured_fight: "",
    design:
      "Built for defense rather than damage, Black Beetle uses a pneumatic flipper to control opponents.",
    trivia: [
      "Designed by a single team member.",
      "Originally named Jin.",
      "Voted 'Favorite Robot' at our first showcase."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/black-beetle/black-beetle-1.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-2.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-3.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-4.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-5.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-6.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-7.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-8.PNG",
      "/src/assets/3lb/black-beetle/black-beetle-9.PNG"
    ]
  },

  bobbyBobbo: {
    name: "Bobby & Bobbo",
    makers: ["Unknown"],
    description:
      "These two have our hearts. Bobby is the larger, less sharp one, while Bobbo is the smaller ball of unyielding rage.",
    image: "/src/assets/3lb/bobby-bobbo/bobby-bobbo.png",
    stats: {
      vintage: "Spring 2022",
      height: "1 in",
      weight: "28 g",
      fights: "0",
      wins: "100",
      top_speed: "Human Hand",
      weapon_speed: "Teleports behind you",
      most_damaged_part: "Heads",
      favorite_movie: "Twins"
    },
    featured_fight: "",
    design:
      "Constructed from vintage pink Legos, Bobby carries cargo while Bobbo races with fury.",
    trivia: [
      "Bobby sounds like Patrick Star.",
      "Bobbo sounds like an angry Italian man.",
      "They go to brunch on Sundays and are roommates."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/bobby-bobbo/bobby-bobbo-1.jpg",
      "/src/assets/3lb/bobby-bobbo/bobby-bobbo-2.jpg",
      "/src/assets/3lb/bobby-bobbo/bobby-bobbo-3.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-4.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-5.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-6.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-7.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-8.gif",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-9.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-10.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-11.jpg",
      // "/src/assets/3lb/bobby-bobbo/bobby-bobbo-12.jpg"
    ]
  },

  brunobotLukebot: {
    name: "Brunobot & Lukebot",
    makers: ["Ethan Zhang", "Grace Lim", "Linda Hu", "Luke Murphy", "Sardor Rahmatulloev", "Shao Stassen"],
    description:
      "Brunobot and Lukebot are the spectral guides of current team leads, offering task tracking and management advice.",
    image: "/src/assets/3lb/brunobot-lukebot/brunobot-lukebot.png",
    stats: {
      vintage: "2022",
      height: "3 bits",
      weight: "30 MB",
      fights: "100",
      wins: "-100",
      top_speed: "0 tasks per second",
      weapon_speed: "Grading Sheet",
      most_damaged_part: "Functionality",
      favorite_movie: "Monster, Inc."
    },
    featured_fight: "",
    design:
      "Inspired by team leads, the design incorporates extensive use of Slack API for task management aesthetics.",
    trivia: [
      "Their profile pictures swap the faces of Sully and Mike Wazowski.",
      "The project was famously procrastinated."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/brunobot-lukebot/brunobot-lukebot.png",
    ]
  },

  crcchan: {
    name: "CRC-Chan",
    makers: ["Caleb Schlissel", "Grace Lim", "James LaSalle", "Linda Hu", "Luke Murphy"],
    description:
      "CRC Chan is the team's magical arcade machine that roams the ELL by night, ready to grant a wish with a twist.",
    image: "/src/assets/3lb/crc-chan/crcchan.png",
    stats: {
      vintage: "Spring 2023",
      height: "Taller than you",
      weight: "Something you shouldn't ask",
      fights: "All of them",
      wins: "All of them",
      top_speed: "Average human walking speed",
      weapon_speed: "0 rpm",
      most_damaged_part: "Wheels",
      favorite_movie: "Soul Eater"
    },
    featured_fight: "",
    design:
      "CRC Chan’s design mirrors the team colors with a white back and a scythe—an homage to CRC's logo.",
    trivia: [
      "Logobot is her pet.",
      "CRC Kun is rumored to be after milk.",
      "She appears in your dreams once you become a CRC member."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/crc-chan/crcchan6.png",
      "/src/assets/3lb/crc-chan/crcchan2.png",
      "/src/assets/3lb/crc-chan/crcchan3.png",
      "/src/assets/3lb/crc-chan/crcchan4.png",
      "/src/assets/3lb/crc-chan/crcchan5.png",
      "/src/assets/3lb/crc-chan/crcchan1.png"
    ]
  },

  crsuit: {
    name: "CRSuit",
    makers: ["Ruby Wang"],
    description:
      "CRC's official mascot—crafted from HD foam with a bold red and white design.",
    image: "/src/assets/3lb/crcuit/crcuit.png",
    stats: {
      vintage: "Spring 2023",
      height: "14 inches",
      weight: "240 grams",
      fights: "Always",
      wins: "Always",
      top_speed: "Pretty slow (foam suit limits movement)",
      weapon_speed: "Faster than your eyes can see",
      most_damaged_part: "The front mask",
      favorite_movie: "水星の魔女"
    },
    featured_fight: "",
    design:
      "Constructed with HD foam, CRSuit is hand painted with red and white accents. Its design is simple and iconic.",
    trivia: [
      "The helmet was made over a weekend.",
      "A mask is advised when wearing it.",
      "It pairs with CRC's official quarterzip.",
      "Its mount of choice is Logobot’s helmet."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/crcuit/crcuit1.jpg",
      "/src/assets/3lb/crcuit/crcuit2.jpg",
      "/src/assets/3lb/crcuit/crcuit3.jpg"
    ]
  },

  dumbanddumber: {
    name: "Dumb and Dumber",
    makers: ["Blaze Ezlakowski", "Charles Liu", "Molly Drumm", "Sebastian Rivera"],
    description:
      "These two idiots are chained together in a twist of fate that makes them unstoppable—if only in theory.",
    image: "/src/assets/3lb/dumb-and-dumber/dumb-and-dumber.png",
    stats: {
      vintage: "2022",
      height: "Size doesn't matter",
      weight: "4.5 lbs of Girth",
      fights: "1",
      wins: "100",
      top_speed: "As fast as you want",
      weapon_speed: "As fast as their brain cells",
      most_damaged_part: "The brain",
      favorite_movie: "Ace Ventura"
    },
    featured_fight: "",
    design:
      "Built with the same internals as Manny’s bot, Dumb and Dumber benefits from a weight bonus as a multi-bot.",
    trivia: [
      "The CAD is incomplete and uses GrabCAD parts.",
      "Features a wheel inside a solid triangle.",
      "Dumb can drive off Dumber's ramp to untangle them.",
      "If built in real life, it likely wouldn’t work."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/dumb-and-dumber/dumb-and-dumber-3.jpg",
      "/src/assets/3lb/dumb-and-dumber/dumb-and-dumber-2.jpg",
      "/src/assets/3lb/dumb-and-dumber/dumb-and-dumber-1.jpg",
    ]
  },

  florence: {
    name: "Florence",
    makers: [
      "Alex Jenkins", "Bruno Tassari", "Caleb Schlissel", "Charles Liu", "Marcus Esposito",
      "Molly Drumm", "Narayan Rueppel", "Sana Gaya", "Zarif Pathan"
    ],
    description:
      "Florence is a two-wheeled tri-flipper with a triangular chassis. Her weapon allows her to jump into a defensive table position and perform the 'Florence Flop.'",
    image: florence_main,
    stats: {
      vintage: "2022",
      height: "3.25\" (13\" extended)",
      weight: "12 lbs",
      fights: "3",
      wins: "1",
      top_speed: "4 mph",
      weapon_speed: "20 Nm",
      most_damaged_part: "Flippers",
      favorite_movie: "Free Willy"
    },
    featured_fight:
      "https://www.youtube.com/embed/xQTbCkwBmD4?start=11531",
    design:
      "Florence’s weapon system features three independently actuated flippers and a dual-wheel drivetrain for agile flipping.",
    trivia: [
      "Florence is an Italian Magikarp.",
      "Her body is entirely aluminum.",
      "She was nearly named Tony.",
      "Once used as an Egyptian pyramid forklift.",
      "Her triangular chassis is the strongest polygon.",
      "Her concept is based on a venus flytrap.",
      "Simply put, Florence is pretty."
    ],
    fights: [
      {
        event: "Mar 18 2023",
        opponent: "Flash-BANG",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/xQTbCkwBmD4?t=2612",
        length: "170"
      },
      {
        event: "Mar 18 2023",
        opponent: "AeroStar",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/xQTbCkwBmD4?t=11531",
        length: "105"
      },
      {
        event: "Mar 18 2023",
        opponent: "Voxel",
        result: "Loss",
        by: "FF",
        video: "",
        length: ""
      }
    ],
    gallery: [
      florence1, florence2, florence3, florence4, florence5, florence6, florence7, florence8, florence9, florence10, florence11, florence12
    ]
  },

  fortunateson: {
    name: "Fortunate Son",
    makers: ["James Courtenay", "Ruby Wang", "Spencer Hurst"],
    description:
      "Make sure you look up to the sky when fighting Fortunate Son! His design is built around aerial evasion and ranged attack.",
    image: "/src/assets/3lb/fortunate-son/fortunate-son.png",
    stats: {
      vintage: "2022",
      height: "Drone",
      weight: "3 lbs",
      fights: "So many",
      wins: "0",
      top_speed: "Fast Probably",
      weapon_speed: "Brrrrr",
      most_damaged_part: "CAD",
      favorite_movie: "Forrest Gump"
    },
    featured_fight: "",
    design:
      "Fortunate Son uses a drone platform and a rack-and-pinion slide to deploy napalm on enemies.",
    trivia: [
      "He is the first flying bot designed by CRC.",
      "Testing was impossible due to napalm safety.",
      "Built in just 2 hours."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/fortunate-son/fortunate-son-1.jpg",
      "/src/assets/3lb/fortunate-son/fortunate-son-2.png",
      "/src/assets/3lb/fortunate-son/fortunate-son-3.png",
      "/src/assets/3lb/fortunate-son/fortunate-son-4.png",
      "/src/assets/3lb/fortunate-son/fortunate-son-5.png",
      "/src/assets/3lb/fortunate-son/fortunate-son-6.png",
      // "/src/assets/3lb/fortunate-son/fortunate-son-7.jpg",
      // "/src/assets/3lb/fortunate-son/fortunate-son-8.gif",
      // "/src/assets/3lb/fortunate-son/fortunate-son-9.jpg",
      // "/src/assets/3lb/fortunate-son/fortunate-son-10.jpg",
      // "/src/assets/3lb/fortunate-son/fortunate-son-11.jpg",
      // "/src/assets/3lb/fortunate-son/fortunate-son-12.jpg"
    ]
  },

  gorgerusel: {
    name: "Gorge Rusel",
    makers: [
      "James Courtenay",
      "James LaSalle",
      "Isaac Newcomb",
      "Mohammed Chowdhury",
      "Spencer Hurst",
      "Stella Taglich",
      "Zander Knight"
    ],
    description:
      "Right alongside his twin L Billet, Gorge Rusel is a star minibot known for his emotional struggles and Formula 1 obsession.",
    image: "/src/assets/mini/gorge-rusel/gorge-rusel.png",
    stats: {
      vintage: "2023",
      height: "3 inches",
      weight: "1 lb 5 oz",
      fights: "Waking up in the morning is a fight",
      wins: "Nothing feels like a win without L Billet",
      top_speed: "3 mph",
      weapon_speed: "Sad like his feelings",
      most_damaged_part: "His heart",
      favorite_movie: "Step Brothers"
    },
    featured_fight:
      "https://www.youtube.com/embed/7MK13y7_SHQ?si=45br7XIPrqlcJZwK",
    design:
      "Gorge Rusel’s design mirrors that of his late twin, with a focus on speed and raw emotion.",
    trivia: [
      "Named in a moment of creative crisis.",
      "He’s often found watching Formula 1 after his morning cry.",
      "Sad music accompanies his every move."
    ],
    fights: [
      {
        event: "May 6 2023",
        opponent: "Swole",
        result: "Win",
        by: "Judges",
        video:
          "https://www.youtube.com/live/7MK13y7_SHQ?feature=share&t=8091",
        length: "180"
      },
      {
        event: "May 6 2023",
        opponent: "Maximizer",
        result: "Loss",
        by: "KO",
        video:
          "https://www.youtube.com/live/7MK13y7_SHQ?feature=share&t=17906",
        length: "88"
      }
    ],
    gallery: [
      "/src/assets/mini/gorge-rusel/gorge-rusel-1.jpg",
      "/src/assets/mini/gorge-rusel/gorge-rusel-2.jpg",
      "/src/assets/mini/gorge-rusel/gorge-rusel-3.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-4.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-5.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-6.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-7.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-8.gif",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-9.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-10.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-11.jpg",
      // "/src/assets/mini/gorge-rusel/gorge-rusel-12.jpg"
    ]
  },

  hanako: {
    name: "Hanako",
    makers: ["Linda Hu", "Narayan Rueppel", "Stella Taglich"],
    description:
      "Based on a mischievous manga ghost, Hanako is a vertical spinner with rapidly spinning saws that both defend and attack.",
    image: "/src/assets/3lb/hanako/hanako.png",
    stats: {
      vintage: "2022",
      height: "4 inches",
      weight: "3 lbs",
      fights: "Undefeated (probably)",
      wins: "All (probably)",
      top_speed: "10 mph",
      weapon_speed: "3000 rpm",
      most_damaged_part: "Heart",
      favorite_movie: "Toilet-Bound Hanako-kun"
    },
    featured_fight: "",
    design:
      "Hanako features four steel saws mounted on a ramp; when activated, they grind opponents and launch them into the air.",
    trivia: [
      "Hanako loves ghosts.",
      "He is, in a sense, dead.",
      "A manga lover with a penchant for teleporting in video games.",
      "Stomach issues are common."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/hanako/hanako-1.png",
      "/src/assets/3lb/hanako/hanako-2.mp4",
      "/src/assets/3lb/hanako/hanako-3.png",
      "/src/assets/3lb/hanako/hanako-4.png",
      "/src/assets/3lb/hanako/hanako-5.png",
      "/src/assets/3lb/hanako/hanako-6.png"
    ]
  },

  heaveHo: {
    name: "Heave-Ho",
    makers: ["Bruno Tassari", "Erhunmwunse Eghafona"],
    description:
      "Heave Ho is a lifter robot that uses a vertical pulley system and stability ball mechanism to flip opponents.",
    image: "/src/assets/3lb/heave-ho/heave-ho.png",
    stats: {
      vintage: "2021",
      height: "Around a forklift",
      weight: "3 lbs",
      fights: "203",
      wins: "Only Uchihas",
      top_speed: "N/A",
      weapon_speed: "N/A",
      most_damaged_part: "N/A",
      favorite_movie: "Naruto"
    },
    featured_fight: "",
    design:
      "Centered on a vertical pulley system with strategically placed wheels and a stability ball for enhanced control.",
    trivia: [
      "Inspired by a Mario 64 enemy.",
      "Features the Sharingan as a nod to its tragic backstory.",
      "Carries the old CRC logo.",
      "Was nearly a crocodile beyblade."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/heave-ho/heave-ho-1.gif",
      "/src/assets/3lb/heave-ho/heave-ho-2.gif",
      "/src/assets/3lb/heave-ho/heave-ho-3.png",
      "/src/assets/3lb/heave-ho/heave-ho-4.png",
      "/src/assets/3lb/heave-ho/heave-ho-5.png",
      "/src/assets/3lb/heave-ho/heave-ho-6.png",
      "/src/assets/3lb/heave-ho/heave-ho-7.png"
    ]
  },

  idiotSandwich: {
    name: "Idiot Sandwich",
    makers: ["Anna Boese", "Lucien Eckert"],
    description:
      "A mean rolling machine built for aggressive offense with flamethrower lighters and oversized wheels.",
    image: "/src/assets/3lb/idiot-sandwich/idiot-sandwich.png",
    stats: {
      vintage: "2022",
      height: "18 inches",
      weight: "3 lbs",
      fights: "N/A",
      wins: "N/A",
      top_speed: "N/A",
      weapon_speed: "N/A",
      most_damaged_part: "Ego",
      favorite_movie: "Ratatouille"
    },
    featured_fight: "",
    design:
      "Utilizes oversized wheels to position itself above opponents while specialized lighters serve as flamethrowers.",
    trivia: [
      "Uses commercial lighters with an 8-inch flame.",
      "Can self-right using its flipping bar.",
      "Constructed of lightweight plastic.",
      "Secretly loves to bake."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/idiot-sandwich/card.png",
      "/src/assets/3lb/idiot-sandwich/pad.png",
      "/src/assets/3lb/idiot-sandwich/concept.png"
    ]
  },

  knuckles: {
    name: "Knuckles",
    makers: ["Katie Huntley", "Sana Gaya", "Shawn Chen"],
    description:
      "A dangerous combat robot armed with wedges, spikes, a flipper, and a flamethrower.",
    image: "/src/assets/3lb/knuckles/knuckles.png",
    stats: {
      vintage: "2022",
      height: "Ethereal",
      weight: "3 lbs",
      fights: "Yep",
      wins: "None",
      top_speed: "Slow",
      weapon_speed: "Fire",
      most_damaged_part: "Body",
      favorite_movie: "Sonic the Hedgehog"
    },
    featured_fight: "",
    design:
      "Packed with two wedges, two spikes, a flipper, and a flamethrower, Knuckles is a powerhouse of offensive and defensive capability.",
    trivia: [
      "Named after Sonic the Hedgehog’s Knuckles.",
      "Built entirely of muscles.",
      "Not known for chuckling."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/knuckles/knuckles-1.jpg",
      "/src/assets/3lb/knuckles/knuckles-2.jpg",
      "/src/assets/3lb/knuckles/knuckles-3.png",
      "/src/assets/3lb/knuckles/knuckles-4.jpg",
      // "/src/assets/3lb/knuckles/knuckles-5.jpg",
      // "/src/assets/3lb/knuckles/knuckles-6.jpg"
    ]
  },

  lBillet: {
    name: "L Billet",
    makers: [
      "James Courtenay",
      "James LaSalle",
      "Isaac Newcomb",
      "Mohammed Chowdhury",
      "Spencer Hurst",
      "Stella Taglich",
      "Zander Knight"
    ],
    description:
      "A beloved mini bot known for his heroic sacrifice that disabled an enemy's weapon. His built-in turbo button makes him unforgettable.",
    image: "/src/assets/mini/l-billet/l-billet.png",
    stats: {
      vintage: "2023",
      height: "3 inches",
      weight: "1 lb 5 oz",
      fights: "1",
      wins: "1",
      top_speed: "3 mph",
      weapon_speed: "Mach 2",
      most_damaged_part: "Everything",
      favorite_movie: "Braveheart"
    },
    featured_fight: "https://www.youtube.com/embed/tLyMYeTSIGk?si=AQHij7teWSeoEjWH",
    design:
      "Armed solely with a wedge and fueled by bravery, L Billet distracts opponents with repurposed parts.",
    trivia: [
      "Lives on in our hearts.",
      "Originally an RC car converted into a mini bot.",
      "Notable for his iconic squeak at destruction.",
      "Equipped with a turbo mode."
    ],
    fights: [
      {
        event: "May 6 2023",
        opponent: "Cthulhu",
        result: "Loss (Win in our hearts though)",
        by: "KO",
        video: "https://www.youtube.com/watch?v=tLyMYeTSIGk",
        length: "85"
      }
    ],
    gallery: ["/src/assets/mini/l-billet/l-billet.png"]
  },

  lance: {
    name: "Lance",
    makers: [
      "Bruno Tassari",
      "Charles Liu",
      "Kevin Liu",
      "Marcus Esposito",
      "Michelle Zhou",
      "Molly Drumm",
      "Sana Gaya",
      "Shubham Mathur",
      "Ethan Zhang",
      "Grace Lim",
      "Katie Huntley",
      "Richard Jin",
      "Sebastian Rivera",
      "Shao Stassen",
      "Shawn Chen"
    ],
    description:
      "CRC’s first competition-ready robot for Sportsman, Lance is an adorable, loveable roomba armed with a lance for flipping opponents.",
    image: lance_main,
    stats: {
      vintage: "2022",
      height: "2.5\"",
      weight: "12 lbs",
      fights: "2",
      wins: "1",
      top_speed: "fast",
      weapon_speed: "20 mph",
      most_damaged_part: "Weapon Motor",
      favorite_movie: "First Knight"
    },
    featured_fight:
      "https://www.youtube.com/embed/It5MpH50dvs?start=6274",
    design:
      "Constructed from puzzle-fit HDPE, Lance features a one-sided lance and four-wheel drive for exceptional maneuverability.",
    trivia: [
      "Sportsman subteam claims his 'super-strong lance' can lift everything.",
      "His lance was CRC's first water-jetted part.",
      "Originally designed with foam armor for counterattack indications.",
      "Lance can wave to you.",
      "He’s even called a best friend by some."
    ],
    fights: [
      {
        event: "Apr 23 2022",
        opponent: "Woody II",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/It5MpH50dvs?t=6260",
        length: "61"
      },
      {
        event: "Apr 23 2022",
        opponent: "Woody II",
        result: "Loss",
        by: "Judges",
        video: "https://youtu.be/wf528BQr0eA?t=28936",
        length: "180"
      }
    ],
    gallery: [
      lance1, lance2, lance3, lance4
    ]
  },

  logobot: {
    name: "Logobot",
    makers: ["Edith Chen", "Luke Murphy", "Maya Zamor"],
    description:
      "Logobot is CRC's most recognizable robot—embodying the team logo with a high-pressure pincer capable of crushing enemy armor.",
    image: "/src/assets/3lb/logobot/logobot.png",
    stats: {
      vintage: "2022",
      height: "8 meters",
      weight: "3 lbs",
      fights: "A lot",
      wins: "A lot",
      top_speed: "124.8 kph",
      weapon_speed: "Varies",
      most_damaged_part: "Chassis",
      favorite_movie: "Real Steel"
    },
    featured_fight: "/src/assets/3lb/logobot/logobot-video.mp4",
    design:
      "Inspired by the CRC logo, Logobot’s sleek lines and hidden omni wheel maintain its iconic side profile. Its high-pressure pincer, spun by a high-torque motor, pierces through even the toughest armor.",
    trivia: [
      "Considered CRC’s best design project.",
      "Its pincer can crush steel.",
      "Originally modeled in Paint3D.",
      "Capable of self-righting when flipped."
    ],
    fights: [
      {
        event: "",
        opponent: "Fortunate Son",
        result: "Win",
        by: "KO",
        video: "",
        length: "104"
      },
      {
        event: "",
        opponent: "Black Beetle",
        result: "Loss",
        by: "Judges",
        video: "",
        length: "180"
      },
      {
        event: "",
        opponent: "Idiot Sandwich",
        result: "Win",
        by: "KO",
        video: "",
        length: "154"
      },
      {
        event: "",
        opponent: "Knuckles",
        result: "Win",
        by: "KO",
        video: "",
        length: "46"
      },
      {
        event: "",
        opponent: "Dumb and Dumber",
        result: "Win",
        by: "KO",
        video: "",
        length: "22"
      }
    ],
    gallery: [
      "/src/assets/3lb/logobot/logobot.png",
      "/src/assets/3lb/logobot/logobot-video.mp4"
    ]
  },

  manny: {
    name: "Manny",
    makers: [
      "Bruno Tassari", "Charles Liu", "Isaac Newcomb", "Kevin Liu", "Marcus Esposito", "Michelle Zhou",
      "Molly Drumm", "Richard Jin", "Sana Gaya", "Shubham Mathur", "Ashrafur Siddiqui", "Blaze Ezlakowski",
      "Ethan Zhang", "Grace Lim", "Katie Huntley", "Luke Murphy", "Rochelle Barsz", "Rob Measner",
      "Richard Kang", "Sebastian Rivera", "Shao Stassen", "Shawn Chen"
    ],
    description:
      "Manny is CRC’s first autonomous robot with facial and sign recognition, lifting his tusks and dropping his hammer on target.",
    image: "/src/assets/retired/manny/manny.png",
    stats: {
      vintage: "2022",
      height: "6 inches",
      weight: "7 lbs",
      fights: "N/A",
      wins: "N/A",
      top_speed: "20 mph",
      weapon_speed: "Slow",
      most_damaged_part: "Tusks",
      favorite_movie: "Ice Age"
    },
    featured_fight: "",
    design:
      "Driven by a Raspberry Pi, Manny’s lifting mechanism and underdog spirit make him a formidable autonomous combatant.",
    trivia: [
      "His favorite movie is Ice Age 3.",
      "He once served as a delivery robot and Egyptian Rat Screw player.",
      "Survived a brain transplant from Arduino to Raspberry Pi.",
      "Though intended to weigh 12 lbs, he comes in at 7 lbs.",
      "He has both big and mini plush counterparts."
    ],
    fights: [],
    gallery: [
      "/src/assets/retired/manny/manny-1.jpg",
      "/src/assets/retired/manny/manny-2.jpeg",
      "/src/assets/retired/manny/manny-3.jpg",
      "/src/assets/retired/manny/manny-4.jpeg"
    ]
  },

  milo: {
    name: "Milo",
    makers: ["Luke Murphy"],
    description:
      "Milo is a Tamiya RC car assembled by Luke Murphy when he was 11. Originally used as a sparring bot against Lance, his worn gears tell a story of countless battles.",
    image: "/src/assets/3lb/milo/milo.png",
    stats: {
      vintage: "Spring 2022",
      height: "5 inches",
      weight: "3 lbs",
      fights: "Many",
      wins: "1",
      top_speed: "Fast",
      weapon_speed: "N/A",
      most_damaged_part: "Pinion Gear",
      favorite_movie: "Speed Racer"
    },
    featured_fight: "/src/assets/3lb/milo/milovsrichard.mp4",
    design:
      "A Tamiya TT-01 model with 4WD, Milo’s gear is so worn he sounds like a dying goat.",
    trivia: [
      "Assembled at age 11.",
      "Used as a training dummy until Richard was built.",
      "His gears tell the tale of many fights."
    ],
    fights: [
      {
        event: "Apr 23 2022",
        opponent: "Lance",
        result: "Win",
        by: "Judges",
        video: "",
        length: ""
      },
      {
        event: "Apr 23 2022",
        opponent: "Lance",
        result: "Loss",
        by: "Judges",
        video: "",
        length: ""
      },
      {
        event: "Apr 23 2022",
        opponent: "Richard",
        result: "Loss",
        by: "Judges",
        video: "",
        length: ""
      },
      {
        event: "Apr 23 2022",
        opponent: "Florence",
        result: "Loss",
        by: "Judges",
        video: "",
        length: ""
      }
    ],
    gallery: [
      // "/src/assets/3lb/milo/milo-pixel.png",
      "/src/assets/3lb/milo/milo.png",
      "/src/assets/3lb/milo/milovsrichard.mp4"
    ]
  },

  mommyIssues: {
    name: "Mommy Issues",
    makers: ["Aaron Harnish", "Angela Zhu", "Ethan Hernandez"],
    description:
      "Mommy Issues is a 3lb bot designed to crush opponents before the fight even begins, with a face so handsome it stops enemies in their tracks.",
    image: "/src/assets/3lb/mommy-issues/mommy-issues.png",
    stats: {
      vintage: "2023",
      height: "2.1 in (taller than you)",
      weight: "4.4 lbs hardened steel",
      fights: "6",
      wins: "9",
      top_speed: "Wouldn't you like to know",
      weapon_speed: "Dramatically slow",
      most_damaged_part: "Its heart",
      favorite_movie: "Wolf of Wall Street"
    },
    featured_fight: "",
    design:
      "Equipped with two rotating aluminum arms and a unique walker drive, Mommy Issues combines brute force with style.",
    trivia: [
      "Calls his mom twice a day.",
      "Has Rosie's name tattooed on his knuckles.",
      "Wears an authentic Rolex that sprays cologne.",
      "Runs a relationship advice page in the Cornell Daily Sun."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/mommy-issues/mommy-issues-pixel.png",
      "/src/assets/3lb/mommy-issues/mommy-issues.png",
      "/src/assets/3lb/mommy-issues/mommy-issues-1.jpg",
      "/src/assets/3lb/mommy-issues/mommy-issues-2.jpg",
      "/src/assets/3lb/mommy-issues/mommy-issues-3.jpg"
    ]
  },

  perrybot: {
    name: "Perrybot",
    makers: [],
    description:
      "Perrybot is a state-of-the-art horizontal spinner that transforms from a docile platypus to an aggressive combat machine in a blink.",
    image: "/src/assets/3lb/perrybot/perrybot.png",
    stats: {
      vintage: "2022",
      height: "2.5 inches",
      weight: "3 lbs",
      fights: "129 (Phineas and Ferb episodes)",
      wins: "Every single time against Dr. Doofenshmirtz",
      top_speed: "Insanely fast",
      weapon_speed: "Even faster",
      most_damaged_part: "Hat",
      favorite_movie: "Phineas and Ferb the Movie: Across the 2nd Dimension"
    },
    featured_fight: "",
    design:
      "Modeled after Perry the Platypus, Perrybot sports a sleek teal exterior and a fedora for deceptive battle advantage.",
    trivia: [
      "His favorite word is 'Krrrrrrrr'.",
      "Can shapeshift: with his hat he’s Agent P, without it, just Perry.",
      "He has his own theme song."
    ],
    fights: [],
    gallery: [
      // "/src/assets/3lb/perrybot/perrybot-pixel.png",
      "/src/assets/3lb/perrybot/perrybot.png",
      "/src/assets/3lb/perrybot/perrybot-1.png",
      "/src/assets/3lb/perrybot/perrybot-2.png",
      "/src/assets/3lb/perrybot/perrybot-3.png"
    ]
  },

  rocky: {
    name: "Rocky",
    makers: ["Marcus Esposito", "Mohammad Ali Moghaddasi"],
    description:
      "Rocky is a born fighter with a compact, two-wheeled design and a pneumatic punch that knocks opponents out.",
    image: "/src/assets/3lb/rocky/rocky.png",
    stats: {
      vintage: "2021",
      height: "3 inches",
      weight: "2.98 lbs",
      fights: "None",
      wins: "Undefeatable",
      top_speed: "3 mph",
      weapon_speed: "Too fast",
      most_damaged_part: "His Ego",
      favorite_movie: "Rocky III"
    },
    featured_fight: "",
    design:
      "Rocky is built with an HDPE chassis, an aluminum 'fist,' and stabilized with a rear caster.",
    trivia: [
      "Originally named Robert Balboa.",
      "Uses a roller for movement.",
      "Powered by a CO2 bike tire inflator.",
      "His pneumatic pistons were sourced from a Halloween store."
    ],
    fights: [],
    gallery: [
      // "/src/assets/3lb/rocky/rocky-pixel.png",
      "/src/assets/3lb/rocky/rocky.png",
      "/src/assets/3lb/rocky/rocky-1.png",
      "/src/assets/3lb/rocky/rocky-2.jpg",
      "/src/assets/3lb/rocky/rocky-3.jpg"
    ]
  },

  rolypoly: {
    name: "Rolypoly",
    makers: [],
    description:
      "Once just a wheel for Kinetic, Rolypoly became sentient after eating a radioactive fly and now dispenses wisdom.",
    image: "/src/assets/3lb/rolypoly/rolypoly.png",
    stats: {
      vintage: "Spring 2022",
      height: "0.825 in",
      weight: "100 g",
      fights: "252",
      wins: "252",
      top_speed: "Rolling Average",
      weapon_speed: "Spiral Speed",
      most_damaged_part: "Center Hole",
      favorite_movie: "An Ant's Life"
    },
    featured_fight: "",
    design:
      "A Banebots wheel with a blue finish, Rolypoly’s radioactive powers grant him extraordinary hearing.",
    trivia: [
      "Rolypoly rolled into the test box one day and emerged as a deity.",
      "His favorite book is Lord of the Flies."
    ],
    fights: [],
    gallery: [
      // "/src/assets/3lb/rolypoly/rolypoly-pixel.png",
      "/src/assets/3lb/rolypoly/rolypoly.png",
      "/src/assets/3lb/rolypoly/rolypoly-1.jpg",
      "/src/assets/3lb/rolypoly/rolypoly-2.jpg"
    ]
  },

  rosieJunior: {
    name: "Rosie Junior",
    makers: [
      "James Courtenay",
      "James LaSalle",
      "Isaac Newcomb",
      "Mohammed Chowdhury",
      "Spencer Hurst",
      "Stella Taglich",
      "Zander Knight"
    ],
    description:
      "Rosie Junior never actually fought—she stayed on the sidelines, preferring not to hurt anyone.",
    image: "/src/assets/mini/rosie-junior/rosie-junior.png",
    stats: {
      vintage: "2023",
      height: "3 inches",
      weight: "1 lb 5 oz",
      fights: "None (but not because she was too scared!)",
      wins: "Winning by default",
      top_speed: "3 mph towards enemies, 11.5 mph away from enemies",
      weapon_speed: "Pacifist",
      most_damaged_part: "Her mental health (in and out of therapy)",
      favorite_movie: "McFarland, USA"
    },
    featured_fight: "",
    design:
      "With only a modest wedge for defense, Rosie Junior prefers peace over combat—proving that sometimes not fighting is winning.",
    trivia: [
      "She holds the world record for fastest combat robot to be built (by default).",
      "Insists she is not a coward."
    ],
    fights: [],
    gallery: [
      // "/src/assets/mini/rosie-junior/rosie-junior-pixel.png",
      "/src/assets/mini/rosie-junior/rosie-junior.png",
      "/src/assets/mini/rosie-junior/rosie-junior-1.jpg",
      "/src/assets/mini/rosie-junior/rosie-junior-2.jpg",
      "/src/assets/mini/rosie-junior/rosie-junior-3.jpg"
    ]
  },

  rosie: {
    name: "Rosie",
    makers: [
      "Anna Boese",
      "Isaac Newcomb",
      "James Courtenay",
      "James LaSalle",
      "Mohammed Chowdhury",
      "Spencer Hurst",
      "Stella Taglich",
      "Zander Knight"
    ],
    description:
      "Rosie is a 12lb horizontal spinner known for her hefty steel weapon and a unique indirect drive system.",
    image: rosie_main,
    stats: {
      vintage: "2023",
      height: "4\"",
      weight: "12 lbs",
      fights: "7",
      wins: "4",
      top_speed: "5 mph",
      weapon_speed: "138 mph",
      most_damaged_part: "Weapon",
      favorite_movie: "The Grand Budapest Hotel"
    },
    featured_fight: "",
    design:
      "Built from Aluminum 6061 and HDPE with a 3/8\" AR400 weapon, Rosie’s blue wheels and belt-driven system provide style and substance.",
    trivia: [
      "In a love triangle with Richard and Florence.",
      "Lost a match to Richard in Spring 2023.",
      "Rumored to smell, though unconfirmed."
    ],
    fights: [
      {
        event: "Mar 18 2023",
        opponent: "Doombedba",
        result: "Win",
        by: "KO",
        video: "N/A",
        length: "20"
      },
      {
        event: "Mar 18 2023",
        opponent: "Doombedba",
        result: "Win",
        by: "KO",
        video: "https://www.youtube.com/live/xQTbCkwBmD4?feature=share&t=15731",
        length: "93"
      },
      {
        event: "Mar 18 2023",
        opponent: "Richard",
        result: "Loss",
        by: "Judges",
        video: "https://www.youtube.com/watch?v=xQTbCkwBmD4&t=17853s",
        length: "180"
      },
      {
        event: "May 6 2023",
        opponent: "Cthulu",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/GeFBM7YPpiY?t=369",
        length: "114"
      }
    ],
    gallery: [
      rosie1,
      rosie2,
      rosie3,
      rosie4,
      rosie5,
      rosie6,
      rosie7,
    ]
  },

  samurai: {
    name: "Samurai",
    makers: ["Vishnu Nair", "Javohir Abdurazzakov", "Jenny Wu", "Manuely Feliz Portes"],
    description:
      "The Samurai channels the spirit of a warrior with ramps for defense and a rapidly spinning blade for offense.",
    image: "/src/assets/3lb/samurai/robot_cad_final.png",
    stats: {
      vintage: "2023",
      height: "4.5 in",
      weight: "3 lbs",
      fights: "52",
      wins: "52",
      top_speed: "2 mph",
      weapon_speed: "999 mph",
      most_damaged_part: "Nothing",
      favorite_movie: "Yasuke"
    },
    featured_fight:
      "",
    design:
      "Featuring passive ramps and an active top-mounted spinner, Samurai’s design blends defense with swift offensive maneuvers.",
    trivia: [
      "He is an actual samurai.",
      "Perfected the spinning sword art.",
      "Set to appear in Kung Fu Panda 4.",
      "Has an affinity for cats."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/samurai/Pixil Frame 0.png",
      "/src/assets/3lb/samurai/robot_cad_final.png",
      "/src/assets/3lb/samurai/robot-cad-final2.png"
    ]
  },

  scorpion: {
    name: "Scorpion",
    makers: ["Evan Zhu", "Mei Ling Wood", "Alyssa Hsu", "Kai Rodger"],
    description:
      "Scorpion is the epitome of precision and power in 3lb battlebots, boasting an undefeated record.",
    image: "/src/assets/3lb/scorpion/scorpion-3.png",
    stats: {
      vintage: "2023",
      height: "6 foot",
      weight: "3 lbs",
      fights: "100",
      wins: "100",
      top_speed: "299,792,458 m/s",
      weapon_speed: "Fast as lightning",
      most_damaged_part: "Chassis",
      favorite_movie: "Mortal Kombat"
    },
    featured_fight: "",
    design:
      "Armed with a fearsome tail and razor-sharp claws, Scorpion’s wedge and tail work in unison to pierce enemy defenses.",
    trivia: [
      "Scorpion only wins.",
      "Has a fondness for boba.",
      "Can self-right using its massive weapon.",
      "Its original weapon was made of soft aluminum."
    ],
    fights: [
      {
        event: "event",
        opponent: "Mommy Issues",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=5239",
        length: "4"
      },
      {
        event: "event",
        opponent: "Roomba",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=8804",
        length: "12"
      },
      {
        event: "event",
        opponent: "Narwhal",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=17852",
        length: "15"
      },
      {
        event: "event",
        opponent: "Two-Face",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=29989",
        length: "18"
      },
      {
        event: "event",
        opponent: "Samurai",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=33573",
        length: "5"
      }
    ],
    gallery: [
      "/src/assets/3lb/scorpion/scorpion-pixel.png",
      "/src/assets/3lb/scorpion/scorpion-1.png",
      "/src/assets/3lb/scorpion/scorpion-4.png"
    ]
  },

  shadowRichard: {
    name: "Shadow Richard",
    makers: ["Lucien Eckert", "Luke Murphy"],
    description:
      "Richard's darker, mysterious shadow – a secret best left unspoken.",
    image: "/src/assets/3lb/shadow-richard/shadow-richard.png",
    stats: {
      vintage: "Spring 2023",
      height: "16 pixels",
      weight: "Shadow",
      fights: "1000",
      wins: "1000",
      top_speed: "Mach 5",
      weapon_speed: "Better than Richard",
      most_damaged_part: "Nothing",
      favorite_movie: "Freaky Friday"
    },
    featured_fight: "",
    design: "A mysterious presence lurking in the background of CRC VS.",
    trivia: ["Shadow Richard is simply Richard's shadow."],
    fights: [],
    gallery: [
      "/src/assets/3lb/shadow-richard/shadow-richard-pixel.png",
      "/src/assets/3lb/shadow-richard/shadow-richard.png"
    ]
  },

  steve: {
    name: "Steve",
    makers: ["Ethan Zhang", "James LaSalle", "Sardor Rahmatulloev", "Zarif Pathan"],
    description:
      "Steve, CRC's grim reaper, built a spruce house, mines diamonds, and wields a sharp diamond sword.",
    image: "/src/assets/3lb/steve/steve.PNG",
    stats: {
      vintage: "2022",
      height: "2 blocks",
      weight: "3 lbs",
      fights: "3",
      wins: "2",
      top_speed: "8 blocks per second",
      weapon_speed: "Mines 5 blocks per second",
      most_damaged_part: "Pickaxe tips",
      favorite_movie: "Dream Face Reveal"
    },
    featured_fight:
      "https://www.youtube.com/embed/dgha9S39Y6M?si=hVPlvAzsZyORTLE-",
    design:
      "Steve wields Sharpness V on his pickaxes and uses his front saw to deliver devastating strikes.",
    trivia: [
      "Likes dirt.",
      "Favors cubes.",
      "Admires miners.",
      "Adores diamonds."
    ],
    fights: [
      {
        event: "Herobrine",
        opponent: "Herobrine",
        result: "Win",
        by: "Knew the Lore",
        video: "",
        length: "2011"
      },
      {
        event: "Bedrock Block",
        opponent: "Bedrock Block",
        result: "Loss",
        by: "Time",
        video: "",
        length: "100000"
      },
      {
        event: "William",
        opponent: "William",
        result: "Win",
        by: "Not Allergic to Cats",
        video: "",
        length: "1"
      }
    ],
    gallery: [
      "/src/assets/3lb/steve/steve-1.PNG",
      "/src/assets/3lb/steve/steve-2.PNG",
      "/src/assets/3lb/steve/steve-3.jpg",
      "/src/assets/3lb/steve/steve-4.jpg",
      "/src/assets/3lb/steve/steve-5.jpg",
      "/src/assets/3lb/steve/steve-6.jpg",
      "/src/assets/3lb/steve/steve-7.jpg",
      "/src/assets/3lb/steve/steve-8.png",
      "/src/assets/3lb/steve/steve-9.png",
      "/src/assets/3lb/steve/steve.png"
    ]
  },

  stuffedManny: {
    name: "Stuffed Manny",
    makers: ["Sofie Halpern's Friend"],
    description:
      "Stuffed Manny is the plush incarnation of Manny - CRC's beloved mascot turned merchandise icon.",
    image: "/src/assets/3lb/stuffed-manny/stuffed-manny.png",
    stats: {
      vintage: "Spring 2022",
      height: "6 in",
      weight: "1.3 lbs",
      fights: "Advertising World",
      wins: "Fans",
      top_speed: "Slower than Manny",
      weapon_speed: "Negative Speed",
      most_damaged_part: "Wheels",
      favorite_movie: "Ted"
    },
    featured_fight: "",
    design:
      "Crafted from soft fibers with expert sewing, Stuffed Manny is a plump model whose wheel may fall off—requiring a manicure.",
    trivia: [
      "His weapon is backwards.",
      "He dislikes being sat on."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/stuffed-manny/stuffed-manny.png",
    ]
  },

  swissCheese: {
    name: "Swiss Cheese",
    makers: ["Kevin Liu", "Ricky Wang", "Shubham Mathur"],
    description:
      "Meet Swiss Cheese, the cheese-loving bot whose spinning saw blades slice through opponents with cheesy finesse.",
    image: "/src/assets/3lb/swiss-cheese/swiss-cheese.png",
    stats: {
      vintage: "2020",
      height: "1 cheese block",
      weight: "3 lbs",
      fights: "None",
      wins: "Moldy",
      top_speed: "Slice",
      weapon_speed: "Cheez",
      most_damaged_part: "Blades",
      favorite_movie: "As Gouda as it Gets"
    },
    featured_fight: "",
    design:
      "A 3lb bot with two powered saw blades, a two-wheel drive system with a ball roller, and a V-shaped chassis riddled with holes.",
    trivia: [
      "Loves mozzarella.",
      "Was originally named Gruyere.",
      "One of CRC's earliest designs."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/swiss-cheese/swiss-cheese.png",
      "/src/assets/3lb/swiss-cheese/swiss-cheese-1.jpg"
    ]
  },

  testBox: {
    name: "Test Box",
    makers: [
      "Luke Murphy", "Shawn Chen", "Spencer Hurst", "Sofie Halpern", "Narayan Rueppel",
      "Marcus Esposito", "Kevin Sturm", "Manuely Feliz Portes", "Alex Jenkins", "Mattew Anazco",
      "Ethan Hernandez"
    ],
    description:
      "The mythical perfect test box—the Holy Grail of CRC—crafted under impossible constraints.",
    image: "/src/assets/3lb/test-box/test-box.png",
    stats: {
      vintage: "V1: Spring 2022 & V2: Estimated Spring 2024",
      height: "2.5 feet",
      weight: "Undisclosed (just don't let it tip over)",
      fights: "0",
      wins: "0 (it tips over and crushes someone)",
      top_speed: "It's best if we never find out",
      weapon_speed: "Not applicable",
      most_damaged_part: "The souls of those who worked on it",
      favorite_movie: "Mission: Impossible"
    },
    featured_fight: "",
    design:
      "A 5' x 5' x 2.5' steel box with polycarbonate walls—a paradox of strength and cost-efficiency.",
    trivia: [
      "The first test box was made of wood and had a hole.",
      "A metal iteration is in development.",
      "It's said that thinking about its constraints hurts both physically and emotionally."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/test-box/test-box.png",
      "/src/assets/3lb/test-box/test-box-1.jpg",
      "/src/assets/3lb/test-box/test-box-2.jpg",
      "/src/assets/3lb/test-box/test-box-3.jpg"
    ]
  },
  wabbit: {
    name: "Wabbit",
    makers: ["Isaac Newcomb", "Michelle Zhou", "Sofie Halpern"],
    description:
      "Wabbit, the Rabbit Rapper, is a two-wheel-drive vertical spinner with an HDPE chassis and expressive, ear-like uprights.",
    image: "/src/assets/3lb/wabbit/wabbit.png",
    stats: {
      vintage: "2020",
      height: "4 inches",
      weight: "3 lbs",
      fights: "None",
      wins: "None",
      top_speed: "Limitless",
      weapon_speed: "Bunny Hops",
      most_damaged_part: "Teeth",
      favorite_movie: "Monty Python and the Holy Grail"
    },
    featured_fight: "",
    design:
      "Built on an HDPE chassis with aluminum uprights and wedges, Wabbit blends aggressive combat with playful rap aesthetics.",
    trivia: [
      "One of CRC's first designs.",
      "His battery, ESCs, and motors are heavily constrained.",
      "His initial design had too many screws—earning him the nickname 'Dentist Bot.'",
      "He fears holy hand grenades."
    ],
    fights: [],
    gallery: [
      "/src/assets/3lb/wabbit/wabbit.png",
      "/src/assets/3lb/wabbit/wabbit-1.png",
      "/src/assets/3lb/wabbit/wabbit-2.jpg",
      "/src/assets/3lb/wabbit/wabbit-3.jpg",
      "/src/assets/3lb/wabbit/wabbit-4.jpg",
      "/src/assets/3lb/wabbit/wabbit-5.jpg",
      "/src/assets/3lb/wabbit/wabbit-6.jpg",
    ]
  },

  richard: {
    name: "Richard",
    makers: [
      "V1: Anna Boese, Erhunmwunse Eghafona, Isaac Newcomb, James Courtenay, Mohammad Ali Moghaddasi, Ricky Wang, Sofie Halpern, Spencer Hurst",
      "V2-3: Anna Boese, Isaac Newcomb, James Courtenay, James LaSalle, Mohammed Chowdhury, Spencer Hurst, Stella Taglich, Zander Knight"
    ],
    description:
      "Richard, CRC's first competition-ready robot, is a 12lb vertical spinner with a weapon that smashes opponents into the air.",
    image: richard_main,
    stats: {
      vintage: "2022",
      height: "6.75\"",
      weight: "12 lbs",
      fights: "12",
      wins: "6",
      top_speed: "5 mph",
      weapon_speed: "138 mph",
      most_damaged_part: "Weapon",
      favorite_movie: "Real Steel"
    },
    featured_fight:
      "https://www.youtube.com/embed/wf528BQr0eA?start=17856",
    design:
      "Designed initially in Fall 2021, Richard has evolved through multiple iterations to improve reliability and durability.",
    trivia: [
      "Richard hates tea.",
      "Can self-right by charging into a wall with its weapon active.",
      "Originally had a soft aluminum weapon.",
      "Loves milk.",
      "The 'cute' tape on his weapon started as a TikTok joke.",
      "Tape stickers are replaced for luck."
    ],
    fights: [
      {
        event: "Apr 23 2022",
        opponent: "Blue Cheese",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=5239",
        length: "104"
      },
      {
        event: "Apr 23 2022",
        opponent: "Hot Leaf Juice",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=8804",
        length: "126"
      },
      {
        event: "Apr 23 2022",
        opponent: "Milktank",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=17852",
        length: "154"
      },
      {
        event: "Apr 23 2022",
        opponent: "Teleport",
        result: "Win",
        by: "Judges",
        video: "https://youtu.be/wf528BQr0eA?t=29989",
        length: "180"
      },
      {
        event: "Apr 23 2022",
        opponent: "Krunk",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/wf528BQr0eA?t=33573",
        length: "22"
      },
      {
        event: "Dec 17 2022 Champs",
        opponent: "Demogorgon",
        result: "Win",
        by: "KO",
        video: "https://youtu.be/b79xlq1G41M?t=24429",
        length: "19"
      },
      {
        event: "Dec 17 2022 Champs",
        opponent: "Disko",
        result: "Win",
        by: "Judges",
        video: "https://youtu.be/b79xlq1G41M?t=19861",
        length: "180"
      },
      {
        event: "Dec 17 2022 Champs",
        opponent: "Buzzzz-Kill",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/b79xlq1G41M?t=2011",
        length: "57"
      },
      {
        event: "Dec 17 2022 Champs",
        opponent: "RAM PLAN (Full Combat)",
        result: "Loss",
        by: "Judges",
        video: "https://youtu.be/b79xlq1G41M?t=32012",
        length: "180"
      },
      {
        event: "Mar 18 2023",
        opponent: "KillaJoule",
        result: "Loss",
        by: "KO",
        video: "https://youtu.be/hukdvLa4o8A?t=8978",
        length: "89"
      },
      {
        event: "Mar 18 2023",
        opponent: "Rosie",
        result: "Win",
        by: "Judges",
        video: "https://www.youtube.com/live/xQTbCkwBmD4?feature=share&t=17615",
        length: "180"
      },
      {
        event: "Mar 18 2023",
        opponent: "BlackJack",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/live/xQTbCkwBmD4?feature=share&t=27874",
        length: "98"
      }
    ],
    gallery: [
      richard1, richard2, richard3, richard4, richard5, richard6, richard7,
      richard8, richard9, richard10, richard11, richard12, richard13,
      richard14, richard15, richard16, richard17, richard18, richard19,
      richard20, richard21, richard22, richard23, richard24, richard25,
      richard26
    ]
  },
};

