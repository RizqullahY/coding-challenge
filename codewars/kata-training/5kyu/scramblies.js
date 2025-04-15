// http://codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// function scramble(str1, str2) {
//     let res = [];
//     str1 = str1.split('')
//     str2 = str2.split('')
//     // console.log(str1)
//     // console.log(str2)
//     // console.log(str1.includes(''))
//     for (let i = 0; i < str2.length; i++) {
//         // str1.includes(str2[i]) ? res.push(true) : res.push(tur)
//         if(str1.includes(str2[i])){
//             res.push(true)
//             str1.unshift(str2[i])
//         }else{
//             res.push(false)
//         }
//     }
//     return !res.includes(false);
// }
// console.log(scramble('rkqodlw', 'world'))
// console.log(scramble('katas','steak'))
// console.log(scramble('scriptjavx', 'javascript'))



// DARI PAK GPT
function scramble(str1, str2) {
    let letterCount = {};

    // Hitung jumlah tiap huruf di str1
    for (let char of str1) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    console.table(letterCount)

    // Cek apakah str2 bisa dibentuk
    for (let char of str2) {
        if (!letterCount[char]) {
            return false; // huruf tidak ada atau sudah habis
        }
        letterCount[char]--;
    }

    return true;
}
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))