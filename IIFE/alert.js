!function() {
	console.log('!');
}();


console.log('Следущее задание')


let result = (function() {
	return '!';
});
console.log(result());


console.log('Следущее задание')


console.log('Три вызова');
(function() {
    return function() {
        return function() {
            console.log('!');
        };
    };
})()()();

console.log('Сумма двух чисел');
(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    };
})(1)(2);
(function(a) {
    return function(b) {
        console.log(a + b);
    };
})(5)(10);

console.log('Задание 3: Сумма трех чисел');
(function(num1) {
    return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3);
        };
    };
})(1)(2)(3); 
(function(x) {
    return function(y) {
        return function(z) {
            console.log(x + y + z);
        };
    };
})(10)(20)(30);


console.log('Следущее задание')


let counter = (function() {
    let num = 1;
    return function() {
        console.log(num);
        num++;
    };
})();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5
counter(); // 6 (продолжает считать)

let cyclicCounter = (function() {
    let num = 1;
    return function() {
        console.log(num);
        
        if (num >= 5) {
            num = 1; // сбрасываем на 1 при достижении 5
        } else {
            num++;
        }
    };
})();
cyclicCounter(); // 1
cyclicCounter(); // 2
cyclicCounter(); // 3
cyclicCounter(); // 4
cyclicCounter(); // 5
cyclicCounter(); // 1 (сброс)
cyclicCounter(); // 2
cyclicCounter(); // 3


