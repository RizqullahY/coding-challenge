// timku (x) dan lawan (y) bertanding dan hasilnya di masukkan dalam sebuah string di dalam array
// dalam satu pertandingan menang maka skor + 3 , kalah + 0 , draw + 1
// 10 pertandingan dengan asumsi skor terbesar = 4 terkecil = 0 


//* Cara 1
// function points(games) {
//    let result = 0 ;
//    for( let i = 0 ; i < games.length ; i++ ){
//       // console.log(games[i][0]) // mengambil index dari nilai tipe array
//       if( games[i][0] > games[i][2]){
//          result += 3;
//       }else if( games[i][0] === games[i][2]){
//          result += 1;
//       }
//    }return result;
// }


//* Cara 2 reduce
function points(games) {
   // const result = games.reduce((acc , [x, _, y]))
   const result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : y > x ? 0 : 1) + acc, 0)
   return result
}


console.log(
   points([
      "1:0",
      "1:0",
      "3:0",
      "4:0",
      "2:1",
      "3:1",
      "4:1",
      "3:2",
      "4:2",
      "4:3",
   ])
);
