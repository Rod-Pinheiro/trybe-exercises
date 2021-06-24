function maiorNoArray(arr) {
  let maiorNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > maiorNum) {
      maiorNum = element;
    }
    console.log(maiorNum);
  }
}