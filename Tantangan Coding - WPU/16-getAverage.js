// disuruh menghitung nilai rata - rata dan dibulatkan ke integer bawah

//* Cara 1
// function getAverage(marks) {
//    let result = marks.reduce((acc , curr) => acc + curr) / marks.length
//    return Math.floor(result)
// }

//* Cara 2
// function getAverage(marks) {
//    let total = 0;
//    for(let i = 0; i < marks.length ; i++){
//       total += marks[i]
//    }
//    return Math.floor(total / marks.length);
// }

//* Cara 3
const getAverage = (marks) =>
   Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5]));
