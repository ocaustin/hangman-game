import React from "react";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from React-Bootstrap

const Help = ({ showHelp, toggleHelp }) => {
  return (
    <Modal show={showHelp} onHide={toggleHelp}>
      <Modal.Header closeButton>
        <Modal.Title>How to Play Hangman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The objective of Hangman is to guess the word within 11 wrong guesses.
        </p>
        <p>Here are the basic rules:</p>
        <ul>
          <li>
            You will see blank spaces representing each letter of the word.
          </li>
          <li>
            Click on a letter to guess it. If correct, the letter will fill in
            the corresponding blank space.
          </li>
          <li>
            If incorrect, a part of the hangman will appear. You have 11 chances
            before the game ends.
          </li>
          <li>You can request a hint, but it will count as a guess.</li>
          <li>
            Win the game by guessing all the letters before the hangman is fully
            drawn.
          </li>
        </ul>
        <p>Good luck and have fun!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleHelp}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Help;
