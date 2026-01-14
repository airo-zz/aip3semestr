let test1 = 5;
if (test1 > 10) {
    console.log('+++');
} else {
    console.log('---');
}
let test2 = 15;
if (test2 < 10) {
    console.log('+++');
} else {
    console.log('---');
}
let test3 = 5;
if (test3 >= 10) {
    console.log('+++');
} else {
    console.log('---');
}
let test4 = 15;
if (test4 <= 10) {
    console.log('+++');
} else {
    console.log('---');
}

let test = 5;
if (test == 10) {
    console.log('+++');
} else {
    console.log('---'); 
}

test = 5;
if (test != 10) {
    console.log('+++'); 
} else {
    console.log('---');
}

test1 = 5;
test2 = 3;
if (test2 > test1) {
    console.log('+++');
} else if (test2 < test1) {
    console.log('---');
} else {
    console.log('=='); 
}
test3 = 10;
test4 = 5;
if (test3 != test4) {
    console.log('!='); 
} else if (test3 == test4) {
    console.log('==');
}

test = 'abc';
if (test == 'abc') {
    console.log('+++');
} else {
    console.log('---');
}
test1 = 'hello';
test2 = 'world';
if (test1 != test2) {
    console.log('!='); 
} else if (test1 == test2) {
    console.log('==');
}

if ('3' == 3) {
    console.log('+++'); 
} else {
    console.log('---');
}
test1 = '123';
test2 = 123;
if (test1 != test2) {
    console.log('!=');
} else if (test1 == test2) {
    console.log('==');
}

test1 = '3';
test2 = '3';	
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = '3';
test2 = '3';
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = '3';
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = '3';	
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = 3;	
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');
}

test1 = '3';
test2 = '3';	
if (test1 != test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = '3';
test2 = '3';	
if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = '3';
if (test1 != test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = '3';	
if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---');
}
test1 = 3;
test2 = 2;
if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 5;
if (num > 0 && num < 5) {
    console.log('+++');
} else {
    console.log('---');
}
num = 15;
if (num >= 10 && num <= 20) {
    console.log('+++');
} else {
    console.log('---');
}
let num1 = 0;
let num2 = 4;
if (num1 <= 1 && num2 >= 3) {
    console.log('+++');
} else {
    console.log('---');
}

num1 = -10;
num2 = -10;
if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
num1 = 0;
num2 = 0;
if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
num1 = 0;
num2 = 5;
if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
num1 = 5;
num2 = 5;
if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
num1 = -5;
num2 = 15;
if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}
num = 1;
if (num == 0 || num == 1) {
	console.log('+++');
} else {
	console.log('---');
}
num = 2;
if (num == 0 || num == 1) {
	console.log('+++');
} else {
	console.log('---');
}
num = 2;
if (num == 0 || num == 1 || num == 2) {
	console.log('+++');
} else {
	console.log('---');
}


// порядок выполнения сравнения:
// 1. num == 0 || ...
// 2. ... && num > 1
// 3. ... && num > 1 && num < 5
num = 4;
if (num == 0 || num > 1 && num < 5 ) {
    console.log('+++');
} else {
    console.log('---'); // сработает это
}

num = 3;	
if (num > 5 && num < 10 || num == 20) {
	console.log('+++');
} else {
	console.log('---');
}
num = 3;	
if (num > 5 || num > 0 && num < 3) {
	console.log('+++');
} else {
	console.log('---');
}
num = 3;	
if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
	console.log('+++');
} else {
	console.log('---');
}

if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

test = true;
if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}
if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}
if (!test) {
	console.log('+++');
} else {
	console.log('---');
}
if (!test) {
	console.log('+++');
} else {
	console.log('---');
}


/*
какие значения при приведении к логическому типу дают false?
В JavaScript такие значения:
0
'' (пустая строка)
null
undefined
NaN (не определено)
*/
test = 1;
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
test = 0;
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
test = 1;	
if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}
test = 1;	
if (test != true) {
	console.log('+++');
} else {
	console.log('---');
}
test = '';
if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}
test;	
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
test = 3 * 'a';		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}


test = true;
if (test) {
  console.log('+++');
} else {
  console.log('---');
}


test = true;
if (!test) {
  console.log('+++');
} else {
  console.log('---');
}
test = true;
if (!test) {
  console.log('+++');
} else {
  console.log('---');
}
test = true;
if (test !== false) {
  console.log('+++');
} else {
  console.log('---');
}


test = 3;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = 'abc';
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = '';
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = 3 * 'abc';
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = null;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = false;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = 0;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = '0';
if (test) {
	console.log('+++');
} else {
	console.log('---');
}
test = -1;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}


test1 = true;
test2 = true;
if (test1 && test2) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
if (test1 && !test2) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
if (!test1 && !test2) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
if (test1 && test2 === true) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 && test2 && test3) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 || (test2 && test3)) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 || (test2 !== true && test3 !== true)) {
  console.log('+++');
} else {
  console.log('---');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 || (test2 === false && test3 === false)) {
  console.log('+++');
} else {
  console.log('---');
}


test = true;
console.log(test ? 'yes' : 'no');


test = -1;
if (test > 0) console.log('+++'); else console.log('---');
test = -1;
if (test > 0) { console.log('+++'); }
else console.log('---');


let day = 20;
if (day >= 1 && day <= 10) {
	console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
	console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
	console.log("Третья декада");
} else {
	console.log('Некорректное значение переменной day');
}
day = "20";
if (day >= 1 && day <= 10) {
	console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
	console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
	console.log("Третья декада");
} else {
	console.log('Некорректное значение переменной day');
}


num = 12;
if (num >= 10 && num <= 99) {
	if (num > 45) {
		console.log('сумма цифр двухзначна');
	} else if (num > 34) {
		console.log('сумма цифр однозначна или две цифры');
	} else {
		console.log('сумма цифр однозначна');
	}
} else {
	console.log('число не попадает в диапазон от 10 до 99');
}


let lang = 'ru';
switch (lang) {
	case 'ru':
		console.log('рус');
	break;
	case 'en':
		console.log('анг');
	break;
	case 'de':
		console.log('нем');
	break;
	default:
		console.log('язык не поддерживается');
	break;
}


num = 1;
let res = num >= 0 ? '1' : '2';
console.log(res);


let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b); 
a = 5 * (7 - 4);
b = 1 + 2 + 7;
console.log(a > b); 
a = 2 ** 4;
b = 4 ** 2;
console.log(a != b); 


let age = confirm('Есть ли вам уже 18 лет?');
if (age = 0) {
	alert('Этот сайт предназначен только для взрослых!');
} else {
	console.log('В доступе запрещено');
}


let adult; 
age = prompt(`Мне есть 18`,`да`)
if (age = 1) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);


age = 17;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult); 
age = 17;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
age = 17;
if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res); 
age = 19;
if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res); 



let min = 10;
if (min >= 0 && min <= 19) {
	console.log('1 треть');
}
if (min >= 20 && min <= 39) {
	console.log('2 треть');
}
if (min >= 40 && min <= 59) {
	console.log('3 треть');
}


let arr = [1, 2, 3];
if (arr.length === 3) {
	let sum = arr.reduce((a, b) => a + b);
	console.log(sum); 
}


let str = '12345';
if (str[0] == a) {
	console.log('!');
}
str = '12345';
let first = str[0];
if (first == 'x') {
	console.log('!');
}
str = '12345';
if (str[0] == a) {
	console.log('!');
}
if (str[0] == b) {
	console.log('!');
}


num = 12345;
let last = String(num)[String(num).length - 1];
if (last == 0) {
	console.log('+++');
} else {
	console.log('---');
}
num = 12345;
last = String(num)[String(num).length - 1];
if (['0', '2', '4', '6', '8'].includes(last)) {
	console.log('четное');
} else {
	console.log('нечетное');
}


a = 12;
if (a % 2 === 0) {
	console.log('четное');
} else {
	console.log('нечетное');
} 
a = 12;
if (a % 3 === 0) {
	console.log('делится на 3');
} else {
	console.log('не делится на 3');
}


/*
num1 = 1;
num2 = 2;
if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
num1 = '1';
num2 = '2';
if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}
num = 123;
if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}
if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}
if (String(num)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}
first = String(num)[0];
if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}
if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
num = 12;
if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
str = Number(str);
if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
if (String(num.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}
if (String(num).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
}
if (String(num).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
}
num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];
if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
*/


let month = 12;
if (month <= 2 || month === 12) {
	console.log('зима');
} else if (month >= 3 && month <= 5) {
	console.log('весна');
} else if (month >= 6 && month <= 8) {
	console.log('лето');
} else if (month >= 9 && month <= 11) {
	console.log('осень');
}
str = 'abcde';
if (str[0] === 'a') {
	console.log('да');
} else {
	console.log('нет');
}
num = 12345;
if (num >= 1 && num <= 33) {
	console.log('да');
} else {
	console.log('нет');
}
num = 123;
sum = parseInt(num.toString()[0]) + parseInt(num.toString()[1]) + parseInt(num.toString()[2]);
console.log(sum);
num = 123456;
sum1 = parseInt(num.toString().slice(0, 3));
sum2 = parseInt(num.toString().slice(3));
if (sum1 === sum2) {
	console.log('да');
} else {
	console.log('нет');
}