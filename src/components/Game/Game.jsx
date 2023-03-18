import React, { useState } from "react";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import { GameContextProvider } from "../../utils/context";
import "./Game.css";

const Game = () => {
  return (
    <div>
      <GameContextProvider>
        <GuessResult></GuessResult>
        <GuessInput></GuessInput>
      </GameContextProvider>
    </div>
  );
};

export default Game;
