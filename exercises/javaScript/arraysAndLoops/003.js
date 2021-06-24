function mediaArray (arr){
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {

    soma = soma + arr[i];
  }
  console.log(soma/arr.length);
}