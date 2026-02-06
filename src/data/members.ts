import { MemberProps } from "../components/Member";
import calebS from "../assets/members/caleb-schlissel.jpg";
import stellaT from "../assets/members/stella-taglich.jpg";
import zanderK from "../assets/members/zander-knight.jpg";
import jamesL from "../assets/members/james-lasalle.jpg";
import ethanH from "../assets/members/ethan-hernandez.jpg";
import kevinS from "../assets/members/kevin-sturm.jpg";
import mattewA from "../assets/members/mattew-anazco.jpg";
import castielL from "../assets/members/castiel-li.JPG";
import gurjotG from "../assets/members/gurjot-gill.JPG";
import kailaD from "../assets/members/kaila-danielson.JPG";
import spencerH from "../assets/members/spencer-humes.JPG";
import narayanR from "../assets/members/narayan-rueppel.jpg";
import manuelyFP from "../assets/members/manuely-feliz-portes.jpg";
import alexJ from "../assets/members/alex-jenkins.jpg";
import kaiR from "../assets/members/kai-rodger.jpg";
import tylerS from "../assets/members/tyler-sprague.jpg";
import jasonC from "../assets/members/jason-choi.jpg";
import ruihanC from "../assets/members/ruihan-chu.jpg";
import sarahB from "../assets/members/sarah-bulkley.jpg";
import xiayanZ from "../assets/members/xia-yan-zhao.jpg";
import aaronH from "../assets/members/aaron-harnish.jpg";
import chrisA from "../assets/members/christopher-adonizio.jpg"
import alyssaH from "../assets/members/alyssa-hsu.jpg"
import ananyaJ from "../assets/members/ananya-jajodia.jpg"
import camilleY from "../assets/members/camille-yap.jpg"
import ethanD from "../assets/members/ethan-decamp.JPG"
import ethanZ from "../assets/members/ethan-zhang.jpg"
import graceL from "../assets/members/grace-lim.jpg"
import jennyW from "../assets/members/jenny-wu.jpg"
import riddhiL from "../assets/members/riddhi-lamba.JPG"
import rohinP from "../assets/members/rohin-phukan.JPG"
import shaoS from "../assets/members/shao-stassen.jpg"
import sophieC from "../assets/members/sophie-cheng.JPG"
import tylerL from "../assets/members/tyler-lovejoy.JPG"
import rachelP from "../assets/members/rachel-pineda.jpg"
import javaA from "../assets/members/javohir-abdurazzakov.jpg"
import angelaZ from "../assets/members/angela-zhu.jpg"
import caedyL from "../assets/members/caedy-lee.JPG"
import crystalL from "../assets/members/crystal-li.jpg"
import evanZ from "../assets/members/evan-zhu.jpg"
import lindaH from "../assets/members/linda-hu.jpg"
import meilingW from "../assets/members/meiling-wood.jpg"
import nickU from "../assets/members/nicholas-underwood.JPG"
import ruslanB from "../assets/members/ruslan-black.JPG"
import sardorR from "../assets/members/sardor-rahmatulloev.jpg"
import annaB from "../assets/members/anna-boese.jpg"
import mohammedC from "../assets/members/mohammed-chowdhury.jpg"
import zarifP from "../assets/members/zarif-pathan.jpg"
import katieH from "../assets/members/katie-huntley.jpg"
import brunoT from "../assets/members/bruno-tassari.jpg"
import williamM from "../assets/members/william-murphy.jpg"
import isaacN from "../assets/members/isaac-newcomb.jpg"
import richardJ from "../assets/members/richard-jin.jpg"
import lukeM from "../assets/members/luke-murphy.jpg"
import mollyD from "../assets/members/molly-drumm.jpg"
import rubyW from "../assets/members/Ruby-Wang.jpg"
import charlesL from "../assets/members/charles-liu.jpg"
import marcusE from "../assets/members/marcus-esposito.jpg"
import sanaG from "../assets/members/sana-gaya.jpg"
import shawnC from "../assets/members/shawn-chen.jpg"
import edithC from "../assets/members/edith-chen.jpg"
import jamesC from "../assets/members/james-courtenay.jpg"
import lucienE from "../assets/members/lucien-eckert.jpg"
import mayaZ from "../assets/members/maya-zamor.jpg"
import spencerHur from "../assets/members/spencer-hurst.jpg"
import sofieH from "../assets/members/sofie-halpern.jpg"
import kaitlynH from "../assets/members/kaitlyn-hoxha.jpg"
import alexS from "../assets/members/alex-salonga.jpg"
import ashS from "../assets/members/ash-siddiqui.jpg"
import blazeE from "../assets/members/blaze-ezlakowski.jpg"
import erhunmwunseE from "../assets/members/erhunmwunse-eghafona.jpg"
import kevinL from "../assets/members/kevin-liu.jpg"
import michelleZ from "../assets/members/michelle-zhou.jpg"
import moM from "../assets/members/mo-moghaddasi.jpg"
import richardK from "../assets/members/richard-kang.jpg"
import rickyW from "../assets/members/ricky-wang.jpg"
import rochelleB from "../assets/members/rochelle-barsz.jpg"
import shubhamM from "../assets/members/shubham-mathur.jpg"
import robM from "../assets/members/rob-measner.jpg"
import stefanB from "../assets/members/stefan-bell.jpg"
import sebRiv from "../assets/members/sebastian-rivera.jpg"
import tejuV from "../assets/members/teju-vijay.JPG"
import suzyZ from "../assets/members/suzy-zheng.JPG"
import amandaZ from "../assets/members/amanda-zhu.JPG"
import anikaK from "../assets/members/anika-kumar.JPG"
import ryanS from "../assets/members/ryan-siglag.JPG"
import vinsonC from "../assets/members/vinson-chen.JPG";

// All member structs are defined in allMembers and then called in their respective teams in teamMembers.
// Individual member structs are defined by image source, name, position, LinkedIn, and stats.
const allMembers: Record<string, MemberProps> = {
  calebSchlissel: {
    imgSrc: calebS,
    name: "Caleb Schlissel",
    position: ["Sportsman Member", "Former Team Co-Lead (2024-25)", "Former Sportsman Co-Lead (2023-24)"],
    linkedin: "https://www.linkedin.com/in/caleb-schlissel-0129/",
    stats: [
      ["Big Brain", "Social Life", "Pancreas"],
      [100, 40, 10]
    ]
  },
  stellaTaglich: {
    imgSrc: stellaT,
    name: "Stella Taglich",
    position: ["Sportsman Member", "Former Team Co-Lead (2024-25)", "Former Kinetic Co-Lead (2023-24)"],
    linkedin: "https://www.linkedin.com/in/stellataglich/",
    stats: [
      ["Finding Car Keys", "Quality of AUX", "Average Volume Level"],
      [20, 100, 70]
    ]
  },
  zanderKnight: {
    imgSrc: zanderK,
    name: "Zander Knight",
    position: ["Former Kinetic Co-Lead (2024-25)", "Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/zander-knight-3aab8724a/",
    stats: [
      ["Battlebots Knowledge", "Basement Hospitality", "Computer Science Awareness"],
      [90, 80, 30]
    ]
  },
  jamesLaSalle: {
    imgSrc: jamesL,
    name: "James LaSalle",
    position: ["Team Co-Lead", "Former Kinetic Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/james-lasalle-589860256/",
    stats: [
      ["In Your Walls", "Making the Arcade CAD", "👍"],
      [100, 100, 100]
    ]
  },
  ethanHernandez: {
    imgSrc: ethanH,
    name: "Ethan Hernandez",
    position: ["Kinetic Member", "Former MechE Trainer (2024-25)"],
    linkedin: "https://www.linkedin.com/in/ethan-hernandez-a431a1282/",
    stats: [
      ["H", "E", "Y"],
      [100, 100, 100]
    ]
  },
  kevinSturm: {
    imgSrc: kevinS,
    name: "Kevin Sturm",
    position: ["Kinetic Co-Lead"],
    linkedin: "https://www.linkedin.com/in/kevin-sturm-97a046277/",
    stats: [
      ["Being 6 foot", "Ability to eat nuts", "Ability to see colors"],
      [98, 0, 60]
    ]
  },
  mattewAnazco: {
    imgSrc: mattewA,
    name: "Mattew Anazco",
    position: ["Kinetic Co-Lead", "MechE Trainer"],
    linkedin: "https://www.linkedin.com/in/mattew-anazco-77724222a/",
    stats: [
      ["Coin Flip Win Percentage", "Big wedge", "H in name"],
      [50, 100, 0]
    ]
  },
  castielLi: {
    imgSrc: castielL,
    name: "Castiel Li",
    position: ["Test Box Lead", "MechE Trainer", "Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/castiel-li-527964330/",
    stats: [
      ["rock", "paper", "scissors"],
      [60, 30, 10]
    ]
  },
  gurjotGill: {
    imgSrc: gurjotG,
    name: "Gurjot Gill",
    position: ["MechE Trainer", "Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/gurjotgill1/",
    stats: [
      ["Rubik's Cube Skills", "Locking In", "Fun Facts"],
      [80, 50, 90]
    ]
  },
  kailaDanielson: {
    imgSrc: kailaD,
    name: "Kaila Danielson",
    position: ["MechE Trainer", "Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/kaila-danielson-2955032b7/",
    stats: [
      ["Coffee", "Long Term Memory", "Watching Episodes of Friends"],
      [90, 30, 100]
    ]
  },
  spencerHumes: {
    imgSrc: spencerH,
    name: "Spencer Humes",
    position: ["MechE Trainer", "Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/spencer-humes-5b4070289/",
    stats: [
      ["Dexterity", "Certainty", "Alacrity"],
      [40, 20, 60]
    ]
  },
  narayanRueppel: {
    imgSrc: narayanR,
    name: "Narayan Rueppel",
    position: ["Former Sportsman Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/narayan-rueppel-668861256/",
    stats: [
      ["Punctuality", "Swahili", "Trampolining"],
      [90, 10, 70]
    ]
  },
  manuelyFelizPortes: {
    imgSrc: manuelyFP,
    name: "Manuely Feliz Portes",
    position: ["Sportsman Member", "Former Sportsman Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/manuely-feliz-portes-1b0116326/",
    stats: [
      ["Decisive", "Driving", "Credibility"],
      [10, 50, 100]
    ]
  },
  alexJenkins: {
    imgSrc: alexJ,
    name: "Alex Jenkins",
    position: ["MechE Trainer", "Sportsman Member", "Former Training Lead (2024-25)", "Former Sportsman Co-Lead"],
    linkedin: "https://www.linkedin.com/in/alex-jenkins-201214223/",
    stats: [
      ["Punctuality", "Dragon Training", "Spelling"],
      [80, 100, 20]
    ]
  },
  kaiRodger: {
    imgSrc: kaiR,
    name: "Kai Rodger",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/kai-rodger-70998029a/",
    stats: [
      ["Snowboarding", "Cooking", "Focus"],
      [90, 0, 50]
    ]
  },
  tylerSprague: {
    imgSrc: tylerS,
    name: "Tyler Sprague",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/tyler-sprague-209270295/",
    stats: [
      ["Frisbee", "Replying in Group Chat", "Vending Machine Interest"],
      [95, 90, 80]
    ]
  },
  jasonChoi: {
    imgSrc: jasonC,
    name: "Jason Choi",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/jason-choi-6336a327b",
    stats: [
      ["Asian mom energy", "Alleged non straight", "Amount of hair"],
      [80, 70, 20]
    ]
  },
  ruiHanChu: {
    imgSrc: ruihanC,
    name: "RuiHan Chu",
    position: ["MechE Trainer", "Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/ruihan-chu-654020234",
    stats: [
      ["Piano", "Food lover", "Cooking skills"],
      [100, 95, 10]
    ]
  },
  sarahBulkley: {
    imgSrc: sarahB,
    name: "Sarah Bulkley",
    position: ["Sportsman Co-Lead"],
    linkedin: "https://www.linkedin.com/in/sarah-bulkley-589692312",
    stats: [
      ["Procrastination", "Decisive", "H in name"],
      [90, 10, 100]
    ]
  },
  xiaYanZhao: {
    imgSrc: xiayanZ,
    name: "Xiayan Zhao",
    position: ["Sportsman Co-Lead"],
    linkedin: "https://www.linkedin.com/in/xiayan-z-14aa45272",
    stats: [
      ["FBI agent", "League/Reddit", "Conscious thoughts"],
      [80, 70, 10]
    ]
  },
  aaronHarnish: {
    imgSrc: aaronH,
    name: "Aaron Harnish",
    position: ["Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/aaron-harnish/",
    stats: [
      ["Caleb impersonation skills", "Milk enthusiasm", "Raising average height"],
      [30, 80, 90]
    ]
  },
  christoperAdonizio: {
    imgSrc: chrisA,
    name: "Christopher Adonizio",
    position: ["Former Autonomous Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/christopher-adonizio-0b7683219/",
    stats: [
      ["Chess", "Frisbee", "Fruitmaxxing"],
      [60, 80, 100]
    ]
  },
  alyssaHsu: {
    imgSrc: alyssaH,
    name: "Alyssa Hsu",
    position: ["Autonomous Member", "Former Autonomous Trainer (2024-25)"],
    linkedin: "https://www.linkedin.com/in/haalyssa/",
    stats: [
      ["Tummy Sleeper", "Pentakills", "Airsipping"],
      [100, 0, 30]
    ]
  },
  ananyaJajodia: {
    imgSrc: ananyaJ,
    name: "Ananya Jajodia",
    position: ["Autonomous Member", "Former Autonomous Trainer (2024-25)"],
    linkedin: "https://www.linkedin.com/in/ananya-jajodia-11b4a2249/",
    stats: [
      ["Tetris", "Hydration", "Lowering Average Height"],
      [70, 0, 90]
    ]
  },
  camilleYap: {
    imgSrc: camilleY,
    name: "Camille Yap",
    position: ["Autonomous Member", "Former Autonomous Trainer (2024-25)"],
    linkedin: "https://www.linkedin.com/in/camille-yap-150a65281/",
    stats: [
      ["Avocado enthusiasm", "Back sleeper", "Thoughts"],
      [100, 100, 0]
    ]
  },
  ethanDeCamp: {
    imgSrc: ethanD,
    name: "Ethan DeCamp",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/ethan-decamp-00a34927a/",
    stats: [
      ["Name Theft", "Value per Meal Swipe", "Sensitivity to Cold"],
      [100, 90, 20]
    ]
  },
  ethanZhang: {
    imgSrc: ethanZ,
    name: "Ethan Zhang",
    position: ["Team Co-Lead", "Former Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/empzhang/",
    stats: [
      ["Fire Bending", "Cursed Knowledge", "Sniping"],
      [70, 20, 100]
    ]
  },
  graceLim: {
    imgSrc: graceL,
    name: "Grace Lim",
    position: ["Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/graceelimm/",
    stats: [
      ["Handwriting", "Being at Upson", "Playing Genshin Consistently"],
      [100, 70, 10]
    ]
  },
  jennyWu: {
    imgSrc: jennyW,
    name: "Jenny Wu",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/jenny-wu-5a7318266/",
    stats: [
      ["Red", "Green", "Blue"],
      [0, 0, 100]
    ]
  },
  riddhiLamba: {
    imgSrc: riddhiL,
    name: "Riddhi Lamba",
    position: ["Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/riddhi-lamba/",
    stats: [
      ["Ducktails", "Singing", "Working Computer"],
      [100, 100, 0]
    ]
  },
  rohinPhukan: {
    imgSrc: rohinP,
    name: "Rohin Phukan",
    position: ["Autonomous Trainer", "Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/rohin-phukan/",
    stats: [
      ["Geoguessr", "Raising Average Height", "Perceived Geoguessr"],
      [100, 90, 100]
    ]
  },
  shaoStassen: {
    imgSrc: shaoS,
    name: "Shao Stassen",
    position: ["Autonomous Member", "Former Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/shaostassen/",
    stats: [
      ["Github", "Debugging", "Public Speaking"],
      [90, 20, 40]
    ]
  },
  sophieCheng: {
    imgSrc: sophieC,
    name: "Sophie Cheng",
    position: ["Autonomous Trainer", "Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/sophie-cheng-394357246/",
    stats: [
      ["Potassium", "Penmanship", "\"P\" Alliteration"],
      [90, 90, 100]
    ]
  },
  tylerLovejoy: {
    imgSrc: tylerL,
    name: "Tyler Lovejoy",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/tyler-lovejoy-2b7010338/",
    stats: [
      ["Ownership of Eames Lounger and Ottoman", "Milk", "Skiing"],
      [10, 90, 90]
    ]
  },
  rachelPineda: {
    imgSrc: rachelP,
    name: "Rachel Pineda",
    position: ["Former Marketing Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/rrachelpineda/",
    stats: [
      ["Crossword Enthusiasm", "LinkedIn", "Hiding the Stats Doc"],
      [90, 50, 10]
    ]
  },
  javohirAbdurazzakov: {
    imgSrc: javaA,
    name: "Javohir Abdurazzakov",
    position: ["Former Marketing Co-Lead (2024-25)"],
    linkedin: "https://www.linkedin.com/in/javohir1/",
    stats: [
      ["Soccer", "Germaphobe", "Weight Fluctuation"],
      [20, 75, 95]
    ]
  },
  angelaZhu: {
    imgSrc: angelaZ,
    name: "Angela Zhu",
    position: ["Marketing Co-Lead", "Former Marketing Trainer (2024-25)"],
    linkedin: "https://www.linkedin.com/in/angela-zhu-26b22229a/",
    stats: [
      ["Gacha addiction", "Pyramid scheme recruitment", "Studying during social"],
      [90, 80, 100]
    ]
  },
  caedyLee: {
    imgSrc: caedyL,
    name: "Caedy Lee",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/caedy-lee-4022792b7/",
    stats: [
      ["ARCANE", "Hot Water Addiction", "Eating Bananas w/a Knife "],
      [100, 60, 80]
    ]
  },
  crystalLi: {
    imgSrc: crystalL,
    name: "Crystal Li",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/crystal-li-698431255/",
    stats: [
      ["Decisiveness", "Crocheting", "Injurability"],
      [0, 60, 90]
    ]
  },
  evanZhu: {
    imgSrc: evanZ,
    name: "Evan Zhu",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/evan-j-zhu/",
    stats: [
      ["Terrace Ramen Bowl", "Miner Poison", "Screen Time"],
      [100, 75, 90]
    ]
  },
  lindaHu: {
    imgSrc: lindaH,
    name: "Linda Hu",
    position: ["Marketing Member", "Former Marketing Lead"],
    linkedin: "https://www.linkedin.com/in/linda-ly-hu/",
    stats: [
      ["Drawing", "Earrings", "Not Playing Genshin"],
      [60, 80, 100]
    ]
  },
  meiLingWood: {
    imgSrc: meilingW,
    name: "Mei Ling Wood",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/mei-ling-wood-bb669523b/",
    stats: [
      ["Food begging skills", "Decisiveness", "Water Drinking"],
      [100, 0, 100]
    ]
  },
  nicholasUnderwood: {
    imgSrc: nickU,
    name: "Nicholas Underwood",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/nicholas-underwood-0b7733290/",
    stats: [
      ["Sleep", "Workaholic", "Dairy Consumption"],
      [30, 90, 0]
    ]
  },
  ruslanBlack: {
    imgSrc: ruslanB,
    name: "Ruslan Black",
    position: ["Marketing Co-Lead"],
    linkedin: "https://www.linkedin.com/in/ruslansblack/",
    stats: [
      ["Reels", "Ladder", "Snoring in Seal"],
      [90, 0, 50]
    ]
  },
  // ALUMNI
  sardorRahmatulloev: {
    imgSrc: sardorR,
    name: "Sardor Rahmatulloev",
    position: ["Alum 2025", "Marketing Member", "Former Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/sardor-rahmatulloev/",
    stats: [
      ["Getting the bag", "GitHub", "Chaotic"],
      [80, 10, 100]
    ]
  },
  sebastianRivera: {
    imgSrc: sebRiv,
    name: "Sebastian Rivera",
    position: ["Alum 2025", "Autonomous Member", "Former Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/srivera2603/",
    stats:[
      ["Wiffleball", "Updating GCal", "Thinking about Ryan Gosling"],
      [80, 20, 100]
    ]

  },
  annaBoese: {
    imgSrc: annaB,
    name: "Anna Boese",
    position: ["Alum 2024", "Kinetic Member", "MechE Trainer", "Former Kinetic Subteam Co-Lead (2023)", "Former Kinetic Vice Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/anna-boese-4a304819b/",
    stats: [
      ["Hair Color Consistency", "Short Term Memory", "Adaptability"],
      [10, 40, 90]
    ]
  },
  mohammedChowdhury: {
    imgSrc: mohammedC,
    name: "Mohammed Chowdhury",
    position: ["Alum 2024", "Kinetic Member", "Safety Training Lead"],
    linkedin: "https://www.linkedin.com/in/mac528/",
    stats: [
      ["Loving Sebastian", "Being an Ally", "Hating James LaSalle"],
      [100, 50, 100]
    ]
  },
  zarifPathan: {
    imgSrc: zarifP,
    name: "Zarif Pathan",
    position: ["Alum 2024", "Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/zarif-pathan/",
    stats: [
      ["Water Bending", "Circuitry", "Drip"],
      [40, 80, 60]
    ]
  },
  katieHuntley: {
    imgSrc: katieH,
    name: "Katie Huntley",
    position: ["Alum 2024", "Autonomous Trainer", "Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/katieahuntley/",
    stats: [
      ["sleep schedule", "craftiness", "español"],
      [90, 70, 60]
    ]
  },
  brunoTassari: {
    imgSrc: brunoT,
    name: "Bruno Tassari",
    position: ["Alum 2023", "Team Lead (2022-2023)", "VTL (2021-2022)", "Sportsman (2021-2023)", "Marketing (2023)"],
    linkedin: "https://www.linkedin.com/in/bruno-tassari/",
    stats: [
      ["Anime Trivia", "A Freak in the Google Sheets", "Epic Jokes"],
      [90, 70, 40]
    ]
  },
  williamMurphy: {
    imgSrc: williamM,
    name: "William Murphy",
    position: ["Alum 2023", "Former Marketing Vice Subteam Lead (2023)", "Former Sportsman VSL (2022)"],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
    stats: [
      ["Meow", "Cuteness", "Attendance"],
      [50, 100, 10]
    ]
  },
  isaacNewcomb: {
    imgSrc: isaacN,
    name: "Isaac Newcomb",
    position: ["Alum 2024", "Former Kinetic Subteam Lead (2022-2023)", "Kinetic (2024)"],
    linkedin: "https://linkedin.com/in/isaacdnew",
    stats: [
      ["Robot Piloting", "Scooter Skills", "Having Time to Compose the CRCCU Theme Song"],
      [90, 80, 20]
    ]
  },
  richardJin: {
    imgSrc: richardJ,
    name: "Richard Jin",
    position: ["Alum 2024", "Former Autonomous Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/richard-jin/",
    stats: [
      ["Time Complexity Analysis", "Fanny Pack Wearing", "GitHub"],
      [70, 10, 40]
    ]
  },
  lukeMurphy: {
    imgSrc: lukeM,
    name: "Luke Murphy",
    position: ["Alum 2024", "Former Vice Team Lead (2022-2023)", "Marketing (2024)"],
    linkedin: "https://www.linkedin.com/in/luke-murphy-09659b22a/",
    stats: [
      ["Website Skills", "CAD", "Pixel Art"],
      [100, 10, 60]
    ]
  },
  mollyDrumm: {
    imgSrc: mollyD,
    name: "Molly Drumm",
    position: ["Alum 2024", "Former Sportsman Vice Subteam Lead (2023)", "Marketing (2024)"],
    linkedin: "https://www.linkedin.com/in/molly-drumm-a4430a208/",
    stats: [
      ["Quirkiness", "Diet", "Vegemite Eating"],
      [90, 10, 100]
    ]
  },
  rubyWang: {
    imgSrc: rubyW,
    name: "Ruby Wang",
    position: ["Alum 2024", "Marketing (2022-2024)"],
    linkedin: "https://www.linkedin.com/in/rubywang1222/",
    stats: [
      ["Zoning Out", "Drawing", "AEM"],
      [70, 100, 10]
    ]
  },
  charlesLiu: {
    imgSrc: charlesL,
    name: "Charles Liu",
    position: ["Alum 2024", "Sportsman (2023-2024)"],
    linkedin: "https://www.linkedin.com/in/charles-liu-035190181/",
    stats: [
      ["Being Tall", "Big Brain", "Sportsman Sunshine"],
      [50, 10, 70]
    ]
  },
  marcusEsposito: {
    imgSrc: marcusE,
    name: "Marcus Esposito",
    position: ["Alum 2024", "Former Sportsman Subteam Lead (2022-2023)", "Sportsman (2024)"],
    linkedin: "https://www.linkedin.com/in/marcus-esposito/",
    stats: [
      ["Punctuality", "Explaining Things", "Intimidation"],
      [90, 60, 0]
    ]
  },
  sanaGaya: {
    imgSrc: sanaG,
    name: "Sana Gaya",
    position: ["Alum 2024", "Sportsman (2023)"],
    linkedin: "https://www.linkedin.com/in/sana-gaya/",
    stats: []
  },
  shawnChen: {
    imgSrc: shawnC,
    name: "Shawn Chen",
    position: ["Alum 2023", "Autonomous (2023)"],
    linkedin: "https://www.linkedin.com/in/shawn-siyuanchen",
    stats: [
      ["Hoodie and Jean Combo", "Attending Socials", "Impersonating Polish People"],
      [80, 5, 100]
    ]
  },
  edithChen: {
    imgSrc: edithC,
    name: "Edith Chen",
    position: ["Alum 2023", "Former Marketing Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/chen-edith/",
    stats: []
  },
  jamesCourtenay: {
    imgSrc: jamesC,
    name: "James Courtenay",
    position: ["Alum 2023", "Former Kinetic Vice Subteam Lead (2023)"],
    linkedin: "https://www.linkedin.com/in/jcourtenay/",
    stats: [
      ["Music Taste", "MechE-ness", "Machining"],
      [90, 10, 60]
    ]
  },
  lucienEckert: {
    imgSrc: lucienE,
    name: "Lucien Eckert",
    position: ["Alum 2023", "Former Marketing Vice Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/lucien-eckert/",
    stats: [
      ["Game Development", "Escaping from Captivity", "Writing Inline CSS"],
      [70, 40, 100]
    ]
  },
  mayaZamor: {
    imgSrc: mayaZ,
    name: "Maya Zamor",
    position: ["Alum 2023", "Former Marketing Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/maya-zamor-a9420b188",
    stats: []
  },
  spencerHurst: {
    imgSrc: spencerHur,
    name: "Spencer Hurst",
    position: ["Alum 2023", "Former Kinetic (2021-2023)"],
    linkedin: "https://www.linkedin.com/in/spencer-hurst-918627191/",
    stats: []
  },
  sofieHalpern: {
    imgSrc: sofieH,
    name: "Sofie Halpern",
    position: ["Alum 2022", "Kinetic (2019-2022)", "Marketing (2022)", "First Team Lead (2019-2022)", "Co-Founder"],
    linkedin: "https://www.linkedin.com/in/sofie-halpern/",
    stats: []
  },
  kaitlynHoxha: {
    imgSrc: kaitlynH,
    name: "Kaitlyn Hoxha",
    position: ["Alum 2022", "Former Marketing Subteam Lead (2020-2021)"],
    linkedin: "https://www.linkedin.com/in/kaitlyn-hoxha/",
    stats: []
  },
  alexSalonga: {
    imgSrc: alexS,
    name: "Alex Salonga",
    position: ["Alum 2022", "Former Marketing Vice Subteam Lead (2021)"],
    linkedin: "https://www.linkedin.com/in/alexander-salonga-4a0583177/",
    stats: []
  },
  ashSiddiqui: {
    imgSrc: ashS,
    name: "Ash Siddiqui",
    position: ["Alum 2022", "Former Autonomous Vice Subteam Lead (2021)"],
    linkedin: "",
    stats: []
  },
  blazeEzlakowski: {
    imgSrc: blazeE,
    name: "Blaze Ezlakowski",
    position: ["Alum 2022", "Former Autonomous Vice Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/blaze-ezlakowski-25b3731b7",
    stats: [
      ["Unicycle Riding", "Having Siblings", "Vending Machine Interest"],
      [50, 90, 80]
    ]
  },
  erhunmwunseEghafona: {
    imgSrc: erhunmwunseE,
    name: "Erhunmwunse Eghafona",
    position: ["Alum 2022", "Former Kinetic (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/eeghafona/",
    stats: []
  },
  kevinLiu: {
    imgSrc: kevinL,
    name: "Kevin Liu",
    position: ["Alum 2022", "Former Sportsman Subteam Lead (2020- 2021)"],
    linkedin: "https://www.linkedin.com/in/kevin-liu-308546230/",
    stats: []
  },
  michelleZhou: {
    imgSrc: michelleZ,
    name: "Michelle Zhou",
    position: ["Alum 2022", "Former Sportsman Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/michelle-z-20b22b139/",
    stats: []
  },
  moMoghaddasi: {
    imgSrc: moM,
    name: "Mohammad Ali Moghaddasi",
    position: ["Alum 2022", "Former Kinetic (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/mohammad-ali-moghaddasi-7797a5143/",
    stats: []
  },
  richardKang: {
    imgSrc: richardK,
    name: "Richard Kang",
    position: ["Alum 2022", "Former Autonomous (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/richard-kang-bb923824a/",
    stats: []
  },
  rickyWang: {
    imgSrc: rickyW,
    name: "Ricky Wang",
    position: ["Alum 2022", "Former Kinetic Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/rickywang0/",
    stats: []
  },
  rochelleBarsz: {
    imgSrc: rochelleB,
    name: "Rochelle Barsz",
    position: ["Alum 2022", "Former Autonomous Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/rochelle-barsz/",
    stats: []
  },
  shubhamMathur: {
    imgSrc: shubhamM,
    name: "Shubham Mathur",
    position: ["Alum 2022", "Former Sportsman (2019-2022)", "Co-Founder"],
    linkedin: "https://www.linkedin.com/in/shubham-m-3a41a9133/",
    stats: []
  },
  robMeasner: {
    imgSrc: robM,
    name: "Rob Measner",
    position: ["Alum 2021", "Former Autonomous (2019-2021)"],
    linkedin: "https://www.linkedin.com/in/robert-measner-1a4108196/",
    stats: []
  },
  stefanBell: {
    imgSrc: stefanB,
    name: "Stefan Bell",
    position: ["Alum 2021", "Former Kinetic Subteam Lead (2020-2021)"],
    linkedin: "https://www.linkedin.com/in/stefan-bell-sb855/",
    stats: []
  },
  tejuVijay: {
    imgSrc: tejuV,
    name: "Teju Vijay",
    position: ["Marketing Member"],
    linkedin: "www.linkedin.com/in/tejusvi-vijay-9960743a5",
    stats: [
      ["1", "2", "3"],
      [90, 30, 100]
    ]
  },
  suzyZheng: {
    imgSrc: suzyZ,
    name: "Suzy Zeng",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/suzy-zeng-a7138a322/",
    stats: [
      ["sunlight exposure", "???", "^.^"],
      [60, 30, 100]
    ]
  },
  amandaZhu: {
    imgSrc: amandaZ,
    name: "Amanda Zhu",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/amanda-zhu-3a0680279/",
    stats: [
      ["1", "2", "3"],
      [90, 30, 100]
    ]
  },
  anikaKumar: {
    imgSrc: anikaK,
    name: "Anika Kumar",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/anika-kumar295/",
    stats: [
      ["crc dreams", "heated", "rivalry"],
      [50, 100, 100]
    ]
  },
  ryanSiglag: {
    imgSrc: ryanS,
    name: "Ryan Siglag",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/ryan-siglag/",
    stats: [
      ["Love of Yogurt", "Immune System", "Ball Knowledge"],
      [94, 12, 88]
    ]
  },
  vinsonChen: {
    imgSrc: vinsonC,
    name: "Vinson Chen",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/vinson-chen-aaba9324a/",
    stats: [
      ["Snacking", "Scooter Riding", "Kid’s Animated Movies Enjoyment"],
      [95, 10, 85]
    ]
  },
  hardyZhu: {
    imgSrc: hardyZ,
    name: "Hardy Zhu",
    position: ["Infinity Member"],
    linkedin:"https://www.linkedin.com/in/hardyzhu/",
    stats: [
      ["Food", "Long term memory", "Webtoon doomscrolling"],
      [100,10,100]
    ]
  },
  taeheeKim: {
    imgSrc: taeheeK,
    name: "Taehee Kim",
    position: ["Infinity Member"],
    linkedin: "https://www.linkedin.com/in/taehee-tae-kim-814849325/",
    stats: [
      ["Sleepiness", "Originality", "ADHD"],
      [100, 0, 51]
    ]
  },
  seanDjojonegoro: {
    imgSrc: seanD,
    name: "Sean Djojonegoro",
    position: ["Infinity Member"],
    linkedin: "https://www.linkedin.com/in/sean-djojonegoro-59596b23a/?originalSubdomain=id",
    stats: [
      ["Running", "Marvel Snap", "Last name pronunciation"],
      [100, 75, 0]
    ]
  }, 
  cynthiaWu: {
    imgSrc: cynthiaW,
    name: "Cynthia Wu",
    position: ["Infinity Member"],
    linkedin: "https://www.linkedin.com/in/cynnthiawu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    stats: [
      ["Iron", "$", "Midnight Snack"],
      [0,0,100]
    ]
  },
  gavinLim: {
    imgSrc: gavinL,
    name: "Gavin Lim",
    position: ["Infinity Member"],
    linkedin: "https://www.linkedin.com/in/gavinnlimm/",
    stats: [
      ["Nonchalance", "Jeeps", "Hungry"],
      [95, 67, 80]
    ]
  },
  lilianYe: {
    imgSrc:lilianY,
    name: "Lilian Ye",
    position: ["Infinity Member"],
    linkedin: "https://www.linkedin.com/in/lillian-ye-6a027033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    stats:[
      ["Sleepiness", "Food", "Decisiveness"],
      [100, 80, 20]
    ]
  },
  georgiaGreen:{
    imgSrc:GeorgiaG,
    name: "Georgia Green",
    position: ["Infinity Member"],
    linkedin: "www.linkedin.com/in/georgia-green-309a87345",
    stats: [
      ["Odds of having", "Woodworking", "Pink Hair"],
      [15, 90, 50]
    ]
  },

  


}

const teamMembers: Record<string, MemberProps[]> = {
  Leads: [
    allMembers.jamesLaSalle,
    allMembers.ethanZhang,
    allMembers.kevinSturm,
    allMembers.mattewAnazco,
    allMembers.sarahBulkley,
    allMembers.xiaYanZhao,
    allMembers.aaronHarnish,
    allMembers.graceLim,
    allMembers.riddhiLamba,
    allMembers.angelaZhu,
    allMembers.ruslanBlack,
  ],
  Kinetic: [
    allMembers.kevinSturm,
    allMembers.mattewAnazco,
    allMembers.castielLi,
    allMembers.ethanHernandez,
    allMembers.gurjotGill,
    allMembers.kailaDanielson,
    allMembers.spencerHumes,
    allMembers.zanderKnight,

  ],
  Sportsman: [
    allMembers.sarahBulkley,
    allMembers.xiaYanZhao,
    allMembers.narayanRueppel,
    allMembers.manuelyFelizPortes,
    allMembers.alexJenkins,
    allMembers.kaiRodger,
    allMembers.tylerSprague,
    allMembers.ruiHanChu,
    allMembers.stellaTaglich,
    allMembers.jasonChoi,
  ],
  Autonomous: [
    allMembers.aaronHarnish,
    allMembers.graceLim,
    allMembers.riddhiLamba,
    allMembers.ananyaJajodia,
    allMembers.ethanDeCamp,
    allMembers.jennyWu,
    allMembers.rohinPhukan,
    allMembers.sophieCheng,
    allMembers.tylerLovejoy,
    allMembers.christoperAdonizio,
    allMembers.alyssaHsu,
    allMembers.camilleYap,
    allMembers.shaoStassen,
    allMembers.anikaKumar,
    allMembers.ryanSiglag,
    allMembers.vinsonChen,
  ],
  Marketing: [
    allMembers.angelaZhu,
    allMembers.ruslanBlack,
    allMembers.caedyLee,
    allMembers.evanZhu,
    allMembers.nicholasUnderwood,
    allMembers.crystalLi,
    allMembers.rachelPineda,
    allMembers.javohirAbdurazzakov,
    allMembers.lindaHu,
    allMembers.meiLingWood,
    allMembers.tejuVijay,
    allMembers.suzyZheng,
    allMembers.amandaZhu,
  ],
  Alumni: [
    allMembers.calebSchlissel,
    allMembers.sardorRahmatulloev,
    allMembers.sebastianRivera,
    allMembers.annaBoese,
    allMembers.mohammedChowdhury,
    allMembers.zarifPathan,
    allMembers.katieHuntley,
    allMembers.brunoTassari,
    allMembers.williamMurphy,
    allMembers.isaacNewcomb,
    allMembers.richardJin,
    allMembers.lukeMurphy,
    allMembers.mollyDrumm,
    allMembers.rubyWang,
    allMembers.charlesLiu,
    allMembers.marcusEsposito,
    allMembers.sanaGaya,
    allMembers.shawnChen,
    allMembers.edithChen,
    allMembers.jamesCourtenay,
    allMembers.lucienEckert,
    allMembers.mayaZamor,
    allMembers.spencerHurst,
    allMembers.sofieHalpern,
    allMembers.kaitlynHoxha,
    allMembers.alexSalonga,
    allMembers.ashSiddiqui,
    allMembers.blazeEzlakowski,
    allMembers.erhunmwunseEghafona,
    allMembers.kevinLiu,
    allMembers.michelleZhou,
    allMembers.moMoghaddasi,
    allMembers.richardKang,
    allMembers.rickyWang,
    allMembers.rochelleBarsz,
    allMembers.shubhamMathur,
    allMembers.robMeasner,
    allMembers.stefanBell,
  ]
};

export default teamMembers;