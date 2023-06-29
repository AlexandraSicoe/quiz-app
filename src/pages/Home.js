import React from "react";
import Grid from "@mui/joy/Grid";
import Button from "../components/Button";
const homePage = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="colum"
      >
        <div className="text-center">
          <h1>Welcome to the Quiz Game!</h1>
          <p>Are you ready to test your knowledge?</p>
        </div>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="colum"
      >
        <h2>Pick your poison!</h2>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="colum"
        >
          <Button />
          <Button />
          <Button />
        </Grid>
      </Grid>
    </>
  );
};
export default homePage;
