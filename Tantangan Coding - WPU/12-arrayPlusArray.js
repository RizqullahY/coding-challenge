// ingin menambahkan 2 array, kalau dijumlahkan langsung maka error

//* Cara 1 di looping satu - satu
// function arrayPlusArray(arr1, arr2) {
//    let total = 0;
//    for( i = 0 ; i < arr1.length ; i++ ){
//       total += arr1[i]
//    }for( i = 0 ; i < arr2.length ; i++ ){
//       total += arr2[i]
//    }
//    return total;
// }


//* Cara 2 menggunakan argument iterator yang dinamis
// function arrayPlusArray(arr1, arr2) {
//    let total = 0;
//    for( i = 0 ; i < arguments.length ; i++){          // dalam function di-hitung / looping berapa isinya (parameter)
//       for( j = 0 ; j < arguments[i].length ; j++){    // karna studi kasusnya adalah array maka dilooping lagi berapa isinya
//          total += arguments[i][j]         // dijumlahkan
//       }
//    }
//    return total;
// }


//* Cara 3 spread operator
// function arrayPlusArray(arr1, arr2) {
//    let newArray = [...arr1,...arr2];   // dipecah dari array-nya dan digabung ke sebuah array baru
//    let total = 0;
//    for(i = 0 ; i < newArray.length ; i++){
//       total += newArray[i];
//    }
//    return total;
// }

//* Cara 4 reduce
function arrayPlusArray(arr1, arr2) {
   return [...arr1,...arr2].reduce((acc,curr) => acc + curr) ;   
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))