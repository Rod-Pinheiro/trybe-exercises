function asteriscosTrianguloInvertido(n) {
  let space = " ";
  let ast = "";
  for (let j = 0; j < n; j++) {
    ast = ast + "*"
    console.log(space.repeat(n - j) + ast);
  }
}