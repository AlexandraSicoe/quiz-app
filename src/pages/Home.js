import React from "react";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const homePage = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "black",
          paddingTop: "250px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="colum"
        >
          <div className="text-center">
            <Typography
              level="h1"
              style={{ color: "#00ef81", fontFamily: "Bacasime Antique" }}
            >
              Welcome to the Quiz Game!
            </Typography>
            <Typography
              level="h3"
              className="text-sm md:text-base"
              style={{
                fontFamily: "Bacasime Antique",
                color: "white",
                marginTop: "20px",
              }}
            >
              Are you ready to test your knowledge?
            </Typography>
          </div>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <Typography
              level="h4"
              style={{
                color: "#00ef81",
                marginTop: "50px",
                fontFamily: "Bacasime Antique",
              }}
            >
              Pick your favourite!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "25px" }}
        >
          <Button
            style={{
              marginRight: "20px",
              fontFamily: "Bacasime Antique",
              fontSize: "20px",
            }}
          >
            Coffee
          </Button>
          <Button style={{ fontFamily: "Bacasime Antique", fontSize: "20px" }}>
            Dogs
          </Button>
          <Button
            style={{
              marginLeft: "20px",
              fontFamily: "Bacasime Antique",
              fontSize: "20px",
            }}
          >
            Cats
          </Button>
        </Grid>
      </div>
    </>
  );
};
export default homePage;
