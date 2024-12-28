// kalau w dan l beda kembalikan keliling kalau sama kembalikan luas

//* Cara 1
// const areaOrPerimeter = function (l, w) {
//    return l === w ? l * w : 2 * ( l + w );
// };


//* Cara 2 
const areaOrPerimeter = function (l, w) {
   if (l === w) return l * w;
   else return 2 * ( l + w );
};
console.log(areaOrPerimeter(3,  3))