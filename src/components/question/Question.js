import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

const Question = ({
  question,
  options,
  answer,
  questionCount,
  index,
  setQuestionCount,
  score,
  setScore,
}) => {
  const scoreAndNext = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText == answer) {
      setScore(score + 1);
    }
    setQuestionCount(questionCount + 1);
  };
  return (
    <div
      className="container-fluid "
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: questionCount == index ? "block" : "none",
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
          {question}
        </Typography>
        <Typography
          level="h4"
          style={{
            color: "white",
            marginTop: "50px",
            fontFamily: "Bacasime Antique",
            fontSize: "30px",
          }}
        >
          <Grid
            container
            justifyContent="
            center"
            alignItems="center"
            direction="column"
          >
            <div className="flex">
              {options.map((option, index) => {
                if (index < 2)
                  return (
                    <div key={index}>
                      <Button
                        style={{
                          fontFamily: "Bacasime Antique",
                          fontSize: "25px",
                          color: "black",
                          margin: "10px",
                          width: "120px",
                        }}
                        onClick={(e) => {
                          scoreAndNext(e);
                        }}
                      >
                        {option}
                      </Button>
                    </div>
                  );
              })}
            </div>
            <div className="flex ">
              {options.map((option, index) => {
                if (index >= 2)
                  return (
                    <div key={index}>
                      <Button
                        style={{
                          fontFamily: "Bacasime Antique",
                          fontSize: "25px",
                          color: "black",
                          margin: "10px",
                          width: "120px",
                        }}
                        onClick={(e) => {
                          scoreAndNext(e);
                        }}
                      >
                        {option}
                      </Button>
                    </div>
                  );
              })}
            </div>
          </Grid>
        </Typography>
      </Grid>
    </div>
  );
};

export default Question;
