function pecasXadrez(a) {
  switch (a.toLowerCase()) {
    case "peão":
      return "uma casa para frente"

    case "torre":
      return "Vertical ou horizontal"

    case "cavalo":
      return "forma de L"

    case "bispo":
      return "diagonais"

    case "rainha":
      return "Ao longo de todas as direções"

    case "rei":
      return "todas as direções uma casa de cada vez"

    default:
      return "peça inválida"
  }
}