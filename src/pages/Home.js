import React from "react";
import Grid from "@mui/joy/Grid";
import Button from "../components/Button";
const homePage = () => {
  return (
    <>
      <div className="container  w-screen h-screen">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="colum"
        >
          <div className="text-center text-slate-500">
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
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="colum"
          >
            <h2>Pick your poison!</h2>

            <Button color="info" variant="solid" />
            <Button color="danger" variant="solid" />
            <Button color="success" variant="solid" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default homePage;
