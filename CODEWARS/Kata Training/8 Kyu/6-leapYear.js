//? https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year) {
	if (year % 4 == 0) {
		return `${year} has 366 days`;
	} else if (year % 100 == 0) {
		return `${year} has 366 days`;
	} else {
		return `${year} has 365 days`;
	}
}

console.log(yearDays(-800));
