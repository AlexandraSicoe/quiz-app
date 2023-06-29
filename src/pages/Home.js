import React from "react";
import Grid from "@mui/joy/Grid";

const homePage = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Quiz Game!</h1>
        <p>Are you ready to test your knowledge?</p>
      </div>

      <div className="container">
        <h2>Pick your poison!</h2>
        <button>Coffee</button>
        <button>Dogs</button>
        <button>Cats</button>
      </div>
    </>
  );
};
export default homePage;
