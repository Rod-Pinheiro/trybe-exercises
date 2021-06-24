function avaliaPar() {
  let primeiro = Math.ceil(Math.random() * 10)
  let segundo = Math.ceil(Math.random() * 10)
  let terceiro = Math.ceil(Math.random() * 10)

  if (primeiro % 2 === 0 && segundo % 2 === 0 && terceiro % 2 === 0) {
    return true;
  } else {
    return false;
  }


}