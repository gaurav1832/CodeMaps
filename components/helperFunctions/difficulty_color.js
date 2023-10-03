const difficulty_color = (level) => {
  if (level === 1) {
    return "green";
  } else if (level === 2) {
    return "yellow";
  } else return "red";
};

export default difficulty_color;
