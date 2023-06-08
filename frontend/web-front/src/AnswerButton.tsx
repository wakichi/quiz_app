import React from "react";
import{Button} from "@mui/material"
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
            <Button variant="contained" className="answerButton yes" onClick={()=>handleClick(true)} color="success"> yes</Button>
            <Button variant="contained" className="answerButton no" onClick={()=>handleClick(false)}> no</Button>
        </div>
    )
}
export default AnswerButton