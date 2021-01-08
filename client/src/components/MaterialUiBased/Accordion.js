import React from "react";
import { AccordionSummary, AccordionDetails } from "@material-ui/core";
import AccordionComp from "@material-ui/core/Accordion";
import { ExpandMore } from "@material-ui/icons";

function Accordion({ title, children }) {
  return (
    <AccordionComp>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionComp>
  );
}

export default Accordion;
