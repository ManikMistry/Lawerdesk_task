import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Main from "./Components/Main/Main";
import "./styles.css";
import TopNavBar from "./Components/NavBar/TopNavBar";
import QuestionPage from "./Components/QuestionPage/QuestionPage";
import CaseFlow from "./Components/CaseFlow/CaseFlow";
const App = () => {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/questions" element={<QuestionPage />} />
            <Route path="/caseflow" element={<CaseFlow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
