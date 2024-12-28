// 1. Barbar
function whatday(num) { 
   return num == 1 ? "Sunday" : 
   num == 2 ? "Monday" :
   num == 3 ? "Tuesday" :
   num == 4 ? "Wednesday" :
   num == 5 ? "Thursday" :
   num == 6 ? "Friday" :
   num == 7 ? "Saturday" :
   "Wrong, please enter a number between 1 and 7"
}

// 2.
function whatday(num) { 
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return (1 <= num && num  <= 7) ? days[num - 1] : "Wrong, please enter a number between 1 and 7"
}