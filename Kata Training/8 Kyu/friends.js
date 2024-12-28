// function friend(friends){

//    let result = []
//    for (let i = 0; i < friends.length; i++) {
//       friends[i].length == 4 ? result.push(friends[i]) : false
//    }
//    return result
// }

function friend(friends){
   return friends.filter(n => n.length === 4)
}

console
.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))