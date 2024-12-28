// akan di beri 2 angka. angka pertama angka awal dan kelipatannya , 
// angka kedua jumlah angka pada barisannya
// n pertama yang kelipatan dari x


//* Cara 1 
// function countBy(x, n) {
//    let z = [];
//    for(let i = 1 ; i <= n ; i++){      // dilooping n - nya 
//       z.push(i * x)        // setiap i dikalikan dengan bilangan x 
//    }
//    return z;
// }


//* Cara 2 Spread Operator
// function countBy(x, n) {
//    return [...Array(n)].map((el , i) => (i + 1) * 2)   
// }


//* Cara One Liner 
const countBy =(x, n) => [...Array(n)].map((el , i) => (i + 1) * 2)   

console.log(countBy(2,10))