import axios from "axios";
import React from "react";
import AnswerButton from "./AnswerButton"
import{dataType, postDataType} from "./types"
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// quizデータのjsonを受け取って、問題・答え・解答ボタンの表示を行う。
//削除ボタンの追加

const endpoint = "http://localhost:8000/api/quiz/"

const QuizBox = (props:{data:postDataType, id:number,delFunc:(id:number)=>void})=>{
    const deleteHandle = (id:number)=>{
        const endpoint_id =endpoint +id.toString()+"/"
        axios.delete(endpoint_id).then(()=>props.delFunc(id))

    }
    return (
        <div className="quizbox">
            <div className="quiz">
                {props.data.problem}
            </div>
            <AnswerButton correctanswer={true}/>
            {/* <button onClick={()=>deleteHandle(props.id)}>delete</button> */}
            <IconButton type="button" onClick={()=>deleteHandle(props.id)}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}
export default QuizBox