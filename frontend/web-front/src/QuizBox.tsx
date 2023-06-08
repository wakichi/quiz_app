import React from "react";
import AnswerButton from "./AnswerButton"
import{dataType} from "./types"
// quizデータのjsonを受け取って、問題・答え・解答ボタンの表示を行う。


const QuizBox:React.FC<{props:dataType}> = ({props})=>{
    console.log(props)
    return (
        <div className="quizbox">
            <div className="quiz">
                {props.problem}
            </div>
            <AnswerButton correctanswer={true}/>
        </div>
    )
}
export default QuizBox