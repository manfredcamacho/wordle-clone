import { WORD_LIST_ES } from "./constants";

const getWord = () => {
  return WORD_LIST_ES[Math.floor(Math.random() * WORD_LIST_ES.length)];
};

export default getWord;
