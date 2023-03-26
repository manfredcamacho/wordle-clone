import React from "react";
import "./Banner.css";
import { GameContext } from "../../utils/context";

const Banner = ({ className, children }) => {
  const { resetGame } = React.useContext(GameContext);
  return (
    <>
      <div className={`${className} banner`}>
        <p>{children}</p>
        <button className={"resetButton"} onClick={resetGame}>
          Play Again
        </button>
      </div>
    </>
  );
};

const HappyBanner = ({ attempts }) => (
  <Banner className={"happy"}>
    <strong>Congratulations!</strong> Got it in
    <strong> {attempts} guesses</strong>.
  </Banner>
);

const SadBanner = ({ answer }) => (
  <Banner className={"sad"}>
    Sorry, the correct answer is <strong>{answer}</strong>.
  </Banner>
);

export { HappyBanner, SadBanner };
