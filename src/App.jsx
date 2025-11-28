import { useState } from "react";
import "./index.css";

function App() {
  const [question, setQuestion] = useState("Are you tired?");
  const [spamCount, setSpamCount] = useState(0);

  const handleYes = () => {
    setQuestion("I hope you know this already, but you really deserve to rest. You have been trying so hard, carrying so much, and still choosing to show up every single day. That takes strength, and Im proud of you for that. I love youu~~ 🧡");
  };

  const handleNo = () => {
    setSpamCount(spamCount + 1);
    setQuestion("Are you sure?".repeat(spamCount + 1));
  };

  return (
    <div className="container">
      <h1 className="question">{question}</h1>

      <div className="buttons">
        <button className="btn yes" onClick={handleYes}>Yes</button>
        <button className="btn no" onClick={handleNo}>No</button>
      </div>
    </div>
  );
}

export default App;