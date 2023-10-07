const difficulty_color = (level) => {
  if (level == 1 || level == "Easy") {
    return "green";
  } else if (level == 2 || level == "Medium") {
    return "yellow";
  } else return "red";
};

export default difficulty_color;
