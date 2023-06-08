import React from "react";
// quizデータのjsonを受け取って、問題・答え・解答ボタンの表示を行う。


const AnswerButton:React.FC<{correctanswer:boolean}> = ({correctanswer})=>{
    const handleClick=(useranswer:boolean) =>{
        if (correctanswer == useranswer){
            console.log("correct!")
        }
        else{
            console.log("uncorrect!")
        }
    }
    return (
        <div className="Buttons">
            <button className="answerButton" onClick={()=>handleClick(true)}>yes</button>
            <button className="answerButton" onClick={()=>handleClick(false)}>no</button>
        </div>
    )
}
export default AnswerButton