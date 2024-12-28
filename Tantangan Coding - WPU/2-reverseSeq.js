// membuat angka berurutan terbalik

//* Cara 1 Expression
// const reverseSeq = (n) => {
//    const result =[] ;               // variable bertipe array
//    for(let i = n ; i >= 1 ; i--){   // ketika i masih lebih besar dari 1, i--
//       result.push(i);               // dimasukkan kedalam array
//    }
//    return result;
// };

//* Cara 2 Declaration
// reverseSeq = (n) => {
//    // return [...Array(n)]             // menggunakan spread operation
//    return Array(n)                     
//    .fill()                             // isi dengan fill() menjadi undifined
//    .map((el , i) => i + 1 )            // di map, indexnya ditambah 1   
//    .reverse()                          // dibalik
// }

//* Cara 3 : 1 Baris, Spread Operation, Tanpa Reverse 
const reverseSeq = (n) => [...Array(n)].map((el , i) => n - i)    // n dikurangi index

console.log(reverseSeq(5));