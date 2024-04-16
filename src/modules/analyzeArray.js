function analyzeArray(arr){
  if(arr.length ===0){
    return{ average: null, min: null, max: null, length: 0};
  }
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i]
    }
  }
  return {
    average: sum/arr.length,
    min,
    max,
    length
  }
}

export default analyzeArray;