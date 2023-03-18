import React, { useState } from "react";

export const GameContext = React.createContext(null);
export const GameContextProvider = ({ children }) => {
  const [guesses, setGuesses] = useState([]);
  const context = {
    guesses,
    setGuesses,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};
