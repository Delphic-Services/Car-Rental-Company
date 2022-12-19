import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  wrp4: {
    padding: "9rem 0",
  },
  bag4: {
    textAlign: "center",
    "& h6": {
      color: "#010103",
      fontFamily: "rubik,Sans-serif",
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "27px",
      letterSpacing: "-.66px",
      margin: "0",
    },
    "& h2":{
        color: "#010103",
        margin: "0 0 10px",
        fontFamily: "poppins,Sans-serif",
        fontSize: "44px",
        fontWeight: 700,
        lineHeight: "52px",
        letterSpacing: "-1.32px"
    },
    "& p":{
        color: "#817f91",
        fontFamily: "rubik,Sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "25px",
        letterSpacing: "-.24px",
        marginBottom: " 10px",
        width: "40%", margin: "0 auto"
    }
  },
}));
const VehicleModels = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrp4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box className={classes.bag4}>
                <Typography variant="h6">Vehicle Models</Typography>
                <Typography variant="h2">Our rental fleet</Typography>
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

export default VehicleModels;
