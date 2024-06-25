// MainContent.js
import React, { useState } from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <div className="main_content">
      <div className="header">
        <h2>
          Get Complete Info About Any Case from AI-Driven Research Assistance
        </h2>
      </div>
      <div className="search_bar">
        <input
          type="text"
          placeholder="Ex: Land dispute, Mumbai, recent judgments."
        />
      </div>
      <div className="file_upload_area">
        <label className="file_upload_label">
          Drag and drop here or click to upload a file
        </label>
        <div className="uploaded_files">
          <div className="uploaded_file">Case document.pdf</div>
          <div className="uploaded_file">Case document.docx</div>
          <div className="uploaded_file">Case document.docx</div>
        </div>
      </div>
      <Link to="/questions" className="start-button-container">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default MainContent;

/**
 * 
 * <div className="main-content">
      <div className="upload-area">
        <h2>
          Get Complete info about any case from AI-driven research assistance
        </h2>
        <input
          type="text"
          placeholder="Ex : Land dispute, Mumbai, recent judgments."
        />
        <div className="file-upload">
          <input type="file" multiple onChange={handleFileUpload} />
          <div className="uploaded-files">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="uploaded-file">
                {file.name}
              </div>
            ))}
          </div>
        </div>
        <button>Start</button>
      </div>
    </div>
 */
