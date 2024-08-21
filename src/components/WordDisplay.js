// src/components/WordDisplay.js
import React from "react";

// Define the WordDisplay component
const WordDisplay = ({ word, guessedLetters, gameStatus }) => {
  // Convert word and guessed letters to uppercase
  const upperCaseWord = word.toUpperCase();
  const upperCaseGuessedLetters = guessedLetters.map((letter) =>
    letter.toUpperCase()
  );

  // Generate display text with underscores and guessed letters or show the full word if game is lost
  const displayWord =
    gameStatus === "lost"
      ? upperCaseWord // Show full word if the game is lost
      : upperCaseWord
          .split("")
          .map((letter) =>
            upperCaseGuessedLetters.includes(letter) ? letter : "_"
          )
          .join(" ");

  return (
    <div className="word-display">
      <h2>{displayWord}</h2>
    </div>
  );
};

export default WordDisplay;
