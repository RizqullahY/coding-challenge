// bulan 1 - 3 masuk ke quarter 1, 4 - 6 quarter 2 dst.

//* Cara 1 
// const quarterOf = (month) => {
//    if (month <= 3){
//       return 1
//    }if (month <= 6){
//       return 2
//    }if (month <= 9){
//       return 3
//    }if (month <= 12){
//       return 4
//    }else{
//       return 'Data Salah'
//    }
// };

//* Cara 2 pembulatan
const quarterOf = month => Math.ceil(month / 3);
console.log(quarterOf())