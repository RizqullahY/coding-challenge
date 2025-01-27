// ada array berisi number dan kita disuruh untuk mengalikan semua number didalamnya

//* Cara Pertama 
// function grow(x) {
//    let result = x[0]; // result ini berisi angka pertama dari array
//    for (let i = 1; i < x.length; i++) {   // dari index ke-2 dan seterusnya sampai menyentuh panjang array
//       result = result * x[i];    // angka index sekarang dikali dengan angka index setelahnya
//       result *= x[i];            // seperti ini juga bisa penulisannya
//    }
//    return result;
// }

//* Cara Kedua
// function grow(x){
//    const result = x.reduce(( acc , curr ) => acc * curr , 1); // accUMULATOR = nilai hasil , currENT VALUE = nilai saat ditelusuri    
//    return result
// }

//* Cara Pencinta One Liner
const grow = (x) =>  x.reduce(( acc , curr ) => acc * curr , 1);

/*
Menggunakan Function Ekspression
Menggunakan Arrow Function
Tidak Perlu Menggunakan Return dan Kurung Kurawal
*/


console.log(grow([1, 2, 3, 4, 5]));
