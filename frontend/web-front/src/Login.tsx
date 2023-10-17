import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

export const Login: React.VFC = () => {
  let { p } = useParams();
  console.log("params is", p);
  return <>Login your params is {p}</>;
};
export default Login;
