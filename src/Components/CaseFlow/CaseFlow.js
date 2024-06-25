import React from "react";
import "../../styles/CaseFlow.css";
import { Link } from "react-router-dom";

const CaseFlow = () => {
  return (
    <div className="container1">
      <aside className="sidebar">
        <Link to="/">
          <button className="back-button">Back to home</button>
        </Link>
        <h2>Given information</h2>
        <div className="search-section">
          <p>Your search</p>
          <p>Habeas Corpus</p>
        </div>
        <div className="recents">
          <h3>Recents</h3>
          <div className="recent-item">
            <p className="case-status completed">Completed</p>
            <p className="case-name">The Cyberbullying Conspiracy</p>
            <p className="case-time">10 min</p>
          </div>
          <div className="recent-item">
            <p className="case-status in-progress">In progress</p>
            <p className="case-name">The Data Breach Dilemma</p>
            <p className="case-time">1 hour ago</p>
          </div>
          <div className="recent-item">
            <p className="case-status failed">Failed</p>
            <p className="case-name">The Green Tech Scandal</p>
            <p className="case-time">1 day ago</p>
          </div>
          <div className="recent-item">
            <p className="case-status completed">Completed</p>
            <p className="case-name">The Cyberbullying Conspiracy</p>
            <p className="case-time">2 days ago</p>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <h2>Case flow</h2>
        <p>Select the document for drafting</p>
        <div className="case-flow">
          <h3>Pre-litigation</h3>
          <div className="case-step">
            <input type="radio" name="case-step" id="legal-notice" />
            <label htmlFor="legal-notice">Legal Notice</label>
            <p>
              Notifies the opposing party of the dispute and demands resolution.
            </p>
          </div>
          <div className="case-step">
            <input type="radio" name="case-step" id="reply-legal-notice" />
            <label htmlFor="reply-legal-notice">Reply to Legal Notice</label>
            <p>Responds to a legal notice received from the opposing party.</p>
          </div>
          <h3>Litigation</h3>
          <div className="case-step">
            <input type="radio" name="case-step" id="plaint-complaint" />
            <label htmlFor="plaint-complaint">Plaint/Complaint</label>
            <p>
              Initiates the formal lawsuit, detailing the plaintiff's claims.
            </p>
          </div>
          <div className="case-step">
            <input type="radio" name="case-step" id="vakalatnama" />
            <label htmlFor="vakalatnama">Vakalatnama</label>
            <p>Authorizes a lawyer to represent the client in court.</p>
          </div>
          <div className="case-step">
            <input type="radio" name="case-step" id="written-statement" />
            <label htmlFor="written-statement">Written Statement/Answer</label>
            <p>The defendant's formal response to the plaint.</p>
          </div>
          <div className="case-step">
            <input type="radio" name="case-step" id="reply-written-statement" />
            <label htmlFor="reply-written-statement">
              Reply to Written Statement
            </label>
            <p>Addresses points raised in the defendant's written statement.</p>
          </div>
          <h3>Interlocutory Applications</h3>
          <div className="case-step">
            <input
              type="radio"
              name="case-step"
              id="application-temporary-injunction"
            />
            <label htmlFor="application-temporary-injunction">
              Application for Temporary Injunction
            </label>
            <p>Seeks immediate court intervention to preserve status quo.</p>
          </div>
          <div className="case-step">
            <input type="radio" name="case-step" id="counter-affidavit" />
            <label htmlFor="counter-affidavit">
              Counter-Affidavit to Opponent's Application
            </label>
            <p>
              Responds to interlocutory applications from the opposing party.
            </p>
          </div>
        </div>
      </main>
      <nav className="right-nav">
        <ul>
          <li className="nav-item">Start</li>
          <li className="nav-item active">Continue</li>
          <li className="nav-item">Analysis</li>
          <li className="nav-item">Additional Documents</li>
          <li className="nav-item">Relief</li>
          <li className="nav-item">Suggestions</li>
          <li className="nav-item">First Draft</li>
          <li className="nav-item">Q&A</li>
          <li className="nav-item">Final Draft</li>
        </ul>
        <button className="continue-button">Continue</button>
      </nav>
    </div>
  );
};

export default CaseFlow;
