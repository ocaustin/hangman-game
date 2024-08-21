import React from "react";
import "./App.css"; // This will keep the existing CSS if needed.
import Hangman from "./components/Hangman"; // Import your Hangman component.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hangman />
      </header>
    </div>
  );
}

export default App;
