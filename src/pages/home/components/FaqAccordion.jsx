import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

export default function FaqAccordion() {
  const [expanded, setExpanded] = useState(false);

  const faqData = [
    {
      question: "Do you offer home delivery for cycles?",
      answer: "Yes, we provide delivery within city limits at an extra cost.",
    },
    {
      question: "How long does a full service take?",
      answer: "A full service usually takes 2–3 days depending on workload.",
    },
    {
      question: "Can I rent a cycle for a weekend ride?",
      answer: "Yes, weekend rentals are available with prior booking.",
    },
    {
      question: "Do you conduct cycling events?",
      answer: "Yes, we organize group rides and events regularly. Stay tuned!",
    },
  ];

  return (
    <Box sx={{ p: { xs: 1, sm: 2,md:4 } }}>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={() => setExpanded(expanded === index ? false : index)}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            boxShadow: "none",
            "&:before": { display: "none" }, // Remove default MUI divider line
          }}
        >
          <AccordionSummary
            expandIcon={
              <Typography
                fontSize={28}
                fontWeight={300}
                lineHeight={1}
                sx={{ color: "white", minWidth: 24, textAlign: "center" }}
              >
                {expanded === index ? "−" : "+"}
              </Typography>
            }
            sx={{
              paddingX: 0,
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
              minHeight: 76,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                // fontSize: "1.125rem",
                letterSpacing: "0.01em",
                 fontSize: {
                    xs: "0.9rem",
                    sm: "1.1rem",
                    md: "1.5rem",
                  },
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 0, paddingTop: 0, pb: 2 }}>
            <Typography
            // className="gray-txt"
              variant="h6"
              fontWeight={100}
              sx={{
                lineHeight: 1.6,
                 fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.3rem",
                  },
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
