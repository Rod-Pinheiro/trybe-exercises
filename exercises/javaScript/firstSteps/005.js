function avaliaAngulosTriangulo(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || a < 0 || b < 0 || c < 0) {
    return "Variaveis invalidas"
  } else if ((a + b + c) === 180) {
    return true;
  } else if ((a + b + c) !== 180) {
    return false;
  }
}