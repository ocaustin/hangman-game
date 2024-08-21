// src/components/Help.js
import React from "react";

const Help = ({ showHelp }) => {
  if (!showHelp) return null;

  return (
    <div className="help">
      <h2>Help</h2>
      <p>
        Guess the word by clicking on letters. You have a limited number of
        wrong guesses before you lose the game.
      </p>
      <p>Good luck!</p>
    </div>
  );
};

export default Help;
