function test(func1, func2, func3) {
	console.log( func1() + func2() + func3() );
}
test(
	function() {return 1;},
	function() {return 2;},
	function() {return 3;}
);


console.log('Следущее задание')


function test(func1, func2, func3) {
	return func1() + func2() + func3();
}
function get1() { return 1; }
function get2() { return 2; }
function get3() { return 3; }
console.log(test(get1, get2, get3)); 

function get1() { return 1; }
function get2() { return 2; }
function get3() { return 3; }
console.log(test(get1, get2, get3)); 
function test(func1, func2, func3) {
	return func1() + func2() + func3();
}

get1 = function() { return 1; };
get2 = function() { return 2; };
get3 = function() { return 3; };
console.log(test(get1, get2, get3)); 
function test(func1, func2, func3) {
	return func1() + func2() + func3();
}


console.log('Следущее задание')


function test(func) {
	console.log( func(3) );
}
test(function(num) {
	return num * num * num;
});

function func(num) {
	return num * num * num;
}
test(func);

func = function(num) {
	return num * num * num;
};
test(func);

function func(a, b) {
	return a + b;
}
test(func);


console.log('Следущее задание')


/*function test(num, func1, func2) {
	return func1(num) + func2(num);
}
test(3, function(num) { return num * num; }, function(num) { return num * num * num; });*/
function test122(num, ...funcs) {
  let result = num;
  for (let func of funcs) {
    result += func(num);
  }
  return result;
}
test122(3, function(num) { return num * num; }, function(num) { return num * num * num; });


console.log('Следущее задание')


/*function test(arr, func) {
  return arr.map(func);
}

let result = test([1, 2, 3], function(num) { return num * num * num; });
console.log(result);*/


console.log('Следущее задание')


function func1233(num1, num2) {
    function square(num) {
        return num * num;
    }
    function cube(num) {
        return num * num * num;
    }
    return square(num1) + cube(num2);
}
console.log(func1233(2, 3)); 
console.log(func1233(1, 2)); 
console.log(func1233(3, 1)); 
console.log(func1233(4, 2)); 


console.log('Следущее задание')


function func1() {
	return function() { return 1; };
}
console.log(func1()()); // выведет 1

function func2() {
	return function() { return 2; };
}

console.log(func2()()); // выведет 2

let result1 = func1()();
let result2 = func2()();
console.log(result1 + result2); // выведет 3


console.log('Следущее задание')


function func111() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}
console.log(func111()()()()()); // выведет '!'
console.log(typeof func111()); // 'function'
console.log(typeof func111()()); // 'function' 
console.log(typeof func111()()()); // 'function'
console.log(typeof func111()()()()); // 'function'
console.log(typeof func111()()()()()); // 'string'


console.log('Следущее задание')


function func112(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}
console.log(func112(2)(3)(4)); // выведет 9

function collect(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function() {
                    return [a, b, c, d];
                };
            };
        };
    };
}
console.log(collect(2)(3)(4)(5)()); // [2, 3, 4, 5]


console.log('Следущее задание')


function each(arr, callback) {
    let result = [];
    
    for (let elem of arr) {
        result.push(callback(elem));
    }
    
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let doubled = each(numbers, function(num) {
    return num * 2;
});
console.log('Задание 1 - Удвоение:', doubled);

let strings = ['hello', 'world', 'javascript'];
let reversed = each(strings, function(str) {
    return str.split('').reverse().join('');
});
console.log('Задание 2 - Переворот:', reversed);

let words = ['apple', 'banana', 'cherry'];
let capitalized = each(words, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log('Задание 3 - Заглавные:', capitalized);


console.log('Следущее задание')


function each(arr, callback) {
    let result = [];
    
    for (let elem of arr) {
        result.push(callback(elem));
    }
    
    return result;
}
function cube(num) {
    return num ** 3;
}
numbers = [1, 2, 3, 4, 5];
let result = each(numbers, cube);
console.log('Исходный массив:', numbers);
console.log('Массив в кубе:', result); // [1, 8, 27, 64, 125]


console.log('Следущее задание')


function filter(arr, callback) {
    let res = [];
    for (let elem of arr) {
        if (callback(elem) === true) {
            res.push(elem);
        }
    }
    return res;
}
let original = filter([1, 2, 3, 4, 5], function(elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});

let simplified = filter([1, 2, 3, 4, 5], elem => elem > 0);
console.log('Оригинальная функция:', original);    // [1, 2, 3, 4, 5]
console.log('Упрощенная функция:', simplified);    // [1, 2, 3, 4, 5]
console.log('Результаты одинаковы:', JSON.stringify(original) === JSON.stringify(simplified));
