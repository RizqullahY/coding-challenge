// red -> yellow -> green

//* Cara 1
// function updateLight(current) {
// 	if(current === 'green') return 'yellow'
// 	if(current === 'yellow') return 'red'
// 	if(current === 'red') return 'green'
// }

//* Cara 2 ternary
// function updateLight(current) {
// 	return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : current === 'red' ? 'green' : 'errorCode'
// }

//* Cara 3 dengan switch
// function updateLight(current) {
// 	switch (current) {
// 		case "green":
// 			return "yellow";
// 		case "yellow":
// 			return "red";
// 		case "red":
// 			return "green";
// 	}
// }

//* Dengan Rules

const rules = {
   green : 'yellow',
   yellow : 'red',
   red : 'green',
}
function updateLight(current) {
	return rules[current]
}


console.log(updateLight("red"));
