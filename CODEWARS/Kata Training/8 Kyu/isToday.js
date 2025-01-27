function isToday(date) {
   let dateNow = new Date;
   let monthNow = new Date;
   let yearNow = new Date;
   dateNow = dateNow.getDate();
   monthNow = monthNow.getMonth();
   yearNow = yearNow.getFullYear();
   return date.getDate() == dateNow && date.getMonth() == monthNow && date.getFullYear() == yearNow;
}

const today = new Date();
console.log(today)
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow))
console.log(isToday(today))
console.log(isToday(new Date("2024-06-16")))
