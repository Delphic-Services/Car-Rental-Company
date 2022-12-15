import React from "react";
import Header from "../../Header/Header";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TripNow from "./TripNow";
import VehicleModels from "./VehicleModels";
import Aboutus from "./Aboutus";
import SupportRide from "./SupportRide";
import Truckvalued from "./Truckvalued";
import Testimonial from "./Testimonial";
import Faq from "./Faq"
import Footer from "../../Footer/Footer";
const useStyle = makeStyles((theme) => ({
  wrp2: {
    // backgroundImage: `url(${"https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_image.png"})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center bottom",
    // // "backgroundAttachment": "fixed",
    // WebkitFontSmoothing: "antialiased",
    padding: "4rem 0",
  },
  bag3: {
    "& h6": {
      color: "#010103",
      fontSize: "22px",
      fontWeight: "600",
      lineHeight: "27px",
      letterSpacing: "-.66px",
    },
    "& h1": {
      color: "#010103",
      fontFamily: "poppins,Sans-serif",
      fontSize: "52px",
      fontWeight: "700",
      lineHeight: "64px",
      letterSpacing: "-1.56px",
    },
    "& span": {
      color: "#ff4d30 !important",
    },
    "& p": {
      color: "#817f91",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      margin: "15px 0",
      letterSpacing: "-.24px",
    },
  },
  bag4: {
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
  bag5: {
    "& button": {
      color: "#fff",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: "700",
      textTransform: "capitalize",
      lineHeight: "19px",
      letterSpacing: "-.32px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "transparent",
      borderRadius: "3px 3px 3px 3px",
      backgroundColor: "#161616",
      boxShadow: "0 10px 15px 0 rgb(158 158 158 / 7%)",
      padding: "17px 25px",
    },
    "& button:hover": {
      color: "#ff4c30",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#ff4c30",
      background: "transparent",
    },
    "& svg": {
      marginLeft: "1rem",
    },
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.wrp2}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Box className={classes.bag3}>
                <h6>Plan your trip now</h6>
                <Typography variant="h1">
                  Save <span>big</span> with our car rental
                </Typography>
                <p>
                  To contribute to positive change and achieve our
                  sustainability goals with many extraordinary
                </p>
              </Box>
              <Stack flexDirection="row" gap="1rem" alignItems="center">
                <Box className={classes.bag4}>
                  <Button variant="contained" disableRipple>
                    Book Ride <CheckCircleIcon />
                  </Button>
                </Box>
                <Box className={classes.bag5}>
                  <Button variant="contained" disableRipple>
                    Learn More <KeyboardArrowRightIcon />
                  </Button>
                </Box>
              </Stack>
            </Grid>

            <Grid item md={7}>
              <img
                src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png"
                alt=""
                width="100%"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <TripNow/>
      <VehicleModels/>
      <Aboutus/>
      <SupportRide/>
      <Truckvalued/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default Home;