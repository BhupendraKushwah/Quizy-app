import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionBox = ({
  userId,
  setQuestion,
  question,
  setScore,
  score,
  name,
}) => {
  const [answer, setAnswer] = useState("");
  const [checkedOption, setCheckedOption] = useState(null);
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    const selectedOption = e.target.value;
    setAnswer(selectedOption);
    setCheckedOption(selectedOption);
  };
  const handleSubmit = () => {
    alert(`Your score is : ${score}`);
    navigate("/");
  };

  useEffect(() => {
    console.log("Component re-rendered");
    if (!name) {
      navigate("/");
    }
  });
  const handleNext = async () => {
    const UserAnswer = question.Correct == answer ? "True" : "false";
    setAnswer("");
    const url = "http://localhost:5000/quiz/submit";
    const response = await fetch(url, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId, answer: UserAnswer }),
    });
    const data = await response.json();
    setQuestion(data.randomQuestion);
    setCheckedOption(null);
    setAnswer("");
    console.log(data);
    if (data.UserScore) {
      setScore(data.UserScore.score);
    } else {
      setScore(data.score.score);
    }
  };

  return (
    <>
      <h1 style={{ padding: "0 20px" }}>hello {name}</h1>
      {question && (
        <div className="Question-Container">
          <span>Question: </span>
          <span>{question.Question}</span>
          <ul>
            {question.Option.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  onClick={handleRadioChange}
                  checked={checkedOption === option}
                />
                {option}
              </label>
            ))}
          </ul>
          <button className="CloseBtn" onClick={handleSubmit}>
            Close
          </button>
          <button className="SubmitBtn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default QuestionBox;
