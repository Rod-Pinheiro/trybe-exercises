function countNumImpar(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element % 2 !== 0){
      counter++;
    }
  }
  console.log(counter);
}