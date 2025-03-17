/* menggabungkan array yang berisi string, 
menambahkan spasi antar string
! tidak boleh ada spasi di awal dan akhir array
*/ 

//* Cara 1
// function smash (words) {
//    return words.join(' ');        // tanpa delimiter default koma
// };


//* Cara 2 arrow function, one line
// const smash = (words) => words.join(' ');


//* Bukan WPU kalau tidak pakai cara Barbar
function smash(words){
   let result = '';                             // tempat menampung array
   for(let i = 0 ; i < words.length ; i++){    // looping 
      result += words[i];                       // semuanya dimasukkan result
      if(i != words.length - 1){                // jika indexnya masih belum ke index terakhir
         result += ' ';                         // diberi spasi
      }
   }
   return result
}

console.log(smash
   (["this", "is", "a", "really", "long", "sentence"]))