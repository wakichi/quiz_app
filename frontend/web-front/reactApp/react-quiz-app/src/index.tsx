import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

const endpoint = "http://localhost:8000/api/quiz/"


export default function App(){
  const [data, setdata] = React.useState(["str"]);
  React.useEffect(() => {
    axios.get(endpoint).then((response)=>{
      setdata(data2list(response.data))
      // console.log(typeof(response.data[0]["problem"]))
    })
  },[]) 
  return(
    <div>
      <h1>test</h1>
      <ul>
        {response2list(data)}
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

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals