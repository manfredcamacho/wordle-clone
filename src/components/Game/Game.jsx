import React, { useContext } from "react";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { HappyBanner, SadBanner } from "../Banner";
import { GameContext } from "../../utils/context";
import "./Game.css";

const Game = () => {
  const { isWinner, isGameOver, attempts, answer } = useContext(GameContext);
  return (
    <div className="game-wrapper">
      <GuessResults></GuessResults>
      <GuessInput></GuessInput>
      {isWinner && <HappyBanner attempts={attempts}></HappyBanner>}
      {isGameOver && !isWinner && <SadBanner answer={answer}></SadBanner>}
    </div>
  );
};

export default Game;
