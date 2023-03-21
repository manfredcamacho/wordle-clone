import { WORD_LENGTH } from "./constants";

export const checkGuess = (guess, answer) => {
  let status = [];
  const guessLetters = Array.from(guess);
  const answerLetters = Array.from(answer);

  for (let i = 0; i < WORD_LENGTH; i++) {
    let letterStatus = "incorrect";

    if (answerLetters.includes(guessLetters[i]))
      letterStatus =
        answerLetters[i] === guessLetters[i] ? "correct" : "misplaced";

    status = [
      ...status,
      {
        letter: guessLetters[i],
        status: letterStatus,
      },
    ];
  }

  return status;
};
