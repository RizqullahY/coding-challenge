// dalam sebuah array kita perlu mengeluarkan nilai yang paling besar dan kecil (value bukan index)
// lalu menjumlahkan semuanya

//* Cara 1
// function sumArray(array) {
//    let total = 0;
//    if (array == null) {
//       return 0;
//    } else {
//       array.sort((a, b) => a - b);
//       array.pop();
//       array.shift();
//       for (let i = 0; i < array.length; i++) {
//          total += array[i];
//       }
//    }
//    return total;
// }

//* Cara 2 reduce
function sumArray(array) {
   if (array === null || array.length <= 2) return 0;
   return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, curr) => acc + curr);
}
