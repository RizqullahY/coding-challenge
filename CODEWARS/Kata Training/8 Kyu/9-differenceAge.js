
function differenceInAges(ages){
   let result = [];
   const v1 = ages.sort((a , b) => a - b)[0]
   result.push(v1)
   const v2 = ages.sort((a , b) => b - a)[0]
   result.push(v2)
   const v3 = v2 - v1
   result.push(v3)
   return result
}

console.log(differenceInAges([82, 15, 6, 38, 35]))