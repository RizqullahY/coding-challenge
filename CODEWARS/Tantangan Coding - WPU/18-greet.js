//  namanya sama maka keluar output "hallo boss" : "hallo guest" 

//* Cara 1
// function greet(name, owner) {
//    const g1 =  'Hello boss';
//    const g2 =  'Hello guest'; 
//    if(name === owner){
//       return g1
//    }else{
//       return g2
//    }
// }


//* Cara 2
function greet(name, owner) {
   return name === owner ? 'Hello boss' : 'Hello guest'
}
console.log(greet('Daniel', 'Daniel'))
console.log(greet('Daniel', 'Owen'))