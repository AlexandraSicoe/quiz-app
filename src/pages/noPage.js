import React from "react";
import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}
    >
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        height="100%"
      >
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            fontFamily: "Bacasime Antique",
          }}
        >
          Error 404.
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "30px",
            fontFamily: "Bacasime Antique",
          }}
        >
          We couldn't find this page.
        </p>
        <Link to={"/"}>
          <Button
            style={{
              fontFamily: "Bacasime Antique",
              fontSize: "20px",
              color: "black",
              margin: "10px",
            }}
          >
            Return to the Home Page
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default NoPage;
