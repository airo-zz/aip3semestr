let date1 = new Date();
console.log(date1.getDate());

let date2 = new Date();
console.log(date2.getMonth());

let date3 = new Date();
console.log(date3.getFullYear());



console.log("следущее задание"); 


function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}
let date = new Date();
let formattedDate =
  addZero(date.getHours()) +
  ':' +
  addZero(date.getMinutes()) +
  ':' +
  addZero(date.getSeconds()) +
  ' ' +
  addZero(date.getDate()) +
  '.' +
  addZero(date.getMonth() + 1) +
  '.' +
  date.getFullYear();
console.log(formattedDate);


console.log("следущее задание"); 

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res);

str = '2025-12-31';
let arr = str.split('-');
res = arr[2] + '.' + arr[1] + '.' + arr[0];
console.log(res);


console.log("следущее задание"); 


date1 = new Date();
console.log(date1.getDay());

date2 = new Date();
let day = date2.getDay();

if (day === 0 || day === 6) {
  console.log('Сегодня выходной день');
} else {
  console.log('Сегодня рабочий день');
}

date3 = new Date();
let day3 = date3.getDay();
let daysToSunday = 0;
if (day3 !== 0) {
  daysToSunday = 7 - day3;
}
console.log('До ближайшего воскресенья осталось ' + daysToSunday + ' дней.');


console.log("следущее задание"); 


let months = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
date = new Date();
let month = date.getMonth();
console.log(months[month]);


console.log("следущее задание"); 


let birthday = new Date(1990, 1, 1); 
day = birthday.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log('В мой день рождения был ' + days[day]);


console.log("следущее задание"); 


date = new Date(2025, 0, 1); 
let timestamp = date.getTime();
console.log(timestamp);


console.log("следущее задание"); 


date1 = new Date(1988, 2, 1);
date2 = new Date(2000, 0, 10);

let diff = date2.getTime() - date1.getTime();
days = diff / (1000 * 60 * 60 * 24);
console.log(days);

birthday = new Date(1990, 0, 1); 
let now = new Date();

let diff2 = now.getTime() - birthday.getTime();
months = diff2 / (1000 * 60 * 60 * 24 * 30.44); 
console.log(months);


console.log("следущее задание"); 


date1 = new Date(2000, 8, 1); 
date2 = new Date(2010, 1, 15);
diff = date2 - date1;
console.log(diff);

date3 = new Date(2000, 8, 1);
let date4 = new Date(2010, 1, 15);
let diffDays = (date4 - date3) / (1000 * 60 * 60 * 24); // Разница в днях
console.log(diffDays);

let date5 = new Date(2000, 8, 1);
let date6 = new Date(2010, 1, 15);
let diffMonths = (date6 - date5) / (1000 * 60 * 60 * 24 * 30.44); // Приблизительная разница в месяцах
console.log(diffMonths);

let date7 = new Date(2000, 8, 1);
let date8 = new Date(2010, 1, 15);
let diffYears = (date8 - date7) / (1000 * 60 * 60 * 24 * 365.25); // Приблизительная разница в годах (учитываем високосные года)
console.log(diffYears);



console.log("следущее задание"); 


date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // какая дата будет?

date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date); // какая дата будет?

date = new Date(2018, 0, 0);
console.log(date); // какая дата будет?

date = new Date(2018, 12, 33);
console.log(date); // какая дата будет?

date = new Date(2018, 3, 31);
console.log(date); // какая дата будет?

date = new Date(2018, 1, 35);
console.log(date); // какая дата будет?


console.log("следущее задание"); 


function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); 
  return date.getDate();
}
console.log(getLastDayOfMonth(2020, 2)); 
console.log(getLastDayOfMonth(2025, 1));

function getDayOfWeekForLastDay(year, month) {
  let date = new Date(year, month + 1, 0);
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}
console.log(getDayOfWeekForLastDay(2025, 4)); 


console.log("следущее задание"); 


function isLeap(year) {
  let date = new Date(year, 2, 0);
  return date.getDate() === 29;
}
console.log(isLeap(2020)); // true
console.log(isLeap(2021)); // false


console.log("следущее задание"); 


function checkDate(year, month, day) {
  let date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false


console.log("следущее задание"); 


now = new Date(); 
date = new Date(now.getFullYear(), 11, 31);
console.log(date.getDay()); 


console.log("следущее задание"); 


























