import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CountUp, { useCountUp } from 'react-countup';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const useStyle = makeStyles((theme) => ({
  wrp5: {
    padding: "1rem 0 9rem",
    width: "100%",
  },
  bag5: {
    position: "relative",
    "& img": {
      width: "100%",
    },
  },
  bag6: {
    textAlign: "right",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display:"none"
    },
  },
  bag7: {
    position: "absolute",
    top: "-15px",
    right: "-42px",
    "& svg": {
      width: "119px",
      height: "118px",
      lineHeight: "110px",
      color: "#fff",
      backgroundColor: "#ff4c30",
      boxShadow: "0 10px 16px 0 rgb(255 83 48 / 35%)",
      borderRadius: "8px",
    },
  },
  bag8:{
    width: "80%", margin: "0 auto",
    "& h5":{
        color: "#010103",
        // fontFamily: "rubik,Sans-serif",
        fontSize: "22px",
        fontWeight: 500,
        lineHeight: "27px",
        letterSpacing: "-.66px"
    },
    "& h2":{
        color: "#010103",
        margin: "0 0 30px",
        fontFamily: "poppins,Sans-serif",
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: "52px",
        letterSpacing: "-1.32px"
    },
    "& p":{
        color: "#817f91",
        // fontFamily: "rubik,Sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "25px",
        letterSpacing: "-.24px",
        marginBottom:"2rem"
    }
  },
  bag10:{
    display:"flex",
    alignItems:"center",
    gap:"1rem",
    "& p":{
        color: "#817f91",
        margin: "0",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "18px",
        letterSpacing: "-.24px",
        width:"20%",
    },
    
  },
  bag9:{
    fontSize: "3rem", fontWeight: "bold"
  }
}));
const Aboutus = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Box className={classes.bag5}>
                <img
                  src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/about_image.jpg"
                  alt=""
                />
              </Box>
              <Box className={classes.bag6}>
                <Box className={classes.bag7}>
                  <PlayArrowIcon />
                </Box>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box className={classes.bag8}>
                <Typography variant="h5">About Company</Typography>
                <Typography variant="h2">
                  You start the engine and your adventure begins
                </Typography>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
             
              {/* <Stack flexDirection="row" justifyContent="space-evenly" > */}
                <Grid container>
                <Grid item md={4}>
                  <Box>
                    <img
                      src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/transportation.png"
                      alt=""
                    />
                    <Box className={classes.bag10}>
                    <CountUp end={27} className={classes.bag9}/>
                    <p>Car Types</p>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box>
                    <img
                      src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/car.png"
                      alt=""
                    />
                    <Box className={classes.bag10}>
                    <CountUp end={85} className={classes.bag9} />
                    <p>Rental Outlets</p>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box>
                    <img
                      src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/parking.png"
                      alt=""
                    />
                    <Box className={classes.bag10}>
                    <CountUp end={75} className={classes.bag9} />
                    <p>Repair Shop</p>
                    </Box>
                  </Box>
                </Grid>
                </Grid>
              {/* </Stack> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Aboutus;
