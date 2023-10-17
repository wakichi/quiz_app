import React from "react";
import ReactDOM from "react-dom/client";
import QuizApp from "./QuizApp";
import Login from "./Login";
import Signup from "./Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

export const App: React.VFC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<QuizApp />} />
          <Route path="login/:id" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
