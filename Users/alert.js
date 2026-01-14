function sayName() {
    console.log('время - единственное измерение которое постоянно куда-то идет');
}
sayName();

function sumNumbers() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    console.log(total);
}
sumNumbers();

console.log('Следущее задание')

function cube(num) {
    console.log(Math.pow(num, 3));
}
cube(2); // выведет 8
cube(3); // выведет 27

function checkSign(num) {
    if (num > 0) {
        console.log('+++');
    } else if (num < 0) {
        console.log('---');
    } else {
        console.log('0');
    }
}

checkSign(2); // выведет '+++'
checkSign(-3); // выведет '---'
checkSign(0); // выведет '0

console.log('Следущее задание')

function sumThreeNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
sumThreeNumbers(1, 2, 3); // выведет 6

console.log('Следущее задание')

function func(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3); // выведет 6

console.log('Следущее задание')

function aboba(num = 5) {
	console.log(num * num);
}
aboba(2);
aboba(3);
aboba();

console.log('Следущее задание')

function cube(num) {
    return num ** 3;
}
let res = cube(3);
console.log(res); // выведет 27

function sqrt(num) {
    return Math.sqrt(num);
}
let res1 = sqrt(3);
let res2 = sqrt(4);
console.log(res1 + res2); // выведет сумму квадратных корней из 3 и 4

console.log('Следущее задание')

function square(num) {
    return num ** 2;
}
function cube(num) {
    return num ** 3;
}
res = cube(square(2));
console.log(res); // выведет куб квадрата числа 2

function square(num) {
    return num ** 2;
}
function sum(num1, num2) {
    return num1 + num2;
}
res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res); // выведет сумму квадратов чисел 2 и 3

function sqrt(num) {
    return Math.sqrt(num);
}
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res); // выведет сумму корней чисел 2, 3 и 4

console.log('Следущее задание')

function etc(num) {
	let i = 0;
	while (true) { // бесконечный цикл
		if (num < 10) {
			break; // выходим из цикла, если условие выполняется
		}
		num /= 2;
		i++;
	}
	return i; // добавлена инструкция return
}
res = etc(16);
console.log(res); // будет выведено количество итераций

console.log('Следущее задание')

function mimimishka(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(mimimishka(3, 4));

console.log('Следущее задание')

function isEven(arr) {
	for (let elem of arr) {
		if (elem % 2 !== 0) {
			return false;
		}
	}
	return true;
}
console.log(isEven([2, 4, 6])); // выведет true
console.log(isEven([1, 3, 5])); // выведет false

function isOdd(num) {
	let strNum = num.toString();
	for (let i = 0; i < strNum.length; i++) {
		if (parseInt(strNum[i]) % 2 === 0) {
			return false;
		}
	}
	return true;
}
console.log(isOdd(123)); // выведет true
console.log(isOdd(246)); // выведет false

function hasConsecutiveDuplicates(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			return true;
		}
	}
	return false;
}
console.log(hasConsecutiveDuplicates([1, 2, 3])); // выведет false
console.log(hasConsecutiveDuplicates([1, 1, 3])); // выведет true

console.log('Следущее задание')

function nanoka(a, b) {
	return a > b;
}
console.log(nanoka(5, 3)); // выведет true
console.log(nanoka(3, 5)); // выведет false

function jojofag(a, b) {
	return a == b;
}
console.log(jojofag(5, 5)); // выведет true
console.log(jojofag(5, 3)); // выведет false

function kokosik(num) {
	return num >= 0;
}
console.log(kokosik(5)); // выведет true
console.log(kokosik(-5)); // выведет false

function persey(a, b) {
	return a != b;
}
console.log(persey(5, 5)); // выведет false
console.log(persey(5, 3)); // выведет true

console.log('Следущее задание')

function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log(func1() + func2());

function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log(func1() + func2());

function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
		return num.toString();
	}
}
console.log(add(10));

function getDigitsSum(num) {
	let arr = num.toString().split('');
	let sum = 0;
	for (let elem of arr) {
		sum += parseInt(elem);
	}
	return sum;
}
console.log(getDigitsSum(12345));

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(13));

console.log('Практические задания')

function getDivisors(num) {
	let divisors = [];
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]

function getCommonDivisors(num1, num2) {
	let commonDivisors = [];
	for (let i = 1; i <= Math.min(num1, num2); i++) {
		if (num1 % i === 0 && num2 % i === 0) {
			commonDivisors.push(i);
		}
	}
	return commonDivisors;
}
console.log(getCommonDivisors(12, 18)); // [1, 2, 3, 6]

function getSumOfDigits(num) {
	let sum = 0;
	while (num > 0) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	return sum;
}
console.log(getSumOfDigits(123)); // 6

function getCurrentDayOfWeek() {
	let date = new Date();
	let day = date.getDay();
	
	switch (day) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
}

console.log(getCurrentDayOfWeek()); // Monday

function getDayOfWeek(date) {
	let dateObj = new Date(date);
	let day = dateObj.getDay();
	switch (day) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
}
console.log(getDayOfWeek("2022-01-03")); // Monday

function getDaysFromSeconds(seconds) {
	let days = Math.floor(seconds / (60 * 60 * 24));
	return days;
}
console.log(getDaysFromSeconds(86400)); // 1

function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
		return true;
	} else {
		return false;
	}
}
console.log(isLeapYear(2020)); // true

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(23)); // true

















