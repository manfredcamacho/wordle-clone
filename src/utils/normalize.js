const normalize = (str) => {
  return str.replace(/[^a-z]/gi, "").toUpperCase();
};

export default normalize;
