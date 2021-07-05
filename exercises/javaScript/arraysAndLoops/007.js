function menorDoArray(arr) {
  let menorNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    if (index < menorNum) {
      menorNum = index;
    }
  }
}