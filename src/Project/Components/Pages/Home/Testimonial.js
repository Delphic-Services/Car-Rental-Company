import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
    display: "flex",
    gap: "2rem",
    alignItems: "center",

    "& h6": {
      color: "#010103",
      fontFamily: "poppins,Sans-serif",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "-.36px",
      marginBottom: "0",
    },
    "& span": {
      fontFamily: "rubik,Sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "-.24px",
    },
    "& svg":{
        color:"#ff4c30",
        fontSize:"6rem",
        margin:"0 auto"
    },
  },
}));
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp9}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box className={classes.bag11}>
                <Typography variant="h6">Reviewed by People</Typography>
                <Typography variant="h3">Clients' Testimonials</Typography>
                <p>
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed.
                </p>
              </Box>
            </Grid>
           
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
        <Grid item md={12}>
              <Box>
                <Slider {...settings}>
                  <div>
                    <Box className={classes.bag13}>
                      <p>
                        "The rem value is the same as the em value displayed
                        above. Both units are scalable."
                      </p>
                      <Box className={classes.bag12}>
                        <img
                          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/user.png"
                          alt=""
                        />
                        <Box>
                          <Typography variant="h6">Kimberly Garcia</Typography>
                          <span>Boston Area</span>
                        </Box>
                        <FormatQuoteIcon />
                      </Box>
                    </Box>
                  </div>
                  <div>
                    <Box className={classes.bag13}>
                      <p>
                        "The rem value is the same as the em value displayed
                        above. Both units are scalable."
                      </p>
                      <Box className={classes.bag12}>
                        <img
                          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/user.png"
                          alt=""
                        />
                        <Box>
                          <Typography variant="h6">Kimberly Garcia</Typography>
                          <span>Boston Area</span>
                        </Box>
                        <FormatQuoteIcon />
                      </Box>
                    </Box>
                  </div>
                  <div>
                    <Box className={classes.bag13}>
                      <p>
                        "The rem value is the same as the em value displayed
                        above. Both units are scalable."
                      </p>
                      <Box className={classes.bag12}>
                        <img
                          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/user.png"
                          alt=""
                        />
                        <Box>
                          <Typography variant="h6">Kimberly Garcia</Typography>
                          <span>Boston Area</span>
                        </Box>
                        <FormatQuoteIcon />
                      </Box>
                    </Box>
                  </div>
                  <div>
                    <Box className={classes.bag13}>
                      <p>
                        "The rem value is the same as the em value displayed
                        above. Both units are scalable."
                      </p>
                      <Box className={classes.bag12}>
                        <img
                          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/user.png"
                          alt=""
                        />
                        <Box>
                          <Typography variant="h6">Kimberly Garcia</Typography>
                          <span>Boston Area</span>
                        </Box>
                        <FormatQuoteIcon />
                      </Box>
                    </Box>
                  </div>
                  
                </Slider>
              </Box>
            </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Testimonial;
