import { m } from "framer-motion";
import { MemberProps } from "../components/Member";

// All member structs are defined in allMembers and then called in their respective teams in teamMembers.
// Individual member structs are defined by image source, name, position, LinkedIn, and stats.
const allMembers: Record<string, MemberProps> = {
  calebSchlissel: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Caleb Schlissel",
    position: ["Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/caleb-schlissel-0129/",
    stats: [
      ["Big Brain", "Social Life", "Pancreas"],
      [100, 40, 10]
    ]
  },
  stellaTaglich: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Stella Taglich",
    position: ["Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/stellataglich/",
    stats: [
      ["Finding Car Keys", "Quality of AUX", "Average Volume Level"],
      [20, 100, 70]
    ]
  },
  zanderKnight: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Zander Knight",
    position: ["Kinetic Co-Lead"],
    linkedin: "https://www.linkedin.com/in/zander-knight-3aab8724a/",
    stats: [
      ["Battlebots Knowledge", "Basement Hospitality", "Computer Science Awareness"],
      [90, 70, 30]
    ]
  },
  jamesLaSalle: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "James LaSalle",
    position: ["Kinetic Co-Lead"],
    linkedin: "https://www.linkedin.com/in/james-lasalle-589860256/",
    stats: [
      ["In Your Walls", "Making the Arcade CAD", ""],
      [100, 100, 100]
    ]
  },
  ethanHernandez: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Ethan Hernandez",
    position: ["Kinetic Member", "MechE Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  kevinSturm: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Kevin Sturm",
    position: ["Kinetic Member", "Social Lead", "Test Box Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  mattewAnazco: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Mattew Anazco",
    position: ["Kinetic Member", "MechE Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  castielLi: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Castiel Li",
    position: ["Kinetic Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  gurjotGill: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Gurjot Gill",
    position: ["Kinetic Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  kailaDanielson: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Kaila Danielson",
    position: ["Kinetic Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  spencerHumes: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Spencer Humes",
    position: ["Kinetic Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  narayanRueppel: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Narayan Rueppel",
    position: ["Sportsman Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  manuelyFelizPortes: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Manuely Feliz Portes",
    position: ["Sportsman Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  alexJenkins: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Alex Jenkins",
    position: ["Sportsman Member", "Training Lead", "Former Subteam Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  kaiRodger: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Kai Rodger",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  tylerSprague: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Tyler Sprague",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  jasonChoi: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Jason Choi",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  ruiHanChu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "RuiHan Chu",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  sarahBulkley: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Sarah Bulkley",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  xiaYanZhao: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "XiaYan Zhao",
    position: ["Sportsman Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  aaronHarnish: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Aaron Harnish",
    position: ["Autonomous Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  christoperAdonizio: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Christopher Adonizio",
    position: ["Autonomous Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  alyssaHsu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Alyssa Hsu",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  ananyaJajodia: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Ananya Jajodia",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  camilleYap: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Camille Yap",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  ethanDeCamp: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Ethan DeCamp",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  ethanZhang: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Ethan Zhang",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  graceLim: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Grace Lim",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  jennyWu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Jenny Wu",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  riddhiLamba: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Riddhi Lamba",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  rohinPhukan: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Rohin Phukan",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  shaoStassen: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Shao Stassen",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  sophieCheng: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Sophie Cheng",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  tylerLovejoy: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Tyler Lovejoy",
    position: ["Autonomous Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  rachelPineda: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Rachel Pineda",
    position: ["Marketing Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  javohirAbdurazzakov: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Javohir Abdurazzakov",
    position: ["Marketing Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  angelaZhu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Angela Zhu",
    position: ["Marketing Member", "Marketing Trainer"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  caedyLee: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Caedy Lee",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  crystalLi: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Crystal Li",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  evanZhu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Evan Zhu",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  lindaHu: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Linda Hu",
    position: ["Marketing Member", "Former Subteam Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  meiLingWood: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Mei Ling Wood",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  nicholasUnderwood: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Nicholas Underwood",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  ruslanBlack: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Ruslan Black",
    position: ["Marketing Member"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  },
  sardorRahmatulloev: {
    imgSrc: "/team-members/RachelPineda.png",
    name: "Sardor Rahmatulloev",
    position: ["Marketing Member", "Former Team Co-Lead"],
    linkedin: "linkedin.com/in/rrachelpineda",
    stats: [
      ["Crossword Enthusiasm", "Linkedin", "Dress to Impress Player"],
      [90, 50, 80]
    ]
  }
}

const teamMembers: Record<string, MemberProps[]> = {
  Leads: [
    allMembers.calebSchlissel,
    allMembers.stellaTaglich,
    allMembers.zanderKnight,
    allMembers.jamesLaSalle,
    allMembers.narayanRueppel,
    allMembers.manuelyFelizPortes,
    allMembers.aaronHarnish,
    allMembers.christoperAdonizio,
    allMembers.rachelPineda,
    allMembers.javohirAbdurazzakov,
  ],
  Kinetic: [
    allMembers.zanderKnight,
    allMembers.jamesLaSalle,
    allMembers.ethanHernandez,
    allMembers.kevinSturm,
    allMembers.mattewAnazco,
    allMembers.castielLi,
    allMembers.gurjotGill,
    allMembers.kailaDanielson,
    allMembers.spencerHumes,  
  ],
  Sportsman: [
    allMembers.narayanRueppel,
    allMembers.manuelyFelizPortes,
    allMembers.alexJenkins,
    allMembers.kaiRodger,
    allMembers.tylerSprague,
    allMembers.jasonChoi,
    allMembers.ruiHanChu,
    allMembers.sarahBulkley,
    allMembers.xiaYanZhao,
  ],
  Autonomous: [
    allMembers.aaronHarnish,
    allMembers.christoperAdonizio,
    allMembers.alyssaHsu,
    allMembers.ananyaJajodia,
    allMembers.camilleYap,
    allMembers.ethanDeCamp,
    allMembers.ethanZhang,
    allMembers.graceLim,
    allMembers.jennyWu,
    allMembers.riddhiLamba,
    allMembers.rohinPhukan,
    allMembers.shaoStassen,
    allMembers.sophieCheng,
    allMembers.tylerLovejoy,
  ],
  Marketing: [
    allMembers.rachelPineda,
    allMembers.javohirAbdurazzakov,
    allMembers.angelaZhu,
    allMembers.caedyLee,
    allMembers.crystalLi,
    allMembers.evanZhu,
    allMembers.lindaHu,
    allMembers.meiLingWood,
    allMembers.nicholasUnderwood,
    allMembers.ruslanBlack,
    allMembers.sardorRahmatulloev,
  ],
};

export default teamMembers;