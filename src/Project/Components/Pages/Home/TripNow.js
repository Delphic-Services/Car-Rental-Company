import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  wrp3: {
    padding: "7rem 0",
    width: "100%",
  },
  bag3: {
    textAlign: "center",
    "& h6": {
      color: "#010103",
      fontFamily: "rubik,Sans-serif",
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: "27px",
      letterSpacing: "-.66px",
    },
    "& h2": {
      color: "#010103",
      margin: "0 0 50px",
      fontFamily: "poppins,Sans-serif",
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: "60px",
      letterSpacing: "-1.32px",
    },
  },
  bag4: {
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
    "& h4": {
      margin: "0 0 10px",
      padding: "0",
      color: "#010103",
      fontFamily: "poppins,Sans-serif",
      fontSize: "26px",
      fontWeight: 700,
      textTransform: "capitalize",
      letterSpacing: "-.78px",
    },
    "& p": {
        color: "#817f91",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "23px",
        letterSpacing: "-.24px",
        margin: "0 auto",
        width: "65%"
    },
  },
}));
const TripNow = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp3}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box className={classes.bag3}>
                <Typography variant="h6">Plan your trip now</Typography>
                <Typography variant="h2">Quick & easy car rental</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag4}>
                <img
                  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/iconbox-image_01.png"
                  alt=""
                />
                <Typography variant="h4">Select Car </Typography>
                <p>
                  To contribute to positive change and achieve our
                  sustainability goals with many extraordinary{" "}
                </p>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag4}>
                <img
                  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/iconbox-image_02.png"
                  alt=""
                />
                <Typography variant="h4">Contact Operator </Typography>
                <p>
                  To contribute to positive change and achieve our
                  sustainability goals with many extraordinary
                </p>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag4}>
                <img
                  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/iconbox-image_03.png"
                  alt=""
                />
                <Typography variant="h4">Let's Drive </Typography>
                <p>
                  To contribute to positive change and achieve our
                  sustainability goals with many extraordinary
                </p>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TripNow;
