import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizBox from './QuizBox';
import {dataType} from "./types"
// import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

const endpoint = "http://localhost:8000/api/quiz/"



export default function App(){
  const initialData={
    problem:"dog",
    answer:true,
    id:0
  }
  const [data, setData] = React.useState<dataType[]>([]);
  const addData=(d:dataType)=>{
    // console.log([...data, newData])
    setData((prevDatas)=>{return [...prevDatas, d]})
    console.log(data)
  }
  React.useEffect(() => {
    axios.get(endpoint).then((response)=>{
      for (let d of response["data"]){
        console.log(d)
        addData(d)
      }
      // setdata(data2list(response["data"]))
      // console.log(typeof(response.data[0]["problem"]))
    })
  },[]) 

  return(
    <div>
      <h1>test</h1>
      <QuizForm quiz={'sampleQ'} />
      <Counter />
      <Block quiz={"hoge"} answer={true}/>
      <ProblemList datas={data} />
      {/* <button onClick={addData(initialData)}>Add</button> */}
      <ul>
        {/* {response2list(data)} */}
      </ul>
    </div>
  )
}
const data2list = (data:any)=>{
  const list =[]
  for(const d of data){
    list.push(d["problem"])
  }
  return list
}

const response2list = (data:any)=>{
  const list = []
  for (const dt of data){
    list.push(<li>{dt}</li>)
  }
  console.log(list)
  return(
    <ul>
      {list}
    </ul>
  )
}

const ProblemList =(props:{datas:dataType[]})=>{
  const list = []
  for (const dt of props.datas){
    list.push(<QuizBox props={dt}/>)
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

// 問題、答え、解答ボタンをひとまとめにしたブロック
//todo: answer-button componentの作成
//todo: 
const Block = (props:{quiz:string, answer:boolean})=>{
  return(
    <div className='box'>
      quizs:{props.quiz}
      answer:{props.answer}
    </div>
  )
}

// 問題の追加フォームの作成
const QuizForm = (props:{quiz:string})=>{
  //thenでAppのリストを更新（stateに新規objectを追加）
  const samplePost = ()=>{
    axios.post(endpoint, {problem:props.quiz,answer:true})
    .then(response=>console.log(response.data))
  }
  return(
  <div>
    <button onClick={samplePost}>sample post</button>
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