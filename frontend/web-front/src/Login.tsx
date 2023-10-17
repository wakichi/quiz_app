import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

export const Login: React.VFC = () => {
  let { id } = useParams();
  console.log("params is", id);
  return <>Login your params is {id}</>;
};
export default Login;
