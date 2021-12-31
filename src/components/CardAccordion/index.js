import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardAccordionItem from "../CardAccordionItem";
import { formatToMoney } from "../../utils/functions";

const CardAccordion = ({ register }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      key={register.cardName}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        sx={{ display: "flex", alignItems: "center" }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          R$ {formatToMoney((register.value / 100).toFixed(2))}
        </Typography>
        <Box sx={{ color: "text.secondary" }}>
          <Typography variant="body2">{register.cardName}</Typography>
          <Typography variant="body2">Dia {register.payDay}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {register.installments.map((installment) => (
            <CardAccordionItem
              key={installment._id}
              installment={installment}
            />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default CardAccordion;
