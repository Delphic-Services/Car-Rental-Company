import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const useStyle = makeStyles((theme) => ({
  wrp7: {
    padding:"3rem 0",
    "& img":{
      width:"100%"
    },
  },
  bag8: {
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
      margin: "0 0 25px",
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
    },
    "& button": {
      padding: "17px 24px",
      fontFamily: "rubik,Sans-serif",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "-.36px",
      borderStyle: "none",
      borderRadius: "3px 3px 3px 3px",
      boxShadow: "0 10px 15px 0 rgb(255 83 48 / 35%)",
    },
  },
  bag4: {
    "& button": {
      color: "#fff",
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: "bold",
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
      marginTop:"2rem",
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
  bag9:{
    width: "72%", margin: "0 auto",
    // marginBottom:"2rem"
  },
  bag10:{
    display: "flex", alignItems: "center", gap: "2rem",
    marginBottom:"3rem"
  },
  bag11:{
      "& h6":{
        margin: "0 0 10px",
        padding: "0",
        color: "#010103",
        fontFamily: "poppins,Sans-serif",
        fontSize: "24px",
        fontWeight: 600,
        textTransform: "capitalize",
        lineHeight: "35px",
        letterSpacing: "-.72px"
      },
      "& p":{
        color: "#817f91",
        fontFamily: "rubik,Sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "26px",
        letterSpacing: "-.24px"
      }
  },
}));

const Truckvalued = () => {
  const classes = useStyle();
  return (
    <>
     <motion.div
            whileInView={{ opacity: 1 }}
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            // className={`app__profile-item `}
            // className={classes.wrp7}
          >
      <Box className={classes.wrp7}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <img
                src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/display_car_image-1024x449.png"
                loading="lazy"
                alt="" width="100%"
              />
            </Grid>
            <Grid item md={6}>
              <Box className={classes.bag8}>
                <Typography variant="h6">Why Choose Us</Typography>
                <Typography variant="h3">
                  Best valued deals you will ever find
                </Typography>
                <p>
                  Thrown shy denote ten ladies though ask saw. Or by to he going
                  think order event music. Incommode so intention defective at
                  convinced. Led income months itself and houses you.
                </p>
                <Box className={classes.bag4}>
                  <Button variant="contained" disableRipple>
                  Find Deals <KeyboardArrowRightIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>


            <Grid item md={6}>
              <Box className={classes.bag9}>
                  <Box className={classes.bag10}>
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/drive.png" alt="" />
                     <Box className={classes.bag11}>
                     <Typography variant="h6" >Cross Country Drive</Typography>
                      <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                     </Box>
                  </Box>
                  <Box className={classes.bag10}>
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/drive.png" alt="" />
                     <Box className={classes.bag11}>
                     <Typography variant="h6" >All Inclusive Pricing</Typography>
                      <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had,</p>
                     </Box>
                  </Box>
                  <Box className={classes.bag10}>
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/charge.png" alt="" />
                     <Box className={classes.bag11}>
                     <Typography variant="h6" >No Hidden Charges</Typography>
                      <p>Under folly balls death own point now men. Match way these she avoid see. She whose drift their fat off.

</p>
                     </Box>
                  </Box>
                 
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
      </motion.div>
    </>
  );
};

export default Truckvalued;
