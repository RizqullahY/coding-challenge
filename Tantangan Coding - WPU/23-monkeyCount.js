// menghitung monyet

// //* Cara 1
// function monkeyCount(n) {
//    let result = [];
//    for( let i = 0 ; i < n ; i++){
//       result.push(i + 1)
//    }
//    return result
// }

//* Cara 2
function monkeyCount(n) {
   return Array.from({ length : n} , (value , index) => index + 1)
}

console.log(monkeyCount(5))