import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { dataType, postDataType, DataListType } from "./types";
import QuizApp from "./QuizApp";
import Header from "./Header";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Button } from "@mui/material";
import CardListSample from "./CardListSample";
import App from "./App";

const endpoint = "/api/quiz/";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
