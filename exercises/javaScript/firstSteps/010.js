function calculoLucro(custo, valor, quant) {
  let custoTotal = custo + (custo * 1.02);
  let lucro = valor - custoTotal;
  let lucroTotal = lucro * quant;


  if (custo < 0 || valor < 0 || quant < 0) {
    return "error";
  } else {
    return lucroTotal;
  }
}