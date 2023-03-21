import { describe, expect, it, assert } from "vitest";
import { checkGuess } from "../src/utils/checkGuess";

describe("CheckGuess utils function", () => {
  it("Should return a status with mix values", () => {
    let expected = [
      { letter: "W", status: "incorrect" },
      { letter: "H", status: "incorrect" },
      { letter: "A", status: "correct" },
      { letter: "L", status: "misplaced" },
      { letter: "E", status: "misplaced" },
    ];
    expect(checkGuess("WHALE", "LEARN")).toEqual(expected);
  });

  it("Should return a status with all correct letters", () => {
    let expected = [
      { letter: "L", status: "correct" },
      { letter: "E", status: "correct" },
      { letter: "A", status: "correct" },
      { letter: "R", status: "correct" },
      { letter: "N", status: "correct" },
    ];
    expect(checkGuess("LEARN", "LEARN")).toEqual(expected);
  });

  it("Should return a status with all incorrect letters", () => {
    let expected = [
      { letter: "W", status: "incorrect" },
      { letter: "H", status: "incorrect" },
      { letter: "A", status: "incorrect" },
      { letter: "L", status: "incorrect" },
      { letter: "E", status: "incorrect" },
    ];
    expect(checkGuess("WHALE", "TRUCK")).toEqual(expected);
  });

  it("Should return a status with all misplaced letters", () => {
    let expected = [
      { letter: "W", status: "misplaced" },
      { letter: "H", status: "misplaced" },
      { letter: "A", status: "misplaced" },
      { letter: "L", status: "misplaced" },
      { letter: "E", status: "misplaced" },
    ];
    expect(checkGuess("WHALE", "ALEHW")).toEqual(expected);
  });
});
