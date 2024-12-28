// disuruh menjumlahkan sebuah array yang berisi number dan string(angka)
/* Cara Cara ubah string ke number
1. parseInt()
2. Number()
3. +'3' dsb
*/


//* Cara 1
// function sumMix(x){
//    let total = 0;
//    for( let i = 0 ; i < x.length ; i++){
//       total += +x[i]
//    }
//    return total;
// }

//* Cara 2
// function sumMix(x){
//    return x.reduce((acc , curr) => acc + +curr , 0)
// }

//* One Liner
const sumMix = x => x.reduce((acc , curr) => acc + +curr , 0)


console.log(sumMix([9, 3, '6', '3']))