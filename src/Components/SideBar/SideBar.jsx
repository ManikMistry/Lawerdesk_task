import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Recent Studies</h3>
      <ul>
        <li className="completed">
          <strong>"Dog Bite Complaint"</strong>
          <div className="li_internal">2 days ago</div>
        </li>
        <li className="completed">
          <strong>"The Cyberbullying Conspiracy"</strong>
          <div className="li_internal">2 days ago</div>
        </li>
        <li className="completed">
          <strong>"The Data Breach Dilemma"</strong>
          <div className="li_internal">2 days ago</div>
        </li>
        <li className="in-progress">
          <strong>"The Data Breach Dilemma"</strong>
          <div className="li_internal">2 days ago</div>
        </li>
        <li className="failed">
          <strong>"The Data Breach Dilemma"</strong>
          <div className="li_internal">2 days ago</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
