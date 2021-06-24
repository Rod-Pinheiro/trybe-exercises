function mediaArray(arr) {
  let soma = 0;


  for (let i = 0; i < arr.length; i++) {

    soma = soma + arr[i];
  }
  if (soma / arr.length > 20) {
    console.log("valor maior que 20")
  } else {
    console.log("valor menor que 20")
  }
}