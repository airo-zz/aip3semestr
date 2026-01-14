let date = new Date();
console.log(date.getDate());
console.log("следующее задание");

console.log(date.getMonth() + 1);
console.log("следующее задание");

console.log(date.getFullYear());
console.log("следующее задание");

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

console.log(
	addZero(date.getHours()) + ':' + 
	addZero(date.getMinutes()) + ':' + 
	addZero(date.getSeconds()) + ' ' + 
	addZero(date.getDate()) + '.' + 
	addZero(date.getMonth() + 1) + '.' + 
	date.getFullYear()
);
console.log("следующее задание");

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res);
console.log("следующее задание");

console.log(date.getDay());
console.log("следующее задание");

let day = date.getDay();
if (day === 0 || day === 6) {
	console.log('выходной');
} else {
	console.log('рабочий день');
}
console.log("следующее задание");

let daysUntilSunday = (7 - day) % 7;
console.log(daysUntilSunday);
console.log("следующее задание");

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[date.getMonth()]);
console.log("следующее задание");

let birthday = new Date(1990, 5, 15);
let birthdayDay = birthday.getDay();
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysOfWeek[birthdayDay]);
console.log("следующее задание");

let timestamp = new Date(2025, 0, 1).getTime();
console.log(timestamp);
console.log("следующее задание");

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(diffDays);
console.log("следующее задание");

let birth = new Date(1990, 5, 15);
let now = new Date();
let diffMonths = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
console.log(diffMonths);
console.log("следующее задание");

let date3 = new Date(2000, 8, 1);
let date4 = new Date(2010, 1, 15);
let diffMs = date4 - date3;
console.log(diffMs);
console.log("следующее задание");

console.log(Math.floor(diffMs / (1000 * 60 * 60 * 24)));
console.log("следующее задание");

console.log(Math.floor(diffMonths));
console.log("следующее задание");

console.log(Math.floor((date4 - date3) / (1000 * 60 * 60 * 24 * 365)));
console.log("следующее задание");

let date5 = new Date(2018, 1, 35);
console.log(date5);
console.log("следующее задание");

let date6 = new Date(2018, 15, 1);
console.log(date6);
console.log("следующее задание");

let date7 = new Date(2018, 3, 31);
console.log(date7);
console.log("следующее задание");

let date8 = new Date(2018, 1, 31);
console.log(date8);
console.log("следующее задание");

let date9 = new Date(2018, 12, 33);
console.log(date9);
console.log("следующее задание");

let date10 = new Date(2018, 33, 33);
console.log(date10);
console.log("следующее задание");

let date11 = new Date(2018, 5, 0);
console.log(date11);
console.log("следующее задание");

let date12 = new Date(2018, 0, 0);
console.log(date12);
console.log("следующее задание");

let date13 = new Date(2018, -12, -33);
console.log(date13);
console.log("следующее задание");

let date14 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date14);
console.log("следующее задание");

let date15 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date15);
console.log("следующее задание");

let date16 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date16);
console.log("следующее задание");

function getLastDay(month, year) {
	return new Date(year, month + 1, 0).getDate();
}
console.log(getLastDay(4, 2025));
console.log("следующее задание");

let lastDayMay2025 = new Date(2025, 5, 0);
console.log(daysOfWeek[lastDayMay2025.getDay()]);
console.log("следующее задание");

function isLeap(year) {
	return new Date(year, 2, 0).getDate() === 29;
}
console.log(isLeap(2020));
console.log("следующее задание");

function checkDate(year, month, day) {
	let testDate = new Date(year, month, day);
	return testDate.getFullYear() === year && 
		   testDate.getMonth() === month && 
		   testDate.getDate() === day;
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));
console.log("следующее задание");

let lastDayYear = new Date(date.getFullYear(), 11, 31);
console.log(daysOfWeek[lastDayYear.getDay()]);
console.log("следующее задание");

let prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
console.log(prevMonth);
console.log("следующее задание");

let nextYear = new Date(date.getFullYear() + 1, 11, 31);
console.log(daysOfWeek[nextYear.getDay()]);
console.log("следующее задание");

let nextYearSameDate = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
console.log(daysOfWeek[nextYearSameDate.getDay()]);
console.log("следующее задание");

let prevYearSameDate = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
console.log(daysOfWeek[prevYearSameDate.getDay()]);
console.log("следующее задание");

let jan1 = new Date(date.getFullYear(), 0, 1);
let sep10 = new Date(date.getFullYear(), 8, 10);
let diffDays2 = Math.floor((sep10 - jan1) / (1000 * 60 * 60 * 24));
console.log(diffDays2);
console.log("следующее задание");

let day20 = new Date(date.getFullYear(), date.getMonth(), 20);
let day10Next = new Date(date.getFullYear(), date.getMonth() + 1, 10);
let diffDays3 = Math.floor((day10Next - day20) / (1000 * 60 * 60 * 24));
console.log(diffDays3);
console.log("следующее задание");

let yesterdayNoon = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12);
let diffHours = (date - yesterdayNoon) / (1000 * 60 * 60);
console.log(diffHours);
console.log("следующее задание");

let startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
let hoursPassed = (date - startOfDay) / (1000 * 60 * 60);
console.log(hoursPassed);
console.log("следующее задание");

let endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
let hoursLeft = (endOfDay - date) / (1000 * 60 * 60);
console.log(hoursLeft);
console.log("следующее задание");

let count = 0;
for (let year = 2000; year <= date.getFullYear(); year++) {
	let jan1 = new Date(year, 0, 1);
	if (jan1.getDay() === 0 || jan1.getDay() === 6) {
		count++;
	}
}
console.log(count);
console.log("следующее задание");

let secondsPassed = Math.floor((date - startOfDay) / 1000);
console.log(secondsPassed);
console.log("следующее задание");

let secondsLeft = Math.floor((endOfDay - date) / 1000);
console.log(secondsLeft);
console.log("следующее задание");

let nextYearStart = new Date(date.getFullYear() + 1, 0, 1);
let daysToNewYear = Math.floor((nextYearStart - date) / (1000 * 60 * 60 * 24));
console.log(daysToNewYear);
console.log("следующее задание");

let friday13Count = 0;
for (let month = 0; month < 12; month++) {
	let testDate = new Date(date.getFullYear(), month, 13);
	if (testDate.getDay() === 5) {
		friday13Count++;
	}
}
console.log(friday13Count);
console.log("следующее задание");

let threeMonthsAgo = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());
console.log(threeMonthsAgo.getFullYear());
console.log("следующее задание");

let lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
console.log(daysOfWeek[lastDayMonth.getDay()]);
console.log("следующее задание");

console.log(isLeap(date.getFullYear()));
console.log("следующее задание");

let prevLeap = date.getFullYear() - 1;
while (!isLeap(prevLeap)) {
	prevLeap--;
}
console.log(prevLeap);
console.log("следующее задание");

let nextLeap = date.getFullYear() + 1;
while (!isLeap(nextLeap)) {
	nextLeap++;
}
console.log(nextLeap);
console.log("следующее задание");

let date17 = '2020-11-30';
let date18 = '2020-12-01';
if (date17 > date18) {
	console.log('date17 больше');
} else {
	console.log('date18 больше');
}
console.log("следующее задание");

let date19 = '09-21';
let date20 = '09-23';
if (date19 > date20) {
	console.log('date19 больше');
} else {
	console.log('date20 больше');
}
console.log("следующее задание");

let zodiacDate = '08-20';
if (zodiacDate >= '03-21' && zodiacDate <= '04-19') {
	console.log('Овен');
} else if (zodiacDate >= '04-20' && zodiacDate <= '05-20') {
	console.log('Телец');
} else if (zodiacDate >= '05-21' && zodiacDate <= '06-21') {
	console.log('Близнецы');
} else if (zodiacDate >= '06-22' && zodiacDate <= '07-22') {
	console.log('Рак');
} else if (zodiacDate >= '07-23' && zodiacDate <= '08-22') {
	console.log('Лев');
} else if (zodiacDate >= '08-23' && zodiacDate <= '09-22') {
	console.log('Дева');
} else if (zodiacDate >= '09-23' && zodiacDate <= '10-23') {
	console.log('Весы');
} else if (zodiacDate >= '10-24' && zodiacDate <= '11-22') {
	console.log('Скорпион');
} else if (zodiacDate >= '11-23' && zodiacDate <= '12-21') {
	console.log('Стрелец');
} else if (zodiacDate >= '12-22' && zodiacDate <= '01-20') {
	console.log('Козерог');
} else if (zodiacDate >= '01-21' && zodiacDate <= '02-19') {
	console.log('Водолей');
} else {
	console.log('Рыбы');
}
console.log("следующее задание");

let currentTime = new Date();
let noonToday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
if (currentTime > noonToday) {
	console.log('полдень уже прошел');
} else {
	console.log('полдень еще не наступил');
}
console.log("следующее задание");

let day15 = new Date(date.getFullYear(), date.getMonth(), 15);
if (currentTime > day15) {
	console.log('половина месяца прошла');
} else {
	console.log('половина месяца еще не наступила');
}