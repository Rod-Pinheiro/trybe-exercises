function avaliaAngulosTriangulo(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Variaveis invalidas"
  } else if ((a + b + c) === 180) {
    return true;
  } else if ((a + b + c) !== 180) {
    return false;
  }
}