import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import React from "react";
import { Link } from "react-router-dom";
import quizData from "../data/data.json";
const HomePage = () => {
  console.log(quizData);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        height="100%"
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
        <div>
          {quizData.map((quiz, index) => {
            return (
              <Link
                key={quiz.name + index}
                to={"/quiz-page?category=" + quiz.slug}
              >
                <Button
                  style={{
                    fontFamily: "Bacasime Antique",
                    fontSize: "20px",
                    color: "black",
                    margin: index === 1 ? "10px" : "0px", // index === 1 && "10px"
                  }}
                >
                  {quiz.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </Grid>
    </div>
  );
};
export default HomePage;
