import React, { useContext } from "react";
import { GameContext } from "../../../utils/context";

const GuessResult = () => {
  const { guesses } = useContext(GameContext);
  return (
    <div className="guess-result">
      {guesses.map((guess) => (
        <p key={crypto.randomUUID()} className="result">
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResult;
