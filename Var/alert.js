let num = 1;	
function func() {
	console.log(num);
}
func();

function func1() {
	console.log(num);
}
num;
num = 1;
func1();
num = 2;
func1();


console.log('Следущее задание')


function func2() {
	let num = 5;
	return num;
}
console.log(func2());


console.log('Следущее задание')


num = 1;
function func3() {
	let num = 2;
}
func3();
console.log(num);


console.log('Следущее задание')


num = 1;
function func11() {
	num = 2;
}
func11();
console.log(num);

num = 1;
function func12() {
	let num = 2;
}
console.log(num);
func12();

num = 1;
function func13() {
	num++;
}
func13();
func13();
func13();
console.log(num);

function func14() {
	num = 2;
}
num = 1;
func14();
console.log(num);


console.log('Следущее задание')


function func21(localNum) {
	console.log(localNum);
}
num = 1;
func21(num);
num = 2;

function func22(localNum) {
	localNum = 2;
}
num = 1;
func22(num);
console.log(num);


function func23(localNum) {
	let num = 2;
}
num = 1;
func23(num);
console.log(num);


console.log('Следущее задание')


function func31(num) {
	num = 2;
}
num = 1;
func31(num);
console.log(num);

function func32() {
	let num = 2;
}
num = 1;
func32();
console.log(num);


console.log('Следущее задание')


function func4(obj) {
	obj.a = '!';
}
let obj = {a: 1, b: 2, c: 3};
func4(obj);
console.log(obj);

function func41(arr) {
	arr.splice(1, 1);
}
let arr = [1, 2, 3];
func41(arr);
console.log(arr);

function func42(arr) {
	let newArr = arr;
	newArr[0] = '!';
}
arr = [1, 2, 3];
func42(arr);
console.log(arr);












































































