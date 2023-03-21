import React, { useContext } from "react";
import { checkGuess } from "../../../utils/checkGuess";
import { GameContext } from "../../../utils/context";

const Guess = ({ word }) => {
  const { answer } = useContext(GameContext);
  const status = checkGuess(word, answer);
  return (
    <p className="guess">
      {word.map((letter, index) => (
        <span
          key={crypto.randomUUID()}
          className={`cell ${status[index].status}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
