//* Cara 1
// function removeExclamationMarks(s) {
//    let result = '';
//    for( let i = 0 ; i < s.length ; i++){
//       if( s[i] !== '!') result += s[i]    // kalau bukan tanda seru tumpuk di variable result
//    }
//    return result;
// }

//* Cara 2
function removeExclamationMarks(s) {
   return s.split('!').join('');
}
console.log(removeExclamationMarks("Hello World!"));
