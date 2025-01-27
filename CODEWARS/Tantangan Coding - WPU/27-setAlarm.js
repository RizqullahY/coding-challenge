
//* Cara 1 if statment biasa 
// function setAlarm(employed, vacation){
//    if(employed == true && vacation == false) return true
//    return false
// }


//* Cara 2 jadi ternary
// function setAlarm(employed, vacation){
//    return (employed == true && vacation == false) ? true : false
// }


//* Cara 3 OneeLiner
const setAlarm = (employed, vacation) => (employed == true && vacation == false) ? true : false

console.log(setAlarm(true, false))