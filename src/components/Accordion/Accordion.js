import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { advanceRuilingdata } from '@/pages/AdvanceRuiling/AdvanceRuilingData';

export default function CustomAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div >
    {advanceRuilingdata && advanceRuilingdata.map((item, index) => {
        return (
            <Accordion key={item.ques} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ color: 'text.primary' }}>{item?.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ color: 'text.secondary' }}>
                {item?.answer.text}
                </Typography>
                {item.answer.list && item.answer.list.map((list, i) => (
                    <Typography key={i} sx={{ color: 'text.secondary', ml:"1rem" }}>
                        {list}
                    </Typography>
                ))}
                {item.answer.lastText && <Typography sx={{ color: 'text.secondary' }}>{item.answer.lastText}</Typography>}
            </AccordionDetails>
            </Accordion>
        )
    })}
    </div>
  );
}