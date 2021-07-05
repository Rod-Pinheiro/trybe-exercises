function asteriscosTrianguloEquilatero(n) {
  let space = " ";
  let ast = "*";
  let counter = n;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {

      console.log(space.repeat(Math.round(counter / 2)) + ast)
      ast += "**";
      counter -= 2;
    }
  }

}