import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("Are you tired?");
  const [spamCount, setSpamCount] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [shake, setShake] = useState(false);

  const handleYes = () => {
    setQuestion("I hope you know this already, but you really deserve to rest. You have been trying so hard, carrying so much, and still choosing to show up every single day. That takes strength, and Im proud of you for that. i love you so much!!! 🧡🫵🏻 -i wll be right here, im not going anywhere.");
    setFadeKey(fadeKey + 1);
  };

  const handleNo = () => {
    setSpamCount(spamCount + 1);
    setQuestion("Are you sure?".repeat(spamCount + 1));
    setFadeKey(fadeKey + 1);

    setShake(true);
    setTimeout(() => setShake(false), 400);

    // Move button on touch/click
    moveButton();
  };

  const moveButton = () => {
    const btn = document.querySelector(".btn.no");
    const maxX = window.innerWidth - 120; // 120 = button width approx
    const maxY = window.innerHeight - 60; // 60 = button height approx
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    btn.style.position = "absolute";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  };

  return (
    <div className={`container ${shake ? "shake" : ""}`}>
      <h1 key={fadeKey} className="question fade">{question}</h1>

      <div className="buttons">
        <button className="btn yes" onClick={handleYes}>Yes</button>
        <button
          className="btn no"
          onClick={handleNo}
          onTouchStart={handleNo}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;