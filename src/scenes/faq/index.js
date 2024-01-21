import React from "react";
import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../../theme";
const FAQ = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
     <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={color.greenAccent[500]} variant="h5" m ="5px">
          An Important Question
        </Typography>
        <AccordionDetails>
          <Typography>Pleae contact us ...............</Typography>
        </AccordionDetails>
      </Accordion>
     <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={color.greenAccent[500]} variant="h5" m ="5px">
          Your Favourite Question
        </Typography>
        <AccordionDetails>
          <Typography>Pleae contact us ...............</Typography>
        </AccordionDetails>
      </Accordion>
     <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={color.greenAccent[500]} variant="h5" m ="5px">
          A Random Question
        </Typography>
        <AccordionDetails>
          <Typography>Pleae contact us ...............</Typography>
        </AccordionDetails>
      </Accordion>
     <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={color.greenAccent[500]} variant="h5" m ="5px">
          The Final Question
        </Typography>
        <AccordionDetails>
          <Typography>Pleae contact us ...............</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
