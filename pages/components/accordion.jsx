import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Registration from "./Registration-form";
import Vaccination from "./Vaccination-form"
export default function Accord() {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: " #2196f3" }}
        >
          <div className="flex items-center">
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Registration Form
            </Typography>
            <Typography sx={{ marginLeft: 30, color: "white" }}>
              Asking patient information and input into system in this form
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Registration />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: " #2196f3" }}
        >
          <div className="flex items-center">
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Vaccination Form
            </Typography>
            <Typography sx={{ marginLeft: 30, color: "white" }}>
              Patient vaccination information & history
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Vaccination/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
