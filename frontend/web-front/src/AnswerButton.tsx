import React from "react";
import { Button } from "@mui/material";
// quizデータのjsonを受け取って、問題・答え・解答ボタンの表示を行う。

const AnswerButton = (props: {
  answerHandler: (pushedAnswer: boolean) => void;
}) => {
  return (
    <div className="Buttons">
      <Button
        variant="contained"
        className="answerButton yes"
        onClick={() => props.answerHandler(true)}
        color="success"
      >
        {" "}
        yes
      </Button>
      <Button
        variant="contained"
        className="answerButton no"
        onClick={() => props.answerHandler(false)}
      >
        {" "}
        no
      </Button>
    </div>
  );
};
export default AnswerButton;
