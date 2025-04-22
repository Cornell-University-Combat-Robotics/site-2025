import { MemberProps } from "../components/Member";

// TODO: Remove public/team-members folder

// All member structs are defined in allMembers and then called in their respective teams in teamMembers.
// Individual member structs are defined by image source, name, position, LinkedIn, and stats.
const allMembers: Record<string, MemberProps> = {
  calebSchlissel: {
    imgSrc: "../src/assets/members/caleb-schlissel.jpg",
    name: "Caleb Schlissel",
    position: ["Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/caleb-schlissel-0129/",
    stats: [
      ["Big Brain", "Social Life", "Pancreas"],
      [100, 40, 10]
    ]
  },
  stellaTaglich: {
    imgSrc: "../src/assets/members/stella-taglich.jpg",
    name: "Stella Taglich",
    position: ["Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/stellataglich/",
    stats: [
      ["Finding Car Keys", "Quality of AUX", "Average Volume Level"],
      [20, 100, 70]
    ]
  },
  zanderKnight: {
    imgSrc: "../src/assets/members/zander-knight.jpg", 
    name: "Zander Knight",
    position: ["Kinetic Co-Lead"],
    linkedin: "https://www.linkedin.com/in/zander-knight-3aab8724a/",
    stats: [
      ["Battlebots Knowledge", "Basement Hospitality", "Computer Science Awareness"],
      [90, 80, 30]
    ]
  },
  jamesLaSalle: {
    imgSrc: "../src/assets/members/james-lasalle.jpg",
    name: "James LaSalle", 
    position: ["Kinetic Co-Lead"],
    linkedin: "https://www.linkedin.com/in/james-lasalle-589860256/",
    stats: [
      ["In Your Walls", "Making the Arcade CAD", "👍"],
      [100, 100, 100]
    ]
  },
  ethanHernandez: {
    imgSrc: "../src/assets/members/ethan-hernandez.jpg",
    name: "Ethan Hernandez",
    position: ["Kinetic Member", "MechE Trainer"],
    linkedin: "https://www.linkedin.com/in/ethan-hernandez-a431a1282/",
    stats: [
      ["H", "E", "Y"],
      [100, 100, 100]
    ]
  },
  kevinSturm: {
    imgSrc: "../src/assets/members/kevin-sturm.jpg",
    name: "Kevin Sturm",
    position: ["Kinetic Member", "Social Lead", "Test Box Lead"],
    linkedin: "https://www.linkedin.com/in/kevin-sturm-97a046277/",
    stats: [
      ["Being 6 foot", "Ability to eat nuts", "Ability to see colors"],
      [98, 0, 60]
    ]
  },
  mattewAnazco: {
    imgSrc: "../src/assets/members/mattew-anazco.jpg",
    name: "Mattew Anazco",
    position: ["Kinetic Member", "MechE Trainer"],
    linkedin: "https://www.linkedin.com/in/mattew-anazco-77724222a/",
    stats: [
      ["Coin Flip Win Percentage", "Big wedge", "H in name"],
      [50, 100, 0]
    ]
  },
  castielLi: {
    imgSrc: "../src/assets/members/castiel-li.JPG",
    name: "Castiel Li",
    position: ["Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/castiel-li-527964330/",
    stats: [
      ["Solder Inhaled", "Glass Microspheres Inhaled", "Sleep Deprivation"],
      [90, 80, 100]
    ]
  },
  gurjotGill: {
    imgSrc: "../src/assets/members/gurjot-gill.JPG",
    name: "Gurjot Gill",
    position: ["Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/gurjotgill1/",
    stats: [
      ["Rubik's Cube Skills", "Locking In", "Fun Facts"],
      [80, 50, 90]
    ]
  },
  kailaDanielson: {
    imgSrc: "../src/assets/members/kaila-danielson.JPG",
    name: "Kaila Danielson",
    position: ["Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/kaila-danielson-2955032b7/",
    stats: [
      ["Coffee", "Long Term Memory", "Watching Episodes of Friends"],
      [90, 30, 100]
    ]
  },
  spencerHumes: {
    imgSrc: "../src/assets/members/spencer-humes.JPG",
    name: "Spencer Humes",
    position: ["Kinetic Member"],
    linkedin: "https://www.linkedin.com/in/spencer-humes-5b4070289/",
    stats: [
      ["Dexterity", "Certainty", "Alacrity"],
      [40, 20, 60]
    ]
  },
  narayanRueppel: {
    imgSrc: "../src/assets/members/narayan-rueppel.jpg",
    name: "Narayan Rueppel",
    position: ["Sportsman Co-Lead"],
    linkedin: "https://www.linkedin.com/in/narayan-rueppel-668861256/",
    stats: [
      ["Punctuality", "Swahili", "Trampolining"],
      [90, 10, 70]
    ]
  },
  manuelyFelizPortes: {
    imgSrc: "../src/assets/members/manuely-feliz-portes.jpg",
    name: "Manuely Feliz Portes",
    position: ["Sportsman Co-Lead"],
    linkedin: "https://www.linkedin.com/in/manuely-feliz-portes-1b0116326/",
    stats: [
      ["Decisive", "Driving", "Credibility"],
      [10, 50, 100]
    ]
  },
  alexJenkins: {
    imgSrc: "../src/assets/members/alex-jenkins.jpg",
    name: "Alex Jenkins",
    position: ["Sportsman Member", "Training Lead", "Former Subteam Co-Lead"],
    linkedin: "https://www.linkedin.com/in/alex-jenkins-201214223/",
    stats: [
      ["Punctuality", "Dragon Training", "Spelling"],
      [80, 100, 20]
    ]
  },
  kaiRodger: {
    imgSrc: "../src/assets/members/kai-rodger.jpg",
    name: "Kai Rodger",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/kai-rodger-70998029a/",
    stats: [
      ["Snowboarding", "Cooking", "Focus"],
      [90, 0, 50]
    ]
  },
  tylerSprague: {
    imgSrc: "../src/assets/members/tyler-sprague.jpg",
    name: "Tyler Sprague",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/tyler-sprague-209270295/",
    stats: [
      ["Frisbee", "Replying in Group Chat", "Vending Machine Interest"],
      [95, 90, 80]
    ]
  },
  jasonChoi: {
    imgSrc: "../src/assets/members/jason-choi.jpg",
    name: "Jason Choi",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/jason-choi-6336a327b",
    stats: [
      ["Asian mom energy", "Alleged non straight", "Amount of hair"],
      [80, 70, 20]
    ]
  },
  ruiHanChu: {
    imgSrc: "../src/assets/members/ruihan-chu.jpg",
    name: "RuiHan Chu",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/ruihan-chu-654020234",
    stats: [
      ["Piano", "Food lover", "Cooking skills"],
      [100, 95, 10]
    ]
  },
  sarahBulkley: {
    imgSrc: "../src/assets/members/sarah-bulkley.jpg",
    name: "Sarah Bulkley",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/sarah-bulkley-589692312",
    stats: [
      ["Procrastination", "Decisive", "H in name"],
      [90, 10, 100]
    ]
  },
  xiaYanZhao: {
    imgSrc: "../src/assets/members/xia-yan-zhao.jpg",
    name: "Xiayan Zhao",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/xiayan-z-14aa45272",
    stats: [
      ["FBI agent", "League/Reddit", "Conscious thoughts"],
      [80, 70, 10]
    ]
  },
  aaronHarnish: {
    imgSrc: "../src/assets/members/aaron-harnish.jpg",
    name: "Aaron Harnish",
    position: ["Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/aaron-harnish/",
    stats: [
      ["Caleb impersonation skills", "Milk enthusiasm", "Raising average height"],
      [30, 80, 90]
    ]
  },
  christoperAdonizio: {
    imgSrc: "../src/assets/members/christopher-adonizio.jpg",
    name: "Christopher Adonizio",
    position: ["Autonomous Co-Lead"],
    linkedin: "https://www.linkedin.com/in/christopher-adonizio-0b7683219/",
    stats: [
      ["Chess", "Frisbee", "Fruitmaxxing"],
      [60, 80, 100]
    ]
  },
  alyssaHsu: {
    imgSrc: "../src/assets/members/alyssa-hsu.jpg",
    name: "Alyssa Hsu",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "https://www.linkedin.com/in/haalyssa/",
    stats: [
      ["Tummy Sleeper", "Pentakills", "Airsipping"],
      [100, 0, 30]
    ]
  },
  ananyaJajodia: {
    imgSrc: "../src/assets/members/ananya-jajodia.jpg",
    name: "Ananya Jajodia",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "https://www.linkedin.com/in/ananya-jajodia-11b4a2249/",
    stats: [
      ["Tetris", "Hydration", "Lowering Average Height"],
      [70, 0, 90]
    ]
  },
  camilleYap: {
    imgSrc: "../src/assets/members/camille-yap.jpg",
    name: "Camille Yap",
    position: ["Autonomous Member", "Autonomous Trainer"],
    linkedin: "https://www.linkedin.com/in/camille-yap-150a65281/",
    stats: [
      ["Avocado enthusiasm", "Back sleeper", "Thoughts"],
      [100, 100, 0]
    ]
  },
  ethanDeCamp: {
    imgSrc: "../src/assets/members/ethan-decamp.JPG",
    name: "Ethan DeCamp",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/ethan-decamp-00a34927a/",
    stats: [
      ["Name Theft", "Value per Meal Swipe", "Sensitivity to Cold"],
      [100, 90, 20]
    ]
  },
  ethanZhang: {
    imgSrc: "../src/assets/members/ethan-zhang.jpg",
    name: "Ethan Zhang",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "https://www.linkedin.com/in/empzhang/",
    stats: [
      ["Fire Bending", "Cursed Knowledge", "Sniping"],
      [70, 20, 100]
    ]
  },
  graceLim: {
    imgSrc: "../src/assets/members/grace-lim.jpg", 
    name: "Grace Lim",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "https://www.linkedin.com/in/graceelimm/",
    stats: [
      ["Handwriting", "Being at Upson", "Playing Genshin Consistently"],
      [100, 70, 10]
    ]
  },
  jennyWu: {
    imgSrc: "../src/assets/members/jenny-wu.jpg",
    name: "Jenny Wu",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/jenny-wu-5a7318266/",
    stats: [
      ["Red", "Green", "Blue"],
      [0, 0, 100]
    ]
  },
  riddhiLamba: {
    imgSrc: "../src/assets/members/riddhi-lamba.JPG",
    name: "Riddhi Lamba", 
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/riddhi-lamba/",
    stats: [
      ["Ducktails", "Time Management", "Working Computer"],
      [90, 100, 0]
    ]
  },
  rohinPhukan: {
    imgSrc: "../src/assets/members/rohin-phukan.JPG",
    name: "Rohin Phukan",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/rohin-phukan/",
    stats: [
      ["Geoguessr", "Raising Average Height", "Perceived Geoguessr"],
      [100, 90, 100]
    ]
  },
  shaoStassen: {
    imgSrc: "../src/assets/members/shao-stassen.jpg",
    name: "Shao Stassen",
    position: ["Autonomous Member", "Former Subteam Co-Lead"],
    linkedin: "https://www.linkedin.com/in/shaostassen/",
    stats: [
      ["Github", "Debugging", "Public Speaking"],
      [90, 20, 40]
    ]
  },
  sophieCheng: {
    imgSrc: "../src/assets/members/sophie-cheng.JPG",
    name: "Sophie Cheng",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/sophie-cheng-394357246/", 
    stats: [
      ["Potassium", "Penmanship", "\"P\" Alliteration"],
      [90, 90, 100]
    ]
  },
  tylerLovejoy: {
    imgSrc: "../src/assets/members/tyler-lovejoy.JPG",
    name: "Tyler Lovejoy",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/tyler-lovejoy-2b7010338/",
    stats: [
      ["Ownership of Eames Lounger and Ottoman", "Milk", "Skiing"],
      [10, 90, 90]
    ]
  },
  rachelPineda: {
    imgSrc: "../src/assets/members/rachel-pineda.jpg",
    name: "Rachel Pineda",
    position: ["Marketing Co-Lead"],
    linkedin: "https://www.linkedin.com/in/rrachelpineda/",
    stats: [
      ["Crossword Enthusiasm", "LinkedIn", "Hiding the Stats Doc"],
      [90, 50, 10]
    ]
  },
  javohirAbdurazzakov: {
    imgSrc: "../src/assets/members/javohir-abdurazzakov.jpg",
    name: "Javohir Abdurazzakov",
    position: ["Marketing Co-Lead"],
    linkedin: "https://www.linkedin.com/in/javohir1/",
    stats: [
      ["Soccer", "Germaphobe", "Weight Fluctuation"],
      [20, 75, 95]
    ]
  },
  angelaZhu: {
    imgSrc: "../src/assets/members/angela-zhu.jpg",
    name: "Angela Zhu",
    position: ["Marketing Member", "Marketing Trainer"],
    linkedin: "https://www.linkedin.com/in/angela-zhu-26b22229a/",
    stats: [
      ["Gacha addiction", "Pyramid scheme recruitment", "Studying during social"],
      [90, 80, 100]
    ]
  },
  caedyLee: {
    imgSrc: "../src/assets/members/caedy-lee.JPG",
    name: "Caedy Lee",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/caedy-lee-4022792b7/",
    stats: [
      ["Hot Water Addiction", "Pizza Crust", "Arcane"],
      [80, 5, 100]
    ]
  },
  crystalLi: {
    imgSrc: "../src/assets/members/crystal-li.jpg",
    name: "Crystal Li",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/crystal-li-698431255/",
    stats: [
      ["Decisiveness", "Crocheting", "Injurability"],
      [0, 60, 90]
    ]
  },
  evanZhu: {
    imgSrc: "../src/assets/members/evan-zhu.jpg",
    name: "Evan Zhu",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/evan-j-zhu/",
    stats: [
      ["Terrace Ramen Bowl", "Miner Poison", "Screen Time"],
      [100, 75, 90]
    ]
  },
  lindaHu: {
    imgSrc: "../src/assets/members/linda-hu.jpg",
    name: "Linda Hu",
    position: ["Marketing Member", "Former Subteam Lead"],
    linkedin: "https://www.linkedin.com/in/linda-ly-hu/",
    stats: [
      ["Drawing", "Earrings", "Not Playing Genshin"],
      [60, 80, 100]
    ]
  },
  meiLingWood: {
    imgSrc: "../src/assets/members/meiling-wood.jpg",
    name: "Mei Ling Wood",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/mei-ling-wood-bb669523b/",
    stats: [
      ["Food begging skills", "Decisiveness", "Water Drinking"],
      [100, 0, 100]
    ]
  },
  nicholasUnderwood: {
    imgSrc: "../src/assets/members/nicholas-underwood.JPG",
    name: "Nicholas Underwood",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/nicholas-underwood-0b7733290/",
    stats: [
      ["Sleep", "Workaholic", "Dairy Consumption"],
      [30, 90, 0]
    ]
  },
  ruslanBlack: {
    imgSrc: "../src/assets/members/ruslan-black.JPG",
    name: "Ruslan Black",
    position: ["Marketing Member"],
    linkedin: "https://www.linkedin.com/in/ruslansblack/",
    stats: [
      ["Reels", "Ladder", "Snoring in Seal"],
      [90, 0, 50]
    ]
  },
  sardorRahmatulloev: {
    imgSrc: "../src/assets/members/sardor-rahmatulloev.jpg",
    name: "Sardor Rahmatulloev", 
    position: ["Marketing Member", "Former Team Co-Lead"],
    linkedin: "https://www.linkedin.com/in/sardor-rahmatulloev/",
    stats: [
      ["Getting the bag", "GitHub", "Chaotic"],
      [80, 10, 100] 
    ]
  },
  // ALUMNI
  annaBoese: {
    imgSrc: "../src/assets/members/anna-boese.jpg",
    name: "Anna Boese",
    position: ["Kinetic Member", "MechE Trainer", "Former Kinetic Subteam Co-Lead (2023)", "Former Kinetic Vice Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/anna-boese-4a304819b/",
    stats: [
      ["Hair Color Consistency", "Short Term Memory", "Adaptability"],
      [10, 40, 90]
    ]
  },
  mohammedChowdhury: {
    imgSrc: "../src/assets/members/mohammed-chowdhury.jpg",
    name: "Mohammed Chowdhury",
    position: ["Alum 2024", "Kinetic Member", "Safety Training Lead"],
    linkedin: "https://www.linkedin.com/in/mac528/",
    stats: [
      ["Loving Sebastian", "Being an Ally", "Hating James LaSalle"],
      [100, 50, 100]
    ]
  },
  zarifPathan: {
    imgSrc: "../src/assets/members/zarif-pathan.jpg",
    name: "Zarif Pathan",
    position: ["Sportsman Member"],
    linkedin: "https://www.linkedin.com/in/zarif-pathan/",
    stats: [
      ["Water Bending", "Circuitry", "Drip"],
      [40, 80, 60]
    ]
  },
  katieHuntley: {
    imgSrc: "../src/assets/members/katie-huntley.jpg",
    name: "Katie Huntley",
    position: ["Autonomous Member"],
    linkedin: "https://www.linkedin.com/in/katieahuntley/",
    stats: [
      ["sleep schedule", "craftiness", "español"],
      [90, 70, 60]
    ]
  },
  brunoTassari: {
    imgSrc: "../src/assets/members/bruno-tassari.jpg",
    name: "Bruno Tassari",
    position: ["Alum 2023", "Team Lead (2022-2023)", "VTL (2021-2022)", "Sportsman (2021-2023)", "Marketing (2023)"],
    linkedin: "https://www.linkedin.com/in/bruno-tassari/",
    stats: [
      ["Anime Trivia", "A Freak in the Google Sheets", "Epic Jokes"],
      [90, 70, 40]
    ]
  },
  williamMurphy: {
    imgSrc: "../src/assets/members/william-murphy.jpg",
    name: "William Murphy",
    position: ["Alum 2023", "Former Marketing Vice Subteam Lead (2023)", "Former Sportsman VSL (2022)"],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
    stats: [
      ["Meow", "Cuteness", "Attendance"],
      [50, 100, 10]
    ]
  },
  isaacNewcomb: {
    imgSrc: "../src/assets/members/isaac-newcomb.jpg",
    name: "Isaac Newcomb",
    position: ["Alum 2024", "Former Kinetic Subteam Lead (2022-2023)", "Kinetic (2024)"],
    linkedin: "https://linkedin.com/in/isaacdnew",
    stats: [
      ["Robot Piloting", "Scooter Skills", "Having Time to Compose the CRCCU Theme Song"],
      [90, 80, 20]
    ]
  },
  richardJin: {
    imgSrc: "../src/assets/members/richard-jin.jpg",
    name: "Richard Jin",
    position: ["Alum 2024", "Former Autonomous Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/richard-jin/",
    stats: [
      ["Time Complexity Analysis", "Fanny Pack Wearing", "GitHub"],
      [70, 10, 40]
    ]
  },
  lukeMurphy: {
    imgSrc: "../src/assets/members/luke-murphy.jpg",
    name: "Luke Murphy",
    position: ["Alum 2024", "Former Vice Team Lead (2022-2023)", "Marketing (2024)"],
    linkedin: "https://www.linkedin.com/in/luke-murphy-09659b22a/",
    stats: [
      ["Website Skills", "CAD", "Pixel Art"],
      [100, 10, 60]
    ]
  },
  mollyDrumm: {
    imgSrc: "../src/assets/members/molly-drumm.jpg",
    name: "Molly Drumm",
    position: ["Alum 2024", "Former Sportsman Vice Subteam Lead (2023)", "Marketing (2024)"],
    linkedin: "https://www.linkedin.com/in/molly-drumm-a4430a208/",
    stats: [
      ["Quirkiness", "Diet", "Vegemite Eating"],
      [90, 10, 100]
    ]
  },
  rubyWang: {
    imgSrc: "../src/assets/members/Ruby-Wang.jpg",
    name: "Ruby Wang",
    position: ["Alum 2024", "Marketing (2022-2024)"],
    linkedin: "https://www.linkedin.com/in/rubywang1222/",
    stats: [
      ["Zoning Out", "Drawing", "AEM"],
      [70, 100, 10]
    ]
  },
  charlesLiu: {
    imgSrc: "../src/assets/members/charles-liu.jpg",
    name: "Charles Liu",
    position: ["Alum 2024", "Sportsman (2023-2024)"],
    linkedin: "https://www.linkedin.com/in/charles-liu-035190181/",
    stats: [
      ["Being Tall", "Big Brain", "Sportsman Sunshine"],
      [50, 10, 70]
    ]
  },
  marcusEsposito: {
    imgSrc: "../src/assets/members/marcus-esposito.jpg",
    name: "Marcus Esposito",
    position: ["Alum 2024", "Former Sportsman Subteam Lead (2022-2023)", "Sportsman (2024)"],
    linkedin: "https://www.linkedin.com/in/marcus-esposito/",
    stats: [
      ["Punctuality", "Explaining Things", "Intimidation"],
      [90, 60, 0]
    ]
  },
  sanaGaya: {
    imgSrc: "../src/assets/members/sana-gaya.jpg",
    name: "Sana Gaya",
    position: ["Alum 2024", "Sportsman (2023)"],
    linkedin: "https://www.linkedin.com/in/sana-gaya/",
    stats: []
  },
  shawnChen: {
    imgSrc: "../src/assets/members/shawn-chen.jpg",
    name: "Shawn Chen",
    position: ["Alum 2023", "Autonomous (2023)"],
    linkedin: "https://www.linkedin.com/in/shawn-siyuanchen",
    stats: [
      ["Hoodie and Jean Combo", "Attending Socials", "Impersonating Polish People"],
      [80, 5, 100]
    ]
  },
  edithChen: {
    imgSrc: "../src/assets/members/edith-chen.jpg",
    name: "Edith Chen",
    position: ["Alum 2023", "Former Marketing Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/chen-edith/",
    stats: []
  },
  jamesCourtenay: {
    imgSrc: "../src/assets/members/james-courtenay.jpg",
    name: "James Courtenay",
    position: ["Alum 2023", "Former Kinetic Vice Subteam Lead (2023)"],
    linkedin: "https://www.linkedin.com/in/jcourtenay/",
    stats: [
      ["Music Taste", "MechE-ness", "Machining"],
      [90, 10, 60]
    ]
  },
  lucienEckert: {
    imgSrc: "../src/assets/members/lucien-eckert.jpg",
    name: "Lucien Eckert",
    position: ["Alum 2023", "Former Marketing Vice Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/lucien-eckert/",
    stats: [
      ["Game Development", "Escaping from Captivity", "Writing Inline CSS"],
      [70, 40, 100]
    ]
  },
  mayaZamor: {
    imgSrc: "../src/assets/members/maya-zamor.jpg",
    name: "Maya Zamor",
    position: ["Alum 2023", "Former Marketing Subteam Lead (2022-2023)"],
    linkedin: "https://www.linkedin.com/in/maya-zamor-a9420b188",
    stats: []
  },
  spencerHurst: {
    imgSrc: "../src/assets/members/spencer-hurst.jpg",
    name: "Spencer Hurst",
    position: ["Alum 2023", "Former Kinetic (2021-2023)"],
    linkedin: "https://www.linkedin.com/in/spencer-hurst-918627191/",
    stats: []
  },
  sofieHalpern: {
    imgSrc: "../src/assets/members/sofie-halpern.jpg",
    name: "Sofie Halpern",
    position: ["Alum 2022", "Kinetic (2019-2022)", "Marketing (2022)", "First Team Lead (2019-2022)", "Co-Founder"],
    linkedin: "https://www.linkedin.com/in/sofie-halpern/",
    stats: []
  },
  kaitlynHoxha: {
    imgSrc: "../src/assets/members/kaitlyn-hoxha.jpg",
    name: "Kaitlyn Hoxha",
    position: ["Alum 2022", "Former Marketing Subteam Lead (2020-2021)"],
    linkedin: "https://www.linkedin.com/in/kaitlyn-hoxha/",
    stats: []
  },
  alexSalonga: {
    imgSrc: "../src/assets/members/alex-salonga.jpg",
    name: "Alex Salonga",
    position: ["Alum 2022", "Former Marketing Vice Subteam Lead (2021)"],
    linkedin: "https://www.linkedin.com/in/alexander-salonga-4a0583177/",
    stats: []
  },
  ashSiddiqui: {
    imgSrc: "../src/assets/members/ash-siddiqui.jpg",
    name: "Ash Siddiqui",
    position: ["Alum 2022", "Former Autonomous Vice Subteam Lead (2021)"],
    linkedin: "",
    stats: []
  },
  blazeEzlakowski: {
    imgSrc: "../src/assets/members/blaze-ezlakowski.jpg",
    name: "Blaze Ezlakowski",
    position: ["Alum 2022", "Former Autonomous Vice Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/blaze-ezlakowski-25b3731b7",
    stats: [
      ["Unicycle Riding", "Having Siblings", "Vending Machine Interest"],
      [50, 90, 80]
    ]
  },
  erhunmwunseEghafona: {
    imgSrc: "../src/assets/members/erhunmwunse-eghafona.jpg",
    name: "Erhunmwunse Eghafona",
    position: ["Alum 2022", "Former Kinetic (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/eeghafona/",
    stats: []
  },
  kevinLiu: {
    imgSrc: "../src/assets/members/kevin-liu.jpg",
    name: "Kevin Liu",
    position: ["Alum 2022", "Former Sportsman Subteam Lead (2020- 2021)"],
    linkedin: "https://www.linkedin.com/in/kevin-liu-308546230/",
    stats: []
  },
  michelleZhou: {
    imgSrc: "../src/assets/members/michelle-zhou.jpg",
    name: "Michelle Zhou",
    position: ["Alum 2022", "Former Sportsman Subteam Lead (2022)"],
    linkedin: "https://www.linkedin.com/in/michelle-z-20b22b139/",
    stats: []
  },
  moMoghaddasi: {
    imgSrc: "../src/assets/members/mo-moghaddasi.jpg",
    name: "Mohammad Ali Moghaddasi",
    position: ["Alum 2022", "Former Kinetic (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/mohammad-ali-moghaddasi-7797a5143/",
    stats: []
  },
  richardKang: {
    imgSrc: "../src/assets/members/richard-kang.jpg",
    name: "Richard Kang",
    position: ["Alum 2022", "Former Autonomous (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/richard-kang-bb923824a/",
    stats: []
  },
  rickyWang: {
    imgSrc: "../src/assets/members/ricky-wang.jpg",
    name: "Ricky Wang",
    position: ["Alum 2022", "Former Kinetic Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/rickywang0/",
    stats: []
  },
  rochelleBarsz: {
    imgSrc: "../src/assets/members/rochelle-barsz.jpg",
    name: "Rochelle Barsz",
    position: ["Alum 2022", "Former Autonomous Subteam Lead (2021-2022)"],
    linkedin: "https://www.linkedin.com/in/rochelle-barsz/",
    stats: []
  },
  shubhamMathur: {
    imgSrc: "../src/assets/members/shubham-mathur.jpg",
    name: "Shubham Mathur",
    position: ["Alum 2022", "Former Sportsman (2019-2022)", "Co-Founder"],
    linkedin: "https://www.linkedin.com/in/shubham-m-3a41a9133/",
    stats: []
  },
  robMeasner: {
    imgSrc: "../src/assets/members/rob-measner.jpg",
    name: "Rob Measner",
    position: ["Alum 2021", "Former Autonomous (2019-2021)"],
    linkedin: "https://www.linkedin.com/in/robert-measner-1a4108196/",
    stats: []
  },
  stefanBell: {
    imgSrc: "../src/assets/members/stefan-bell.jpg",
    name: "Stefan Bell",
    position: ["Alum 2021", "Former Kinetic Subteam Lead (2020-2021)"],
    linkedin: "https://www.linkedin.com/in/stefan-bell-sb855/",
    stats: []
  },
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
  Alumni: [
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