// dalam satu buah array kita disuruh mencari nilai terbesar dan terkecil



//* Cara 1 looping angka pertama dengan sebelahnya
// var min = function (list) {
//    let minValue = list[0];
//    for(let i = 1 ; i < list.length ; i++){      // dilooping semuanya
//       if(minValue > list[i]){                   // jika angka pertama dalam list lebih besar dari pada sebelahnya
//          minValue = list[i]                     // maka : bagian paling kiri (minValue) diisi dengan 
//       }
//    }return minValue
// };

// var max = function (list) {
//    let maxValue = list[0];
//    for(let i = 1 ; i < list.length ; i++){      
//       if(maxValue < list[i]){                   
//          maxValue = list[i]                     
//       }
//    }return maxValue
// };


//* Cara 2 menggunakan sort
// const min = list => list.sort((a,b) => a - b)[0]
// const max = list => list.sort((a,b) => b - a)[0]


//* Cara 3 menggunakan method min dan max
const min = list => Math.min(...list)
const max = list => Math.max(...list)


console.log(
   min([-52, 56, 30, 29, -54, 0, -110]),
   max([-52, 56, 30, 29, -54, 0, -110])
   )

