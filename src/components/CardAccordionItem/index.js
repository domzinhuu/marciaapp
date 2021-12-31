import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { formatToMoney } from "../../utils/functions";

const CardAccordionItem = ({ installment }) => {
  return (
    <ListItem sx={{ borderLeft: "4px solid #388e3c",borderBottom:'1px solid #f2f2f2' }}>
      <ListItemText
        primary={`${installment.local} - ${installment.product}`}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              Parcela({`${installment.number}/${installment.total}`})
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              - R$ {formatToMoney((installment.value / 100).toFixed(2))}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CardAccordionItem;
