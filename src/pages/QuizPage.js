import React, { useEffect, useState } from "react";
import Grid from "@mui/joy/Grid";
import useQuery from "../helpers/useQuery";
const QuizPage = () => {
  const query = useQuery();
  console.log(query.get("cat"));
  const [quiz, setQuiz] = useState("0123");
  useEffect(() => {
    console.log(quiz);
  }, [quiz]);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container">
        <p></p>
        <button
          onClick={() => {
            setQuiz("456");
          }}
        >
          click me
        </button>
      </div>
    </div>
  );
};
export default QuizPage;
