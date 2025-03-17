// ada seorang pahlawan yang melawan naga, 1 naga butuh 2 peluru

//* Cara 1
// function hero(bullets, dragons){
//    if(bullets >= (dragons * 2)){       
//       return true
//    }else{
//       return false
//    }
// }

//* Cara 2 memakai ternary
// function hero(bullets, dragons){
//    return (bullets >= dragons) * 2 ? true : false;
//    // lihat kondisi ^
//    // kalau ? bernilai true | : bernilai false
// }

//* Cara 3 function expression, arrow function, tanpa return dan kurung kurawal {} 
const hero = (bullets, dragons) => bullets/2 >= dragons;


console.log(hero(5,15))