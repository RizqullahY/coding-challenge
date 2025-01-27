// diberikan sebuah string yang disuruh mendoublekan masing masing dari hurufnya

//* Cara 1
// function doubleChar(str) {
//    let result = '';
//    for(let i = 0 ; i < str.length ; i++){
//       result += str[i];
//       result += str[i];
//    }return result
// }

//* Cara 2
function doubleChar(str) {
   return [...str].map((el) => el + el).join('')
}
console.log(doubleChar("Adidas"))