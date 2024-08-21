// src/components/GameStatus.js
import React from "react";
import "./GameStatus.css"; // Ensure CSS is imported

const GameStatus = ({ gameStatus, word, displayedWord }) => {
  const getMessage = () => {
    if (gameStatus === "lost") {
      return `😔 Sorry, you lost! The word was ${word}`; // Show the full word when lost
    }
    if (gameStatus === "won") {
      return "🎉 Congratulations! You've won!"; // Show win message
    }
    return "Keep guessing!"; // Default message when the game is ongoing
  };

  return (
    <div className={`game-status ${gameStatus}`}>
      {gameStatus === "ongoing" ? (
        <div className="ongoing-message">{getMessage()}</div>
      ) : (
        getMessage()
      )}
      {gameStatus === "lost" && <p className="full-word">{displayedWord}</p>}{" "}
      {/* Display the full word when lost */}
    </div>
  );
};

export default GameStatus;
