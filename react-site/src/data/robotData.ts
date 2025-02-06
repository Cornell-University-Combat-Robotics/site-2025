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
    gallery: ["/src/assets/nardo-whole.png", "/src/assets/team-photo-hearts.png", "/src/assets/team-photo-formal.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v/dQw4w9WgXcQ"]
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
  }
};