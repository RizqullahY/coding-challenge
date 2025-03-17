// dari km/jam menjadi cm/detik
// 1km / 1jam | 100000cm / 3600detik

function cockroachSpeed(s){
   return Math.floor((s * 100000) / 3600)
}

console.log(cockroachSpeed(1.09))