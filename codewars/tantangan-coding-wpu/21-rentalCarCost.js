// sewa mobil perhari 40$ , 3 cashback 20$ , 7 hari cashback 50$


//* Cara 1
// function rentalCarCost(d) {
//    let diskon = 0 ; 
//    if ( d >= 3){
//       diskon = 20;
//    }if ( d >= 7){
//       diskon = 50;
//    } 
//    return d * 40 - diskon
// }

//* Cara 2
// function rentalCarCost(d) {
//    return d * 40 - (d >= 7 ? 50 : d >= 4 ? 20 : 0)
// }

//* One Liner
const rentalCarCost = d => d * 40 - (d >= 7 ? 50 : d >= 4 ? 20 : 0)

console.log(rentalCarCost(4));

