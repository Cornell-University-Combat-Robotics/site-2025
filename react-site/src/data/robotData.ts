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
    description: "Growing up in Gotham City's hardware store Fangular Momentum had a tough upbringing. He decided to turn his dark past into a force for good and take on his alter ego, BatBot. Everyday he protects the aisles of Gotham City's Home Depot from fierce foes like JokerBot and BaneBot.",
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
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?start=28006",
    design: "Fangular Momentum has vertical spinner in the shape of a batarang.",
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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.instagram.com/p/DCX2RjuOpGA/", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  },

  beater: {
    name: "Beater B. Barker",
    makers: ["Anna Boese", "Isaac Newcomb", "Stella Taglich", "Zander Knight", "James LaSalle", "Ethan Hernandez", "Kevin Sturm", "Mattew Anazco", "Mohammed Chowdhury"],
    description: "Beater B. Barker? I hardly know her! With his big 🅱 energy and his quick footwork on the arena floor, Beater absolutely dominates the competition. However, his one fatal flaw is the hubris of having a flywheel: he thinks he can turn on a dime, but he has to lean on the wall for 10 seconds if he's overzealous. This can (and has) cost him the match. He weeps when he remembers that day, but he knows there are more Beater Barkers out there in the S🅱iderverse, and one of them will win the championship when the time comes.",
    image: "/src/assets/nardo-whole.png",
    stats: {
      vintage: "2024",
      height: "1.5 ft",
      weight: "30 lbs",
      fights: "3",
      wins: "2",
      top_speed: "11 mph",
      weapon_speed: "1000 rpm",
      most_damaged_part: "Weapon",
      favorite_movie: "The Bee Movie"
    },
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?start=28006",
    design: "A counter-rotating brass flywheel sits in the center of Beater's bright red beater bar. Powered separately, the flywheel and weapon counteract each other's angular momentum to reduce the gyro effect when Beater turns in place. This means he can pack the punch of a heavy hitter without getting bogged down by maneuverability problems. Speaking of maneuverability, Beater maximizes grip and speed with its titanium-cleated 4-wheel indirect drivetrain. With a top speed of 11 mph and an acceleration to full speed in a fraction of a second, there's no outrunning this bot. UHMW wheel guards keep the belts and pulleys protected, and 1/2 inch aluminum standoffs allow for quick, easy service. Also highly serviceable is the electronics compartment, housed in a UHMW billet frame and extending upward into a 3D - printed carbon - fiber nylon shell.The weapon uprights sandwich the electronics, held together by titanium rings that bolt in from the top and bottom.",
    trivia: ["Trivia 1", "Trivia 2"],
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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  },

  hestr: {
    name: "Dauður Hestr",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description: "FLAMETHROWERS!! Who doesn't love flamethrowers?",
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
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?start=28006",
    design: "Slugma is an all-rounder battle-bot, with not one, but two weapons in its arsenal: a vertical lifter and a flamethrower. By firstly lifting its opponent off the ground, Slugma activates its secret move: paralysis. Then, Slugma activates its fire breathing ability to deal fatal damage, ending the battle once-and-for-all.",
    trivia: ["Slugma was originally named Venus Fly Trap, following the team's original idea of making vertical clampers. But having hot TPU drip down onto the top of our robot would unfortunately be fatal, and so we changed the clampers to vertical lifters instead!", "Trivia 2"],
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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  },

  slugma: {
    name: "Slugma",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description: "FLAMETHROWERS!! Who doesn't love flamethrowers?",
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
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?start=28006",
    design: "Slugma is an all-rounder battle-bot, with not one, but two weapons in its arsenal: a vertical lifter and a flamethrower. By firstly lifting its opponent off the ground, Slugma activates its secret move: paralysis. Then, Slugma activates its fire breathing ability to deal fatal damage, ending the battle once-and-for-all.",
    trivia: ["Slugma was originally named Venus Fly Trap, following the team's original idea of making vertical clampers. But having hot TPU drip down onto the top of our robot would unfortunately be fatal, and so we changed the clampers to vertical lifters instead!", "Trivia 2"],
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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  },

  swiss: {
    name: "The Swiss Slinger",
    makers: ["Castiel Li", "Caedy Lee", "Jason Choi", "Rohin Phukan"],
    description: "FLAMETHROWERS!! Who doesn't love flamethrowers?",
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
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?start=28006",
    design: "Slugma is an all-rounder battle-bot, with not one, but two weapons in its arsenal: a vertical lifter and a flamethrower. By firstly lifting its opponent off the ground, Slugma activates its secret move: paralysis. Then, Slugma activates its fire breathing ability to deal fatal damage, ending the battle once-and-for-all.",
    trivia: ["Slugma was originally named Venus Fly Trap, following the team's original idea of making vertical clampers. But having hot TPU drip down onto the top of our robot would unfortunately be fatal, and so we changed the clampers to vertical lifters instead!", "Trivia 2"],
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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  },

  "twoface": {
    name: "Two-Face",
    makers: ["Rachel Pineda", "Tyler Sprague", "Chris Adonizio"],
    description: "Two-Face is the most streamlined robot the modern battlebots scene has ever seen—too powerful to set foot on the modern battlefield. Designed by the some of CRC Class of 2027's most innovative newbies, Two-Face was originally intended to ensure superiority over the rest of the 3lb robots. Though faced with tough budget and weight constraints, Two-Face proved itself to be everything it needed to be. The mere sight of Two-Face is known to make even a veteran robot break out in a cold sweat, and theoretically a single Two-Face can take on and wipe out an entire battalion of battlebots.",
    image: "../assets/12lb/two-face/two-face-1.png",
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
    design: "The Two-Face is armed with a multitude of offensive weapons and defensive design choices, ready to face any enemy on any side. Its main weapon is a massive hammer, powered by a motor to rotate over 180 degrees and crash down on anything in its way. The hammer has sharp edges; a powerful piercer. For defense, Two-Face has two wedges on either side. The wedges not only prevent what would otherwise be chassis corners from being destroyed in battle, but also encourage enemy robots to slide up the wedge to be in range of Two-Face's hammer.",
    trivia: [
      "Two-Face loves the truth.",
      "Two-Face can be driven both forward and backward.",
      "Two-Face was originally named \"See-saw\"."
    ],
    fights: [],
    gallery: [
      "../assets/12lb/two-face/two-face-1.png",
      "../assets/12lb/two-face/two-face-2.png",
      "../assets/12lb/two-face/two-face-3.png"
    ]
  },
  kenny: {
    name: "Kenny",
    makers: ["Zander Knight", "Tyler Sprague"],
    description: "Kenny, CRC's newest Minibot, was made to accompany the Kinetic subteam's Beater B Barker in our April 2024 competition. Kenny has no active weapon, but his extreme modularity has him equipt with a titanium wedge or aluminum forks, depending on the matchup. Kenny's goal is to control/pin the opposing robot, and let Beater B. Barker take it from there.",
    image: "../images/robot-img/kenny/kenny.png",
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
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?si=4x3IdA3Oya5a9RH1&start=28006",
    design: "Kenny has no active weapon, but his extreme modularity has him equipt with a titanium wedge or aluminum forks, depending on the matchup. Kenny's goal is to control/pin the opposing robot, and let Beater B. Barker take it from there.",
    trivia: ["Kenny's favorite color is blue!"],
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
      "../images/robot-img/beater-b-barker/PXL_20240420_003358932.jpg",
      "../images/robot-img/beater-b-barker/IMG_0390.jpeg",
      "../images/robot-img/beater-b-barker/IMG_0432.jpeg",
      "../images/robot-img/beater-b-barker/IMG_5773.JPG",
      "../images/robot-img/beater-b-barker/IMG_6360.jpeg"
    ]
  },
  
  louis: {
    name: "Louis XVII",
    makers: ["Ethan Zhang", "Shao Stassen", "Aaron Harnish", "Richard Jin", "Christopher Adonizio", "Alyssa Hsu", "Ananya Jajodia", "Camille Yap", "Grace Lim", "Jenny Wu", "Katie Huntley"],
    description: "Louis XVII is CRC's first competition-ready autonomous robot that runs on an object detection model that detects robots from anything else. If Louis XVII detects a robot in his view, he will ram into the enemy with his swishing, mighty sword in hand. In the meantime, he is scouting the arena, planning his next move.",
    image: "../images/robot-img/louis/louis-1.png",
    stats: {
      vintage: "2024",
      height: "6'7\"",
      weight: "3 lbs",
      fights: "Misogynists, 3",
      wins: "none sadly :( (our chassis exploded Beater B Barker tho)",
      top_speed: "3,000,000 mph",
      weapon_speed: "3,000,000 mph",
      most_damaged_part: "his mechanical heart from having insane runtimes",
      favorite_movie: "Real Steel"
    },
    featured_fight: "",
    design: "The Raspberry Pi is the brain of Louis XVII, while his eyes are a Raspberry Pi camera and a Time of Flight sensor. He moves using two motors with his sword constantly swishing back and forth.",
    trivia: [
      "Louis XVII is a *little* obsessed with walls, anything with wheels, and feet",
      "He beat Kinetic's Beater B. Barker!! (unofficially)"
    ],
    fights: [],
    gallery: [
      "../images/robot-img/louis/IMG_6782.JPG",
      "../images/robot-img/louis/20240420_104441.jpg"
    ]
  },

  nardo: {
    name: "Nardo",
    makers: ["Caleb Schlissel", "Alex Jenkins", "Charles Liu", "Marcus Esposito", "Narayan Rueppel", "Zarif Pathan", "Kai Rodger", "Manuely Feliz Portes", "Tyler Sprague"],
    description: "Nardo was born out of our team's desire to learn from our past mistakes and develop the professionalism of our engineering processes and competencies. Having gone astray with our previous iteration, \"Leo,\" we named his legacy \"Nardo,\" giving our entire journey the combined name of \"Leonardo\" - inspired by the legendary engineer as well as the fearless leader of the Teenage Mutant Ninja Turtles.",
    image: "../images/robot-img/nardo/nardo main.png",
    stats: {
      vintage: "2024",
      height: "4.5 inches",
      weight: "18 lbs",
      fights: "2",
      wins: "0",
      top_speed: "8 mph",
      weapon_speed: "36lbs", // Note: This was "Lifting Force" in the original, adapted to match interface
      most_damaged_part: "Nut strips",
      favorite_movie: "Teenage Mutant Ninja Turtles: Mutant Mayhem"
    },
    featured_fight: "https://www.youtube.com/embed/CCGriVVoWeM?si=7y5COqB0JsCX-RX7&start=15857",
    design: "Nardo is a true Sportsman robot, pushing the limits of low kinetic energy weaponry to dominate the competition. Using an unconventional shuffler mechanism for mobility, in addition to a center-mounted four-bar lifter, Nardo boasts an immense pushing force without compromising agility. With multiple configurations for different enemy weapon types, Nardo's essence is both offensive and defensive in nature. Nardo's weapon is a rear-driven four-bar lifter, powered by a strong gear connection. His weapon slides under opponents and hoists them into the air, heavily constricting their maneuverability. The eccentric cams attached to Nardo's drive shafts convert rotary motion to oscillatory \"walking behavior\". This unconventional drive mechanism gives Nardo increased weight, which he uses for enhanced durability as well as increased capacity for control.",
    trivia: [
      "Nardo is named as a continuation of the initial robot designed in the spring called Leo(Leo-Nardo). The name also originates from the Teenage Mutant Ninja Turtle Leonardo.",
      "Nardo's overall aesthetic was based off of graffiti (because of the teenage mutant ninja turtles) which is why his color is a gradient blue and black to assimilate the spray paint. Leonardo the turtle is also blue.",
      "Nardo is a tank robot and he has two modes: wedges on and wedges off. The wedges are made of titanium which means they are pretty impenetrable.",
      "Nardo had an unconventional drive(the walkers) which allowed him to exceed the weight limit by a few pounds."
    ],
    fights: [
      {
        event: "event",
        opponent: "Paje",
        result: "Loss",
        by: "KO",
        video: "https://www.youtube.com/live/CCGriVVoWeM?si=iP5egu4nLMlIbVyL&t=8443",
        length: "NA"
      },
      {
        event: "event",
        opponent: "Amphisbaena",
        result: "Loss",
        by: "Tapout",
        video: "https://www.youtube.com/live/CCGriVVoWeM?si=KWI6Re1eMNT9H7Bh&t=15855",
        length: "25"
      }
    ],
    gallery: [
      "../images/robot-img/nardo/nardo 1.png",
      "../images/robot-img/nardo/nardo 2.png",
      "../images/robot-img/nardo/nardo 3.jpeg",
      "../images/robot-img/nardo/nardo 4.JPG",
      "../images/robot-img/nardo/nardo 6.JPG"
    ]
  },
  
};