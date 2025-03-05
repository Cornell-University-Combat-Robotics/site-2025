import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider, Stack, setRef } from "@mui/material";
import apply from "../assets/background-pictures/newbies-photo.jpg";
import React, { useEffect, useState, useRef } from "react";
import RedBox from "../components/RedBox.tsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import join01 from "../assets/background-pictures/join-01-background.png";
import join02 from "../assets/background-pictures/join-02-background.png";
import join03 from "../assets/background-pictures/join-03-background.png";
import join04 from "../assets/background-pictures/join-04-background.png";
import slugma from "../assets/3lb/slugma_profile.jpg";
import robot_scroll from "../assets/robot_scroll.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

/** Apply creates the Apply page for the website. */
export default function Apply() {

  /** list of all events in the recruitment timeline */
  const event = [
    { name: 'Project Team Fest', date: '6/9/25' },
    { name: 'Clubfest', date: '6/10/25' },
    { name: 'Info Session 1', date: '6/11/25' },
    { name: 'Info Session 2', date: '6/12/25' },
    { name: 'Info Session 3', date: '6/13/25' },
    { name: 'Applications Due', date: '11.59PM  7/1/25' }
  ];

  /** 
   * Effect: Getting user's scroll progress in the viewport
   * useScroll() returns an object with two MotionValue values: 
   * - { scrollY == current vertical scroll position, scrollYProgress == normalized scroll value between 0 & 1 }
   * but you can choose to get only one property */
  const { scrollYProgress } = useScroll();

  /** 
   * Effect: Maps scrolling (0 → 1) to movement (0px → 300px).
   * useTransform(inputValue, inputRange, outputRange): 
   * - inputValue: A MotionValue that you want to transform.	
   * - inputRange: An array of values representing the expected range of inputValue.
   * - outputRange: An array of mapped values that correspond to inputRange.
  */
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 300])

  const [isVisible, setIsVisible] = useState(false);
  const [isBottomCrossed, setIsBottomCrossed] = useState(false);
  /*
  Scenarios:
  1) above stack component: isVisible = false && isBottomCrossed = false -> DON't render
  3) within stack component: isVisible = true && isBottomCrossed = false -> RENDER
  2) below stack component: isVisible = false (depends on threshold) && isBottomCrossed = true -> DON't render
  */

  const [yValue, setYValue] = useState();

  /** attach this to component that you want to listen to in user's viewport */
  const ref = useRef(null);
  const arrow = useRef(null);

  const [userBottom, setUserBottom] = useState(window.innerHeight + window.scrollY);
  const [refBottom, setRefBottom] = useState(0);

  const [arrowBottom, setArrowBottom] = useState(0);

  useEffect(() => {
    if (ref.current) {
      // Get initial absolute position
      const refComp = ref.current.getBoundingClientRect();
      setRefBottom(refComp.bottom + window.scrollY);
    }

    if (arrow.current) {
      const refArrow = arrow.current.getBoundingClientRect();
      setArrowBottom(refArrow.bottom + window.scrollY);
    }
  }, []);

  /*
  Idea: 1) find a way to control the length of the svg component
  2) use window listener to determine where is the bottom??? of the user's viewport & also get the bottom of the svg component
  - unrender when they hit
  */
  //always active?
  useEffect(() => {

    //what is entry?
    //entry: an IntersectionObserverEntry object
    //IntersectionObserver stays attached and keeps detecting visibility changes automatically.
    const observer = new IntersectionObserver(([entry]) => {
      //entry.isIntersecting is TRUE when element is visible in the viewport & FALSE when element is not visible (scrolled out of view)
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
      { threshold: 0.05 } //controls how much of the element must be visible before [entry.isIntersecting] becomes true
    );

    //only runs when ref is not null -> meaning ref is attached to an object
    if (ref.current) {
      observer.observe(ref.current) //attaches the observer -> starts tracking visibility changes for this ref component
    }

    //update bottom of window position by listening to user's scroll
    const handleScroll = () => {

      setUserBottom(window.innerHeight + window.scrollY);
    };


    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);

  }, []); //no dependencies: meaning the useEffect only runs ONCE on the first render => prevents observer from being created every render (inefficient)

  useEffect(() => {
    //console.log("userBottom value: ", userBottom)
    //console.log("refBottom value: ", refBottom)
    //okay, so refBottom is always 8133 now, which indicates where the bottom of the stack (where it crosses into the red faq)

    if (userBottom >= arrowBottom) {
      setIsBottomCrossed(true);
    } else {
      setIsBottomCrossed(false);
    }
  }, [userBottom, refBottom]);

  return (

    <Box sx={{}}>
      {/* above is body of site */}
      <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${apply})`,  // Your image URL
        backgroundSize: 'cover',      // Ensure the image covers the area
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        {/* we build robots font, shifted up to be below the logo. the percentages are hard coded */}
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            transform: 'translate(0,15%)',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Add drop shadow
          }}>
          JOIN US!
        </Typography>
      </Box>

      <RedBox
        title="Our applications for Fall 2024 are open!"
        text="All applications are due October 17th, 11:59pm."
        word="Apply Now!"
        link="/sponsors"
        mTop="5%"
        mSide="15%"
      />

      <Typography
        // Recruitment Timeline h1
        variant="h2"
        sx={{
          textAlign: 'center',
          color: 'white',
          mb: 10
          // add margins when text size smaller
        }}>
        RECRUITMENT TIMELINE
      </Typography>


      {/*Contains geometric timeline*/}
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {/*Must wrap line component in SVG (Scalable Vector Graphics): good for geometric elements like lines and shapes*/}
        <svg width="100%" height="20%">

          <line
            x1="10%" //coordinates of the line: 10% from the left
            x2="85%" //TODO: change, last element is slightly off
            y1="10%" //set 10% from top of svg component
            y2="10%"
            stroke={"white"}
            strokeWidth="5"
          >
          </line>

          {event.map(({ name, date }, index) => {
            const xPos = [`${10 + index * 15}%`]; //increments x position to the right according to index

            return (
              <g key={index}> {/*groups shapes tgt, since all returned elements within a map must be wrapped in a single element*/}
                <circle
                  cx={xPos}
                  cy="10%" //same as line -> falls on line
                  r={10} //radius
                  fill="white" //color
                >
                </circle>

                {/*Note: svg components do support attributes that Material-UI components usually use (e.g. variant, color)*/}
                <text key={index} fill="white" fontFamily='Josefin Sans, sans-serif' fontSize={25} y="50%"
                  textAnchor="middle" //horizontally centered
                >
                  {/*use tspan to separate texts, since svg does not support new-line*/}
                  <tspan x={xPos} >
                    {name}
                  </tspan>
                  <tspan x={xPos}
                    dy="2rem" //changes y position of this tspan relative to tspan above
                  >
                    {date}
                  </tspan>
                </text>
              </g>
            );
          })}

        </svg>


      </Box>


      <Box width="100%" height="100%" mb={20}
        sx={{
          display: 'grid', placeItems: "center" //alignment parameter when using grids (not justifycontent)
        }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '60%',
          gap: '30px 40px',
          height: '100%',
        }}>
          <ApplicationSteplist name="INFO SESSIONS" desc="We highly encourage you to meet our team at an info session! If you cannot make any sessions you may contact us, but we strongly recommend attending an info session to meet the team directly." img={`url(${join01})`} />
          <ApplicationSteplist name="APPLICATIONS DUE" desc="All applications (Freshman, Upperclassmen, and Transfer) are due October 17th, 11:59pm" img={`url(${join02})`} />
          <ApplicationSteplist name="GROUP INTERVIEW" desc="Work with other applicants (and more importantly, have fun!) in our group interview" img={`url(${join03})`} />
          <ApplicationSteplist name="INDIVIDUAL INTERVIEW" desc="We want to see your interest and fit for your chosen subteam, but no prior experience is necessary." img={`url(${join04})`} />
        </Box>
      </Box>




      <Typography variant="h2" mb={20}>
        NEW MEMBER EXPERIENCE
      </Typography>




      <Stack direction="row" paddingRight={20} paddingLeft={20} gap={10} ref={ref}

      // Ensures scrolling
      >
        {/*arrow*/}
        <svg width="10%" //svg component takes up 10% of stack & full height of stack
        >
          <line
            x1="50%" //coordinates of the line: 50% from the left of svg component
            x2="50%"
            y1="5%" //set 5% from top of svg component
            y2="90%"
            stroke={"#820002"}
            strokeWidth="25"
          >
          </line>

          {/*equilateral triangle: TODO -> rn is hardcoded... */}
          <polygon points="0,10 100,10 50,100" //(50,10): 50% from left of svg, 10% from top of svg
            fill="#820002"
            transform="translate(15, 2600)" //shifts the triangle 20 units right and 30 units down
            ref={arrow}
          />

        </svg>

        {/*
        <Box
          zIndex={100}
          position="sticky"
          left={47}
          top={"40%"}
        >
          <img
            src={robot_scroll}
            style={{
              transform: "scale(0.4)" // scale the image down, maintaining aspect ratio
            }}
          />
        </Box>
         */}

        {isVisible && !isBottomCrossed && (
          <Box
            zIndex={100}
            position="fixed"
            left={-47}
            top={"50%"}
          >
            <RobotScroll />
          </Box>)
        }

        {/** TODO completely separate robot scroll image that is suppose to stay at the bottom of the arrow if user scrolls down past it & disappear when user scrolls up past it*/}
        {/*
        {isBottomCrossed && 
          (<Box
            zIndex={100}
            position="fixed"
            left={-47}
            top={"50%"}
          >
            <RobotScroll />
          </Box>) 
        }
           */}


        <Stack direction="column" alignItems="center" rowGap={10} height="100%" width="80%" mb={20}>
          <MemberExperienceComponent bgcolor={"#242121"} img={slugma} title={"NEWBIE ONBOARDING"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
          <MemberExperienceComponent bgcolor={"#292626"} img={slugma} title={"FIRST GBODY MEETING"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
          <MemberExperienceComponent bgcolor={"#3F3030"} img={slugma} title={"NEWBIE DESIGN REVIEW"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
          <MemberExperienceComponent bgcolor={"#542D2D"} img={slugma} title={"FINAL DESIGN REVIEW"} subtitle={"Early November"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
          <MemberExperienceComponent bgcolor={"#762627"} img={slugma} title={"FINAL DESIGN REVIEW"} subtitle={"Early December"} desc={"After finalizing your 3lb Projects with the help of CRC mentors, you and your project teammates will have the opportunity to show all of your hard work from this past semester! Family and friends are welcome to join and share pizza with the team."} />
          <MemberExperienceComponent bgcolor={"#741112"} img={slugma} title={"NEWBIE GRADUATION"} subtitle={"January"} desc={"During onboarding, members integrate into the team and work on the 3lb project, a robotics project that incorporates elements of all 4 subteams."} />
        </Stack>
      </Stack>

      <FAQSection />
    </Box>
  );
}

{/** Component containing robot scrolling image */ }
function RobotScroll() {
  return (
    <img
      src={robot_scroll}
      style={{
        transform: "scale(0.4)" // scale the image down, maintaining aspect ratio
      }}
    />
  );
}

function MemberExperienceComponent({ bgcolor, img, title, subtitle, desc }) {
  return (
    <Stack direction="row" width="100%" bgcolor={bgcolor} alignItems="center" >
      <img
        src={img}
        style={{
          objectPosition: "center",
          objectFit: "cover",
          maxHeight: 400,
          minWidth: 400
        }}
      />


      {/*descriptions */}
      <Box textAlign={"left"} padding={5}
        bgcolor={bgcolor} //bgcolors arent inherited
      >
        <Typography variant="h4" >
          {title}
        </Typography>

        <Typography fontSize={30} fontStyle="italic" mb={5}>
          {subtitle}
        </Typography>

        <Typography fontSize={20}>
          {desc}
        </Typography>
      </Box>

    </Stack>
  );
}

function FAQSection() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      backgroundColor="#63080A"
      mt={5}
      sx={{
        color: 'white',
        paddingY: '40px',
        paddingX: '20px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <Box width="100%" justifyContent="center" alignItems="center">
        <Typography variant="h4" align="center" sx={{ fontFamily: 'Josefin Sans', mb: 4 }}>
          FAQ
        </Typography>

        <Box width="75%" justifyContent="center" alignItems="center" mx="auto">
          {/* Accordion Items */}
          <>
            <Accordion
              sx={{
                backgroundColor: '#63080A',
                color: 'white',
                boxShadow: 'none',
                width: '100%',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                  I am a company, how can I sponsor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Via mail by filling out the donation form listed on the Sponsorship Packet above, or electronically donate through Cornell (shown above), or donate on Giving Day (shown above). Please email us to notify you wish to become a sponsor.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ backgroundColor: 'white', my: 2 }} />

            <Accordion
              sx={{
                backgroundColor: '#63080A',
                color: 'white',
                boxShadow: 'none',
                width: '100%',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                  I am an individual (not a company), how can I donate?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can donate through the same platforms a company would: via mail by filling out the donation form listed on the Sponsorship Packet, or electronically donate through Cornell, or donate on Giving Day.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ backgroundColor: 'white', my: 2 }} />

            <Accordion
              sx={{
                backgroundColor: '#63080A',
                color: 'white',
                boxShadow: 'none',
                width: '100%',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                  I am a company and want to renew or update my sponsorship packet, what is the process?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donate through the same portal listed above, and email us to notify you wish to renew or update your sponsorship.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ backgroundColor: 'white', my: 2 }} />

            <Accordion
              sx={{
                backgroundColor: '#63080A',
                color: 'white',
                boxShadow: 'none',
                width: '100%',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
                  I am a company and would like to make an arrangement not listed on the Sponsorship Packet, what should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Email us and we would be happy to make arrangements!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ backgroundColor: 'white', my: 2 }} />
          </>
        </Box>

        {/* Footer */}
        <Typography
          align="center"
          sx={{
            fontStyle: 'italic',
            fontFamily: 'Josefin Sans',
            mt: 4,
            color: 'white',
          }}
        >
          If you have any further questions, please email us at combatrobotics@cornell.edu.
        </Typography>
      </Box>
    </Box>
  );
}

{/*For the big red numbers*/ }
function ApplicationSteplist({ name, desc, img }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: img,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Typography variant="h3" //figure out
        sx={{
          textAlign: "right",
          mt: 10,
          mb: 5,
          marginRight: 3,
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)'
        }}
      >
        {name}
      </Typography>

      <Typography variant="body1"
        sx={{
          textAlign: "left",
          mb: "10px",
          mr: 15,
          ml: "10px",
          mt: 5,
          fontSize: 23,
          lineHeight: 1.5
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}