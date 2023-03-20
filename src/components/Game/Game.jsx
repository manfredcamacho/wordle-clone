import React, { useState } from "react";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { GameContextProvider } from "../../utils/context";
import "./Game.css";

const Game = () => {
  return (
    <div className="game-wrapper">
      <GameContextProvider>
        <GuessResults></GuessResults>
        <GuessInput></GuessInput>
      </GameContextProvider>
    </div>
  );
};

export default Game;
