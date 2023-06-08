import axios from "axios";
import React from "react";
import AnswerButton from "./AnswerButton"
import{dataType} from "./types"
// quizデータのjsonを受け取って、問題・答え・解答ボタンの表示を行う。
//削除ボタンの追加

const endpoint = "http://localhost:8000/api/quiz/"

const QuizBox:React.FC<{props:dataType}> = ({props})=>{
    console.log(props)
    const deleteHandle = (id:number)=>{
        const endpoint_id =endpoint +id.toString()+"/"
        axios.delete(endpoint_id).then((response)=>console.log(response))
    }
    return (
        <div className="quizbox">
            <div className="quiz">
                {props.problem}
            </div>
            <AnswerButton correctanswer={true}/>
            <button onClick={()=>deleteHandle(props.id)}>delete</button>
        </div>
    )
}
export default QuizBox