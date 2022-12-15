import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyle = makeStyles((theme) => ({
  wrp6: {backgroundColor:"#2d2d2d",marginBottom:"2rem" },
  wrp5: {
    padding: "5rem 0",
    backgroundImage: `url(https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/cta_car_action.png)`,
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    opacity: 0.7,
    transition: "background .3s,border-radius .3s,opacity .3s",
    // backgroundColor: "rgba(45 45 45/1.9)",
    "& h2":{
        color: "#fff",
        margin: "0 0 10px",
        fontFamily: "poppins,Sans-serif",
        fontSize: "52px",
        fontWeight: 700,
        lineHeight: "62px",
        letterSpacing: "-1.36px"
    },
    "& p":{
        color: "#fff",
        fontFamily: "rubik,Sans-serif",
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: "28px",
        letterSpacing: "-.72px"
    }
  },
  bag4: {
    display: "flex",
  alignItems: "center",
  justifyContent: "end",
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

const SupportRide = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp6}>
        <Box className={classes.wrp5}>
          <Container>
            <Grid container>
              <Grid item md={8}>
                <Box>
                  <Typography variant="h2">
                    Save big with our cheap car rental!
                  </Typography>
                  <p>Top Airports. Local Suppliers. 24/7 Support.</p>
                </Box>
              </Grid>
              <Grid item md={4} alignItems="center" display="flex" justifyContent="end">
                <Box className={classes.bag4}>
                  <Button variant="contained" disableRipple>
                    Book Ride <CheckCircleIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SupportRide;