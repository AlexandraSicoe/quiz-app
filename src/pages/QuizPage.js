import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cats from "../data/cats.json";
import coffee from "../data/coffee.json";
import dogs from "../data/dogs.json";
import useQuery from "../helpers/useQuery";
import { Grid } from "@mui/joy";

const QuizPage = () => {
  const query = useQuery(); // ne ajuta sa preluam date din URL/ din query params din URL
  const navigate = useNavigate(); //ne ofera in o metosa sa schimbam URL
  const [quizData, setQuizData] = useState(null); // set de constate, o var=quizData, metoda=setQuizData care repr. un state si setterul unui state deoarece iau o valoare bazata pe useState care vine din React; quizData=state ul, seQuizdata=metoda care schimba state ul = setterul
  useEffect(() => {
    //useEffect=hook, ma lasa sa execut code bazat pe un sir de dependinte pe care le definim in arrayul de dependinte care este ultimul parametru dat lui useEffect aka []
    if (query.get("category") == "cat") {
      setQuizData(cats);
    } else if (query.get("category") == "dog") {
      setQuizData(dogs);
    } else if (query.get("category") == "coffee") {
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
            <p key={index} style={{ color: "white" }}>
              {question.question}
            </p>
          );
        })}
      </Grid>
    </div>
  );
};
export default QuizPage;
