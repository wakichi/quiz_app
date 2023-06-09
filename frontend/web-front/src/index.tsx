import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizBox from './QuizBox';
import {dataType, postDataType, DataListType} from "./types"
// import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import{Button} from "@mui/material"
import SampleForm from "./SampleForm";
import TextField from '@mui/material/TextField';

const endpoint = "http://localhost:8000/api/quiz/"



export default function App(){
  const [data, setData] = React.useState<DataListType>({});
  const addData=(id:number, content:postDataType)=>{
    // console.log([...data, newData])
    setData((prevDatas)=>{return {...prevDatas, [id]:content}})
  }

  const deleteData=(id:number)=>{

  }

  React.useEffect(() => {
    axios.get(endpoint).then((response)=>{
      for (let d of response["data"]){
        const id:number = d.id;
        const content:postDataType = (({id, ...rest})=>rest)(d)
        addData(id, content)
      }
      // setdata(data2list(response["data"]))
      // console.log(typeof(response.data[0]["problem"]))
    })
  },[]) 

  return(
    <div>
      <Header />
      <h1>QuIz</h1>
      <ProblemList datas={data} />
    </div>
  )
}

const Logfunc=(props:{datas:DataListType})=>{
  console.log(props.datas)
  return(<div></div>)
}

const ProblemList =(props:{datas:DataListType})=>{
  const list = []
  for (const key in props.datas){
    list.push(<QuizBox data={props.datas[key]} id={parseInt(key)}/>)
  }
  // const quizComponents = props.datas.map(data=><QuizBox props={data}/>)
  return(
    <div>
      {list}
    </div>
  )
}

const Counter = ()=>{
  const[value, setValue] = React.useState(0);
  const increment = () => setValue(prev => prev+1);
  const decrement = () => setValue(prev=> prev-1);;
  return (
    <div>
      {value}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
};


// 問題の追加フォームの作成
const QuizForm = (props:{quiz:postDataType, addData:(d:dataType)=>void})=>{
  //thenでAppのリストを更新（stateに新規objectを追加）
  const formClickHandler = (quiz:postDataType, addData2:(d:dataType)=>void)=>{
    axios.post(endpoint, quiz)
    .then((response)=>{addData2(response.data);})
  }
  return(
  <div>
    <Button variant="contained" onClick={()=>{formClickHandler(props.quiz, props.addData)}}> Submit</Button>
  </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals