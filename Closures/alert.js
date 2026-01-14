function test() {
	let num1 = 1;
	let num2 = 2;
	return function() {
		return num1 + num2;
	}
}
let func = test();
console.log(func());

function test() {
	let num1 = 1;
	let num2 = 2;
	return function() {
		return num1 + num2;
	}
}
console.log(test()());


console.log('Следущее задание')


function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    };
}
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5

function createCountdown() {
    let number = 10;
    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        }
        return number;
    };
}
const countdown = createCountdown();
countdown(); // 9
countdown(); // 8
countdown(); // 7
countdown(); // 6
countdown(); // 5

function createSmartCountdown() {
    let number = 10;
    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        } else {
            console.log('Отсчет окончен!');
        }
        return number;
    };
}
const smartCountdown = createSmartCountdown();
smartCountdown(); // 9
smartCountdown(); // 8
smartCountdown(); // 7
smartCountdown(); // 6
smartCountdown(); // 5
smartCountdown(); // 4
smartCountdown(); // 3
smartCountdown(); // 2
smartCountdown(); // 1
smartCountdown(); // 0
smartCountdown(); // "Отсчет окончен!"
smartCountdown(); // "Отсчет окончен!"


console.log('Следущее задание')


function test123() {
	let counter = 0;
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}
func3 = test123();
let func1 = func3();
let func2 = func3();
func1();
func2();
func1();
func2();