import React from "react";
import "./Keyboard.css"; // Import CSS file for styling

// Define the Keyboard component
const Keyboard = ({
  handleGuess,
  guessedLetters,
  selectedWord,
  gameStatus,
}) => {
  // Define all the letters of the alphabet in uppercase
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Determine the CSS class based on whether a letter is guessed correctly or incorrectly
  const getButtonClass = (letter) => {
    if (guessedLetters.includes(letter)) {
      // Green class for correct guesses, red for incorrect guesses
      return selectedWord.includes(letter)
        ? "correct" // Apply the "correct" CSS class for correct guesses
        : "incorrect"; // Apply the "incorrect" CSS class for incorrect guesses
    }
    return ""; // No class applied if the letter has not been guessed
  };

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)} // Call handleGuess when the button is clicked
          className={getButtonClass(letter)} // Apply dynamic class based on guess status
          disabled={gameStatus !== "playing" || guessedLetters.includes(letter)} // Disable button if the game isn't active or the letter has been guessed
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
