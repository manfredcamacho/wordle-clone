import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../utils/constants";

export const GameContext = React.createContext(null);
export const GameContextProvider = ({ children }) => {
  const [guesses, setGuesses] = useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(Array(WORD_LENGTH).fill(""))
  );
  const [currentAttempt, setCurrentAttempt] = useState(0);

  const addGuess = (guess) => {
    const guessesCopy = Array.from(guesses);
    guessesCopy[currentAttempt] = Array.from(guess);
    setGuesses(guessesCopy);
    setCurrentAttempt(currentAttempt + 1);
  };

  const context = {
    guesses,
    addGuess,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};
