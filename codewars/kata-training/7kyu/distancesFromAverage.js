// Barbar adalah jalan ninjaku

// function distancesFromAverage(arr){
//    let sum = 0 ;
//    for (let index = 0; index < arr.length; index++) {
//       sum += arr[index];
//    }
//    const average = sum / arr.length
//    console.log(average)

//    let result = [];
//    for (let index = 0; index < arr.length; index++) {
//       if(arr[index] >= average){
//          const plus = ((arr[index] - average) * -1).toFixed(1)
//          result.push(parseFloat(plus))
//       }else if(arr[index] < average){
//          const minus = (average - (arr[index])).toFixed(1)
//          result.push(parseFloat(minus))
//       }
//    }

//    return result
// }


//* Dari ChatGPT
function distancesFromAverage(arr) {
   const average = arr.reduce((sum, value) => sum + value, 0) / arr.length;
      let result = [];
   for (let index = 0; index < arr.length; index++) {
      if(arr[index] >= average){
         const plus = ((arr[index] - average) * -1).toFixed(1)
         result.push(parseFloat(plus))
      }else if(arr[index] < average){
         const minus = (average - (arr[index])).toFixed(1)
         result.push(parseFloat(minus))
      }
   }

   return result
}

console.log(distancesFromAverage([55, 95, 62, 36, 48]))

