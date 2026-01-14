console.log("пауза");

let result = Math.pow(2, 10);
console.log(result);

result = Math.sqrt(245);
console.log(result);

let arr = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;
for (let i = 0; i < arr.length; i++) {
  sumOfCubes += Math.pow(arr[i], 3);
}
result = Math.sqrt(sumOfCubes);
console.log(result);



console.log("пауза");



let number = Math.sqrt(379);
console.log(
  'Целое число: ', Math.round(number),
  '\nДесятые числа: ', parseFloat(number.toFixed(1)),
  '\nСотые числа: ', parseFloat(number.toFixed(2))
);

number = Math.sqrt(587);
console.log({
  floor: Math.floor(number),
  ceil: Math.ceil(number)
});


console.log("пауза");


let numbers = [4, -2, 5, 19, -130, 0, 10];
console.log({
  max: Math.max(...numbers),
  min: Math.min(...numbers)
});


console.log("пауза");


let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);


console.log("пауза");


let a = -5;
let b = 3;
console.log(Math.abs(a - b));

a = 10;
b = -7;
console.log(Math.abs(a - b));


console.log("пауза");


let str = 'js';
console.log(str.toUpperCase());

str = 'JS';
console.log(str.toLowerCase());


console.log("пауза");


str = 'я учу javascript!';
console.log(str.substr(5, 4)); 
console.log(str.substring(5, 9)); 
console.log(str.slice(5, 9)); 

str = 'я учу javascript!';
console.log(str.substr(10, 10)); 
console.log(str.substring(10, 21)); 
console.log(str.slice(10, 21));


console.log("пауза");


str = 'https://avatars.mds.yandex.net/i?id=22f79c902eb1fae2210d6c1fc92941232180a276-16492246-images-thumbs&n=13';
console.log(str.startsWith('https://'));

str = 'example.html';
console.log(str.endsWith('.html'));


console.log("пауза");


let elem = '-';
str = '1-2-3-4-5';
while (str.includes(elem)) {
	str = str.replace(elem, '.');
}
console.log(str);


console.log("пауза");


str = '1-2-3-4-5';
console.log(str.split('-'));

str = '12345';
console.log(str.split(''));

arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));


console.log("пауза");


arr = [1, 2, 3];
console.log(arr.shift());

console.log(arr.pop());

arr.push(4, 5, 6);
console.log(arr);

arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);


console.log("пауза");


arr = [1, 2, 3, 4, 5];
let sub = arr.slice(0, 3);
console.log(sub);

sub = arr.slice(3);
console.log(sub);


console.log("пауза");


arr = [1, 2, 3, 4, 5];
arr.splice(1, 3);
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(0, 0, 'a', 'b', 'c');
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(0, 0, 'a', 'b');
arr.splice(2, 0, 2);
arr.splice(-1, 0, 'c');
console.log(arr);


console.log("пауза");


arr = [1, 2, 3, 4, 5];
let res = arr.includes(3);
console.log(res);


console.log("пауза");


obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
console.log(keys);



console.log("пауза");


let num = 12345;
arr = num.toString().split(''); // ← исправленная строка
let sum = 0;
for (let digit of arr) {
	sum += parseInt(digit); // исправлено из-за проблем с типами данных
}
console.log(sum);

num = 12345;
arr = String(num).split('');
sum = 0;
for (let digit of arr) {
	sum += parseInt(digit); // исправлено из-за проблем с типами данных
}
console.log(sum);

num = 12345;
arr = String(num).split('');
sum = 0;
for (let digit of arr) {
	sum += parseInt(digit); // исправлено из-за проблемы с типами данных
}
console.log(sum);

num = 12345;
arr = String(num).split('');
sum = '';
for (let digit of arr) {
	sum += parseInt(digit); // исправлено из-за проблемы с типами данных
}
console.log(sum);

num = 12345;
arr = String(num).split('');
let prod = 1; // начало с 1, а не 0
for (let digit of arr) {
	prod *= parseInt(digit); // исправлено из-за проблемы с типами данных
}
console.log(prod);

console.log("конец программы");