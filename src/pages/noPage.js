import React from "react";
import { Grid } from "@mui/joy";

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
      </Grid>
    </div>
  );
};

export default NoPage;
