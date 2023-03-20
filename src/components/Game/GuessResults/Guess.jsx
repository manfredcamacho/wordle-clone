import React from "react";

const Guess = ({ word }) => {
  return (
    <p className="guess">
      {word.map((letter) => (
        <span key={crypto.randomUUID()} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
