// HangmanImage.js
import React from "react";
import state1 from "../assets/state1.GIF";
import state2 from "../assets/state2.GIF";
import state3 from "../assets/state3.GIF";
import state4 from "../assets/state4.GIF";
import state5 from "../assets/state5.GIF";
import state6 from "../assets/state6.GIF";
import state7 from "../assets/state7.GIF";
import state8 from "../assets/state8.GIF";
import state9 from "../assets/state9.GIF";
import state10 from "../assets/state10.GIF";
import state11 from "../assets/state11.GIF"; // Image when the game is lost

const HangmanImage = ({ wrongGuesses }) => {
  const hangmanStates = [
    null, // Index 0, no image for 0 wrong guesses
    state1, // Index 1, for 1 wrong guess
    state2, // Index 2, for 2 wrong guesses
    state3, // Index 3, for 3 wrong guesses
    state4, // Index 4, for 4 wrong guesses
    state5, // Index 5, for 5 wrong guesses
    state6, // Index 6, for 6 wrong guesses
    state7, // Index 7, for 7 wrong guesses
    state8, // Index 8, for 8 wrong guesses
    state9, // Index 9, for 9 wrong guesses
    state10, // Index 10, for 10 wrong guesses
    state11, // Index 11, for 11 wrong guesses (lost game)
  ];

  // Determine which image to display based on wrongGuesses count
  const currentImage =
    wrongGuesses >= 1 && wrongGuesses <= 10
      ? hangmanStates[wrongGuesses]
      : wrongGuesses > 10
      ? state11
      : null;

  return (
    <div className="hangman-image">
      {currentImage && (
        <img src={currentImage} alt={`Hangman state ${wrongGuesses}`} />
      )}
    </div>
  );
};

export default HangmanImage; // Ensure this is present
