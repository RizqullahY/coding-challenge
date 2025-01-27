/* 
DNA(Deoxyribo nucleic acid) RNA(Ribo nucleic acid)
DNA terdiri dari ('G')Guanine, ('C')Cytosine, ('A')Adenine, ('T')Thymine
Kalau RNA tidak ada ('T') melainkan ('U')Uracil
*/

//* Cara 1
// function DNAtoRNA(dna){
//    let rna = '';                             // membuat variable untuk menampung
//    for(let i = 0 ; i < dna.length ; i++){    // di looping
//       if(dna[i] === "T"){                    // jika dna yang sedang di looping itu adalah "T"
//          rna += "U";                         // variable rna ditambah "U"
//       }else{
//          rna += dna[i]                       // selain itu variabel rna diisi dengan isi dari dna
//       }
//    }
//    return rna
// }


//* Cara 2 Ternarry!
// function DNAtoRNA(dna){
//    let rna = '';
//    for(let i = 0 ; i < dna.length ; i++){
//       dna[i] === "T" ? rna += "U" : rna += dna[i];
//    }return rna
// }


//* Cara 3 Map
// function DNAtoRNA(dna) {
//    return dna
//       .split("")        // split = dipecah menjadi array
//       .map((el) => (el === "T" ? "U" : el))     // di petakan , dengan logic ternary kalau ada 'T' maka diganti 'U'
//       .join("");        // digabung
// }


//* Cara 4 Pakai RegEx
const DNAtoRNA = (dna) => dna.replace(/T/g,'U');

console.log(DNAtoRNA("GCATUT"));
