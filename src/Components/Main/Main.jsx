import React from "react";
import "./Mian.css";
// import Left from "../Left/Left";
// import Right from "../Right/Right";
import Sidebar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
const Main = () => {
  return (
    <div className="main_div">
      <div className="main_sub_div">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Main;
