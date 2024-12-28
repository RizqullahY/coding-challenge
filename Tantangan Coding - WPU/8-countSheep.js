// diberi angka dan disuruh menghitung domba
// dan dijadikan 1 kesatuan


//* Cara 1 (Nyoba Sendiri) push() dan join()
// var countSheep = function (num) {
//    let result = []
//    for(let i = 1 ; i <= num ; i++){
//       result.push(i + " sheep...")
//    }
//    return result.join("")
// };


//* Cara 2 WPU
// var countSheep = function (num) {
//    let result = []
//    for(let i = 1 ; i <= num ; i++){
//       // result += i +' sheep... ';    
//       result += `${i} sheep... `;       // string literal
//    }
//    return result
// };


//* Cara 3 pakai map dan kombinasi string literal
// var countSheep = function (num){
//    return [...Array(num)].map((el,i) => `${i + 1} sheep...`).join('')
// }


//* Cara One Liner (Function Expression)
const countSheep = (num) => [...Array(num)].map((el,i) => `${i + 1} sheep...`).join('')


console.log(countSheep(3))