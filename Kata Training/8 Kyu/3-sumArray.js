// Sum Numbers
// function sum(numbers) {
// 	if (numbers != 0) {
// 		let sum = 0;
// 		for (let i = 0; i < numbers.length; i++) {
// 			sum += numbers[i];
// 		}
// 		return sum;
// 	}else{
//       return 0
//    }
// }

function sum(numbers) {
   return numbers.reduce(( a , b ) => a + b , 0)
}
console.log(sum([1,2,3,4,5]))