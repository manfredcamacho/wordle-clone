import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../utils/constants";
import getWord from "./getWord";

export const GameContext = React.createContext(null);
export const GameContextProvider = ({ children }) => {
  const [guesses, setGuesses] = useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(Array(WORD_LENGTH).fill(""))
  );
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [answer, setAnswer] = useState(getWord());

  const addGuess = (guess) => {
    const guessesCopy = Array.from(guesses);
    guessesCopy[currentAttempt - 1] = Array.from(guess);
    setGuesses(guessesCopy);
    if (currentAttempt === NUM_OF_GUESSES_ALLOWED) setIsGameOver(true);
    if (guess === answer) {
      setIsWinner(true);
      setIsGameOver(true);
    }
    setCurrentAttempt(currentAttempt + 1);
  };

  const resetGame = () => {
    setIsGameOver(false);
    setIsWinner(false);
    setCurrentAttempt(1);
    setAnswer(getWord());
    setGuesses(Array(NUM_OF_GUESSES_ALLOWED).fill(Array(WORD_LENGTH).fill("")));
  };

  const context = {
    guesses,
    attempts: currentAttempt,
    answer,
    isGameOver,
    isWinner,
    addGuess,
    resetGame,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};
