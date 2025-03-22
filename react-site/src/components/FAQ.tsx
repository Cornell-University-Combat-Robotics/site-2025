import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FAQSection {
  qn: string[],
  ans: JSX.Element[] //cuz need link, so need to pass in <p> instead of string
}

function FAQ(props: FAQSection) {
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
        <Typography variant="h4" align="center" sx={{ fontFamily: 'Josefin Sans', mb: 4 }}>
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


function QnAndDescription({qn, ans}) {
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
          <Typography sx={{ fontStyle: 'italic', fontFamily: 'Josefin Sans' }}>
            {qn}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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