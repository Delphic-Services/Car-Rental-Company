import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  SliderTrack,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  wrp11: { padding: "2rem 0" },
  bag11: {
    "& h4": {
      color: "#010103",
      // margin: "0 0 10px",
      fontSize: "24px",
      fontWeight: 400,
    },
    "& span": {
      color: "#010103",
      fontWeight: 700,
      //   textTransform: "uppercase"
    },
    "& h6": {
      color: "#817f91",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "26px",
      margin: "0 20px 17px 0",
    },
    "& p": { color: "#010103", paddingLeft: "14px", margin: " 0" },
  },
  bag12: {
    "& h6": {
      color: "#010103",
      margin: "0 0 10px",
      fontSize: "24px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    "& span": {
      color: "#817f91",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    "& p": {
      color: "#010103",
      margin: "0",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "36px",
    },
    "& input":{padding: "1rem 15px", margin: "1rem 0 0"},
    "& ul": { listStyle: "none", padding: "0" },
    "& ul li": {
      margin: "10px 0",
    },
    "& ul li a": {
      color: "#000",
      textDecoration: "none",
    },
  },
  bag4: {
    marginTop: "1rem",
    "& button": {
      color: "#fff",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: "700",
      textTransform: "capitalize",
      lineHeight: "19px",
      letterSpacing: "-.32px",
      borderRadius: "3px 3px 3px 3px",
      boxShadow: "0 10px 15px 0 rgb(255 83 48 / 35%)",
      padding: "18px 26px",
      backgroundImage: "linear-gradient(to right,#ff4c30,#ff6830,#fff,#f3806f)",
      backgroundSize: "300% 100%",
      OTransition: "all .4s ease-in-out",
      WebkitTransition: "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
    },
    "& button:hover": {
      backgroundImage: "linear-gradient(to right,#f0561d,#fff,#ff6830,#f0561d)",
      backgroundPosition: "100% 0",
      OTransition: "all .4s ease-in-out",
      WebkitTransition: "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
    },
    "& svg": {
      marginLeft: "1rem",
    },
  },
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp11}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Box className={classes.bag11}>
                <Stack flexDirection="row" alignItems="center" gap="1rem">
                  <Typography variant="h4">CAR </Typography>
                  <span>Rental</span>
                </Stack>
                <h6>
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion.
                </h6>
                <Stack flexDirection="row" alignItems="center">
                  <CallIcon />
                  <p>(123) 498-4600</p>
                </Stack>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  margin="1rem 0 0"
                >
                  <EmailIcon /> <p>example@carrental.com</p>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className={classes.bag12}>
                <h6>Our Company</h6>
                <ul>
                  <li>
                    <a href="">New York</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                  <li>
                    <a href="">Mobile</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Work</a>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className={classes.bag12}>
                <h6>WORKING HOURS</h6>
                <Stack flexDirection="row" gap="1rem">
                  <span>Mon - Fri:</span> <p>09:00AM - 09:00PM</p>
                </Stack>
                <Stack flexDirection="row" gap="1rem">
                  <span>Sat:</span> <p>09:00AM - 07:00PM</p>
                </Stack>
                <Stack flexDirection="row" gap="1rem">
                  <span>Sun:</span> <p>Closed</p>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className={classes.bag12}>
                <h6>SUBSCRIPTION</h6>
                <p
                  style={{
                    color: "#817f91",
                    fontFamily: "rubik,Sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "26px",
                    margin: "0",
                  }}
                >
                  Subscribe your Email address for latest news & updates.
                </p>
                <TextField sx={{}} id="" label="" placeholder="Enter Email Address" />
                <Box className={classes.bag4}>
                  <Button variant="contained" disableRipple>
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
