import React, { useState, useEffect } from "react";
import HangmanImage from "./HangmanImage";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import GameStatus from "./GameStatus";
import Help from "./Help";
import words from "../words"; // Import the words list
import "../App.css"; // Import the CSS file for styling

const backgroundImages = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
  "https://picsum.photos/800/600?random=5",
  "https://picsum.photos/800/600?random=6",
  "https://picsum.photos/800/600?random=7",
  "https://picsum.photos/800/600?random=8",
  "https://picsum.photos/800/600?random=9",
  "https://picsum.photos/800/600?random=10",
];

const Hangman = () => {
  const [word, setWord] = useState(""); // The word to be guessed
  const [guessedLetters, setGuessedLetters] = useState([]); // Letters the user has guessed
  const [wrongGuesses, setWrongGuesses] = useState(0); // Number of incorrect guesses
  const [gameStatus, setGameStatus] = useState("not_started"); // 'not_started', 'playing', 'won', 'lost'
  const [showHelp, setShowHelp] = useState(false); // Show or hide the help section
  const [hintLetter, setHintLetter] = useState(""); // Letter to provide as a hint
  const [showWelcome, setShowWelcome] = useState(true); // Show welcome button
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]); // Default background image

  // Function to select a random word from the list
  const fetchRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.trim().toUpperCase()); // Ensure the word is in uppercase
  };

  // useEffect hook to fetch the word when the game status changes to 'playing'
  useEffect(() => {
    if (gameStatus === "playing") {
      fetchRandomWord();
      // Change background image randomly when the game starts
      const randomImage =
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setBackgroundImage(randomImage);
    }
  }, [gameStatus]);

  // Handle the user's guess
  const handleGuess = (letter) => {
    if (gameStatus !== "playing") return; // Don't process guesses if the game is not in progress

    // Check if the letter has already been guessed
    if (!guessedLetters.includes(letter)) {
      const isWrongGuess = !word.includes(letter);

      setGuessedLetters((prevGuessedLetters) => {
        const newGuessedLetters = [...prevGuessedLetters, letter];
        const newDisplayedWord = word
          .split("")
          .map((char) => (newGuessedLetters.includes(char) ? char : "_"))
          .join(" ");

        // Determine win/loss status immediately after guessing
        if (newDisplayedWord.replace(/ /g, "") === word) {
          setGameStatus("won"); // User has guessed the entire word correctly
        } else if (isWrongGuess) {
          // Directly set the game status to "lost" if wrong guesses reach 11
          if (wrongGuesses + 1 >= 11) {
            setGameStatus("lost"); // User has made too many wrong guesses
          }
          // No need to increment wrongGuesses state here
        }

        return newGuessedLetters;
      });

      // Directly update wrong guesses only if it's a wrong guess
      if (isWrongGuess) {
        // Using setWrongGuesses with a functional update to ensure correct value
        setWrongGuesses((prevWrongGuesses) => {
          return prevWrongGuesses + 1; // Increment the wrong guesses count
        });
      }
    }
  };

  // Provide a hint by revealing a letter
  const provideHint = () => {
    const unguessedLetters = word
      .split("")
      .filter((letter) => !guessedLetters.includes(letter) && letter !== " ");
    if (unguessedLetters.length > 0) {
      const randomHint =
        unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
      setHintLetter(randomHint);
      // Automatically guess the hint letter and immediately check for win/loss
      handleGuess(randomHint);
    }
  };

  // Reset the game to start a new one
  const resetGame = () => {
    fetchRandomWord(); // Fetch a new word
    setGuessedLetters([]); // Clear guessed letters
    setWrongGuesses(0); // Reset wrong guesses
    setGameStatus("playing"); // Set game status to 'playing'
    setHintLetter(""); // Clear hint letter
    // Change background image randomly when the game resets
    const randomImage =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setBackgroundImage(randomImage);
  };

  // Show or hide the help section
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  // Handle start button click to begin the game
  const startGame = () => {
    setShowWelcome(false); // Hide the welcome screen
    resetGame(); // Start a new game
  };

  // Update displayed word including hint
  const displayedWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  // Check for win/loss conditions
  useEffect(() => {
    if (gameStatus === "playing") {
      const revealedWord = displayedWord.replace(/ /g, "");
      if (revealedWord === word) {
        setGameStatus("won"); // User has guessed the word
      }
    }
  }, [displayedWord]);

  return (
    <div
      className="hangman-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {showWelcome ? (
        <div className="welcome-screen">
          <h1>Welcome to Hangman!</h1>
          <button className="start-button" onClick={startGame}>
            Start Playing Hangman Today
          </button>
        </div>
      ) : (
        <>
          <HangmanImage wrongGuesses={wrongGuesses} />
          <WordDisplay
            word={word}
            guessedLetters={guessedLetters}
            gameStatus={gameStatus}
          />
          <Keyboard
            handleGuess={handleGuess}
            guessedLetters={guessedLetters}
            selectedWord={word}
            gameStatus={gameStatus}
          />
          <GameStatus gameStatus={gameStatus} word={word} />
          <button className="restart-button" onClick={resetGame}>
            Restart Game
          </button>
          <button className="hint-button" onClick={provideHint}>
            Hint
          </button>
          <button className="help-button" onClick={toggleHelp}>
            Help
          </button>
          <Help showHelp={showHelp} />
        </>
      )}
    </div>
  );
};

export default Hangman;
