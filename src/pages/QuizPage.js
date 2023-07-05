import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Question from "../components/question/Question";
import cats from "../data/cats.json";
import coffee from "../data/coffee.json";
import dogs from "../data/dogs.json";
import useQuery from "../helpers/useQuery";

const QuizPage = () => {
  const query = useQuery(); // ne ajuta sa preluam date din URL/ din query params din URL
  const navigate = useNavigate(); //ne ofera in o metosa sa schimbam URL
  const [quizData, setQuizData] = useState(null); // set de constate, o var=quizData, metoda=setQuizData care repr. un state si setterul unui state deoarece iau o valoare bazata pe useState care vine din React; quizData=state ul, seQuizdata=metoda care schimba state ul = setterul

  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    //useEffect=hook, ma lasa sa execut code bazat pe un sir de dependinte pe care le definim in arrayul de dependinte care este ultimul parametru dat lui useEffect aka []
    if (query.get("category") === "cat") {
      setQuizData(cats);
    } else if (query.get("category") === "dog") {
      setQuizData(dogs);
    } else if (query.get("category") === "coffee") {
      setQuizData(coffee);
    } else {
      navigate("/404");
    }
  }, []); // fiindca e gol == functia de callback care este primul parametru se va executa cand se randeaza componenta in pagina aka once.

  useEffect(() => {
    console.log(quizData);
  }, [quizData]);
  // fiindca array ul de dependinte nu este gol, functia de callback se va executa cand se schimba quizData

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid>
        {quizData?.questions.map((question, index) => {
          return (
            <Question
              questionCount={questionCount}
              index={index}
              question={question.question}
              options={question.options}
              answer={question.answer}
              setQuestionCount={setQuestionCount}
              score={score}
              setScore={setScore}
            />
          );
        })}

        {quizData?.questions.length == questionCount && (
          <div
            className="container-fluid "
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
              <Typography
                level="h1"
                style={{ color: "#00ef81", fontFamily: "Bacasime Antique" }}
              >
                Your score is:
                {score}
              </Typography>
              <Typography
                level="h2"
                style={{ color: "#00ef81", fontFamily: "Bacasime Antique" }}
              >
                {score >= 3
                  ? "Congratulations, you passed!"
                  : "Better luck next time!"}
              </Typography>
              <Link to={"/"}>
                <Button
                  style={{
                    fontFamily: "Bacasime Antique",
                    fontSize: "20px",
                    color: "black",
                    margin: "10px",
                  }}
                >
                  Reset
                </Button>
              </Link>
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
};
export default QuizPage;
