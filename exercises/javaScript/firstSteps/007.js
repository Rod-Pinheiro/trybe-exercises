function converteNota(a) {
  if (a < 0 || a > 100 || typeof a !== "number") {
    return "error";
  } else if (a >= 90) {
    return "A";
  } else if (a >= 80) {
    return "B";
  } else if (a >= 70) {
    return "C";
  } else if (a >= 60) {
    return "D";
  } else if (a >= 50) {
    return "E";
  } else {
    return "F"
  }
}