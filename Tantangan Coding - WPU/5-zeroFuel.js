// bensin habis, pom bensi 50mil, 25mil per-galon, jadi punya 2 galon


//* Cara 1
// const zeroFuel = (distanceToPump , mpg , fuelLeft) => {
//    return distanceToPump / mpg <= fuelLeft;
// }

//* Cara 2
const zeroFuel = (distanceToPump , mpg , fuelLeft) => distanceToPump <= mpg * fuelLeft

console.log(zeroFuel(50,25,1))