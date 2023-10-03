const difficulty_to_string = (level) => {
  if (level === 1) {
    return "Easy";
  } else if (level === 2) {
    return "Medium";
  } else return "Hard";
};

export default difficulty_to_string;
