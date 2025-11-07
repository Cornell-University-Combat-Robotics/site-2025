import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
export interface FAQSection {
  qn: string[],
  ans: JSX.Element[] //cuz need link, so need to pass in <p> instead of string
}

function FAQ(props: FAQSection) {
  const isMobile = useContext(MobileContext);
  
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      textAlign="left"
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
        <Typography variant={isMobile ? 'mobileH2' : 'desktopH2'} display='block' align="center">
          FAQ
        </Typography>

        <Box width="75%" justifyContent="center" alignItems="center" mx="auto">
          {/* Accordion Items */}
          <>
            {props.qn.map((question, index) => (
              <QnAndDescription key={index} qn={question} ans={props.ans[index]}/>
            ))}
          </>
        </Box>

        {/* Footer */}
        <Typography
          align="center"
          variant={isMobile ? 'mobileBody' : 'desktopBody2'}
          display={'block'}
          sx={{ mt: 4 }}
        >
          If you have any further questions, please email us at{' '}
          <a 
            href="mailto:combatrobotics@cornell.edu"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            combatrobotics@cornell.edu
          </a>.
        </Typography>
      </Box>
    </Box>
  );
}


function QnAndDescription({qn, ans}) {
  const isMobile = useContext(MobileContext);

  return (
    <Box>
      <Accordion
        sx={{
          backgroundColor: '#63080A',
          color: 'white',
          boxShadow: 'none',
          width: '100%',
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
          <Typography variant={isMobile ? 'mobileBody' : 'desktopBody2'}>
            {qn}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={isMobile ? 'mobileBody' : 'desktopBody2'}>
            {ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ backgroundColor: 'white', my: 2 }} />
    </Box>
  );
}

export function LinkToPage ({ id, text }) {

  const [isHover, setHover] = useState(false);

  return (
    //not sure why you can't use Link instead, but at least <a> works
    <a href={id}
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer" // Security best practice
      style={{ 
        color: isHover ? "red" : "white", 
        textDecoration: "underline" 
      }}

      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </ a>
  );
}


export default FAQ;