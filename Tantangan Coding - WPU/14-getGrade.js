// memberi peringkat dari nilai rata rata

//* Cara 1
// function getGrade(s1, s2, s3) {
//    const nilai = (s1 + s2 + s3)/3
//    if( nilai < 60){
//       return "F"
//    }if( nilai < 70){
//       return "D"
//    }if( nilai < 80){
//       return "C"
//    }if( nilai < 90){
//       return "B"
//    }else{
//       return "A"
//    }
// }

//* Cara 2 lebih dinamis
function getGrade(...s) {
   const nilai = s.reduce((acc , curr) => acc + curr) / s.length
   if( nilai < 60) return "F";
   if( nilai < 70) return "D";
   if( nilai < 80) return "C";
   if( nilai < 90) return "B";
   return "A"
         
}
console.log(getGrade(75,90,93))