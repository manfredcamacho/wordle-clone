import React, { useContext } from "react";
import { GameContext } from "../../../utils/context";
import Guess from "./Guess";
import "./GuessResults.css";

const GuessResults = () => {
  const { guesses } = useContext(GameContext);
  return (
    <div className="guess-result">
      {guesses.map((guess) => (
        <Guess key={crypto.randomUUID()} word={guess}></Guess>
      ))}
    </div>
  );
};

export default GuessResults;
