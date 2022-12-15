import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const useStyle = makeStyles((theme) => ({
  wrp9: {
    padding: "2rem 0 4rem",
  },
  bag11: {
    textAlign: "center",
    margin: "2rem 0",
    "& h6": {
      color: "#010103",
      fontFamily: "rubik,Sans-serif",
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "27px",
      letterSpacing: "-.66px",
    },
    "& h3": {
      color: "#010103",
      margin: "0 0 30px",
      fontFamily: "poppins,Sans-serif",
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: "52px",
      letterSpacing: "-1.32px",
    },
    "& p": {
      color: "#817f91",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "25px",
      letterSpacing: "-.24px",
      width:"50%",
      margin:"0 auto",
    },
  },
  bag13: {
    padding: "2rem",
    margin: "0 1rem",
    "& p": {
      fontFamily: "poppins,Sans-serif",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "36px",
      letterSpacing: "-.48px",
    },
  },
  bag12: {
    width: "70%",
    margin: "1rem auto",
    "& h6": {},
    "& p": {},
  },
}));
const Testimonial = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp9}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box className={classes.bag11}>
                <Typography variant="h6">FAQ</Typography>
                <Typography variant="h3">Frequently Asked Questions</Typography>
                <p>
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest.
                </p>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6>1. How do I find the best car rental deals?</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Use securing confined his shutters. Delightful as he it
                      acceptance an solicitude discretion reasonably. Carriage
                      we husbands advanced an perceive greatest. Totally dearest
                      expense on demesne ye he. Curiosity excellent commanded in
                      me. Unpleasing impression themselves to at assistance
                      acceptance my or.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box className={classes.bag12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6>2. How do I find such low rental car prices?</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Use securing confined his shutters. Delightful as he it
                      acceptance an solicitude discretion reasonably. Carriage
                      we husbands advanced an perceive greatest. Totally dearest
                      expense on demesne ye he. Curiosity excellent commanded in
                      me. Unpleasing impression themselves to at assistance
                      acceptance my or.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box className={classes.bag12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6>3. How do I find such low rental car prices?</h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Use securing confined his shutters. Delightful as he it
                      acceptance an solicitude discretion reasonably. Carriage
                      we husbands advanced an perceive greatest. Totally dearest
                      expense on demesne ye he. Curiosity excellent commanded in
                      me. Unpleasing impression themselves to at assistance
                      acceptance my or.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Testimonial;
