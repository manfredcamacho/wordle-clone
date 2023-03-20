import React, { useContext, useState } from "react";
import normalize from "../../../utils/normalize";
import { GameContext } from "../../../utils/context";
import "./GuessInput.css";

const GuessInput = () => {
  const [guess, setGuess] = useState("");
  const context = useContext(GameContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.addGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        autoFocus
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        value={guess}
        onChange={(event) => setGuess(normalize(event.target.value))}
      />
    </form>
  );
};

export default GuessInput;
