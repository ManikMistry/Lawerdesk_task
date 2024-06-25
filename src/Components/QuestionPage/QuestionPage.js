import React from "react";
import { Link } from "react-router-dom";
import "../../styles/QuestionPage.css";

const QuestionPage = () => {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <button className="back-button">Back to home</button>
        </Link>
        <h1>Case Details</h1>
        <nav>
          <a href="#">Acts & Laws</a>
          <a href="#">Judgement</a>
          <a href="#">Templates</a>
          <a href="#" className="active">
            Questions
          </a>
          <a href="#">Support</a>
        </nav>
      </header>
      <main>
        <aside>
          <h2>Given Information</h2>
          <p>Text Entered</p>
          <ul>
            <li>
              <Link to="/caseflow">Case document.pdf</Link>
            </li>
            <li>
              <Link to="/caseflow">Case document.pdf</Link>
            </li>
            <li>
              <Link to="/caseflow">Case document.pdf</Link>
            </li>
            <li>
              <Link to="/caseflow">Case document.pdf</Link>
            </li>
            <li>
              <Link to="/caseflow">Case document.pdf</Link>
            </li>
          </ul>
        </aside>
        <section className="questions">
          <div className="filter">
            <button className="active">By Petitioner</button>
            <button>By Respondent</button>
          </div>
          <div className="question-list">
            <div className="question">
              <strong>
                1. Was the dog on a leash or under the control of the owner at
                the time of the incident?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>
                This question aims to establish whether the owner was negligent
                in controlling the dog, which is crucial for proving liability.
              </p>
            </div>
            <div className="question">
              <strong>
                2. Did the dog show any signs of aggression or previous violent
                behavior before the incident?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>
                This question is important to demonstrate the owner's knowledge
                of the dog's aggressive tendencies, which can support the claim
                of negligence.
              </p>
            </div>
            <div className="question">
              <strong>
                3. Were there any warning signs or notices indicating the
                presence of a dangerous dog on the owner's property?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>
                This question seeks to determine if the owner took reasonable
                precautions to warn others about the potential danger posed by
                the dog.
              </p>
            </div>
            <div className="question">
              <strong>
                4. Has the dog been involved in similar incidents of biting or
                aggression in the past?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>
                This question is relevant to establish a pattern of behavior and
                the owner's awareness of the dog's propensity for aggression.
              </p>
            </div>
            <div className="question">
              <strong>
                5. Did the owner take immediate steps to assist or provide
                medical aid to the victim after the dog bite incident?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>
                This question addresses the owner's duty of care and
                responsibility towards the victim following the incident.
              </p>
            </div>
            <div className="question">
              <strong>
                6. Can you provide any evidence of communication or interaction
                with the owner regarding the dog's behavior prior to the
                incident?
              </strong>
              <br/>
              <strong>Reason:</strong>
              <p>...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuestionPage;
