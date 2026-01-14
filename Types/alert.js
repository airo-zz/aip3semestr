function func() {
	return '!';
}
console.log(func);


console.log('Следущее задание')


function func() {
  return 'Hello, World!';
}

console.log(func());

console.log(func);

func = 123;
console.log(func);


console.log('Следущее задание')


function func1() {
  return 3;
}

let func2 = func1; 

console.log(func1() + func2()); 


console.log('Следущее задание')


func1 = function() {
  return 1;
};

func2 = function() {
  return 2;
};

console.log(func1() + func2()); 


console.log('Следущее задание')


function func() {
	console.log('!');
}


console.log('Следущее задание')


function func8() {
  console.log('!');
}
func8(); 

func = function() {
  console.log('!');
};
func();


console.log('Следущее задание')


let funcу = function() { console.log('!'); }
let funcц = function() {
  console.log('!');
};
function funcы() {
  console.log('!');
}


console.log('Следущее задание')


function func() {
	console.log('!');
}

!function func() {
	console.log('!');
}

1 + function func() {
	console.log('!');
}


console.log('Следущее задание')


let test = function func() { console.log('!'); }
console.log(test()); // выведет ошибку в консоль

console.log(
  function func() {
    console.log('!');
  }
);

function func() { console.log('!'); }
console.log(func()); // выведет '!'


console.log('Следущее задание')


- function func() {
  console.log('!');
}

-1 // выражение не заканчивается точкой с запятой, но это не имеет значения, потому что оно уже является завершенным
function func() {
  console.log('!');
}

1 // выражение не заканчивается точкой с запятой и поэтому считается незавершенным
function func() {
  console.log('!');
}


console.log('Следущее задание')


let arr = [
  function() { return 1; },
  function() { return 2; },
  function() { return 3; },
];

console.log(arr[2]());

for (let func of arr) {
  console.log(func());
}


console.log('Следущее задание')


let obj = {
  func1: function() { return 1; },
  func2: function() { return 2; },
  func3: function() { return 3; },
};

console.log(obj.func1() + obj.func2() + obj.func3());

for (let key in obj) {
  console.log(obj[key]());
}


console.log('Следущее задание')


let math = {
  sum: function(arr) { return arr.reduce((a, b) => a + b, 0); },
  squareSum: function(arr) { return arr.reduce((a, b) => a + b * b, 0); },
  cubeSum: function(arr) { return arr.reduce((a, b) => a + b * b * b, 0); },
};
console.log(math.sum([1, 2, 3, 4, 5])); // выведет 15
console.log(math.squareSum([1, 2, 3, 4, 5])); // выведет 55
console.log(math.cubeSum([1, 2, 3, 4, 5])); // выведет 225


