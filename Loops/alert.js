let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
  console.log(elem);
}



let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
  console.log(key);
}



obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
  console.log(obj[key]); 
}



let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

i = 11;
while (i <= 33) {
  console.log(i);
  i++;
}

i = 100;
while (i >= 1) {
  console.log(i);
  i--;
}

let num = 1;
let iterations = 0;
while (num <= 1000) {
  num *= 3;
  iterations++;
}
console.log(num); 
console.log(iterations); 




for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 11; i <= 33; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

for (let i = 100; i >= 0; i--) {
  console.log(i);
}



arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];		
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
	if (obj[key] % 2 !== 0) {
		console.log(key + ": " + obj[key]);
	}
}




let res = 0;
for (let i = 2; i <= 100; i += 2) {
  res += i;
}
console.log(res);

res = 0;
for (let i = 1; i <= 99; i += 2) {
  res += i;
}
console.log(res);

res = 1;
for (let i = 2; i <= 20; i++) {
  res *= i;
}
console.log(res);



arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (let elem of arr) {
  res += elem;
}
console.log(res); 

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (let elem of arr) {
  if (elem % 2 === 0) {
    res += elem;
  }
}
console.log(res); 

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (let elem of arr) {
  res += Math.pow(elem, 2);
}

console.log(res);
arr = [2, 5, 9, 3, 1, 4];
res = 1;
for (let elem of arr) {
  res *= elem;
}
console.log(res); 



for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	console.log(str[0]);
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	console.log(parseInt(str[0]) + parseInt(str[1])); 
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if (str[0] === '1') {
		console.log(i);
	}
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if (parseInt(str[0]) + parseInt(str[1]) === 5) {
		console.log(i);
	}
}

console.log('parseInt - преобразовывает строку в целое число')



arr = [1, 2, 3, 4, 5];
for (let elem of arr)
console.log(elem);




arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem == 0) {
		break;
	}
	console.log(elem);
}

arr = [1, -2, 3, 4, 5];
sum = 0;
for (let elem of arr) {
	if (elem < 0) {
		break;
	}
	sum += elem;
}
console.log(sum);

arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 3) {
		break;
	}
}
console.log(i);

sum = 0;
for (let i = 1; sum <= 100; i++) {
	sum += i;
}
console.log(i - 1);



for (let i = 1; i <= 100; i++) {
	if (i % 2 !== 0) { 
		continue;
	}
	console.log(i);
}



for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		if (i === j) { 
			document.write(i * 10 + i);
		} else { 
			document.write(i * 10 + j);
		}
	}
}




arr = [2, 5, 8, 1, 9];
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] ** 2;
}
console.log(arr); 

arr = [3, 7, 2, 9, 5];
for (let i = 0; i < arr.length; i++) {
	arr[i] -= 1;
}
console.log(arr); 

arr = [5, 2, 7, 9, 1];
for (let i = 0; i < arr.length; i++) {
	arr[i] += 10;
}
console.log(arr); 



let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};
for (let i = 0; i < arr1.length; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let new_obj = {};
for (let key in obj) {
	if (obj[key] % 2 === 0) {
		new_obj[key] = obj[key];
	}
}
console.log(new_obj);

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
new_obj = {};
for (let key in obj) {
	new_obj[obj[key]] = key;
}
console.log(new_obj);



arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};
for (let i = 0; i < arr1.length; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
new_obj = {};
for (let key in obj) {
	if (obj[key] % 2 === 0) {
		new_obj[key] = obj[key];
	}
}
console.log(new_obj);

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
new_obj = {};
for (let key in obj) {
	new_obj[obj[key]] = key;
}
console.log(new_obj);



obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] = obj[key] ** 2;
}

obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] += 1;
}



arr = ['a', 'b', 'c', 'd', 'e'];
flag = false;
for (let elem of arr) {
	if (elem === 'c') {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

function isPrime(num) {
	let flag = false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			flag = true;
			break;
		}
	}
	return flag;
}
console.log(isPrime(7)); 
console.log(isPrime(8)); 

let o = 1;
let n = true;
if (n == o){
    console.log('ghbfdskjn')
}



arr = [10, 20, 30, 40, 21, 32, 51];
for (let elem of arr) {
	if (elem >= 10 && elem < 100) {
		console.log(elem); 
	}
}
sum = 0;
for (let elem of arr) {
	if (elem >= 10 && elem < 100) {
		sum += elem;
	}
}
console.log(sum);



obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
sum = 0;
for (let elem in obj) {
	if ((elem[0] === '1' || elem[0] === '2') && !(isNaN(+elem))) { 
		sum += +elem;
	}
}
console.log(sum);



obj = {a: 1, b: 20, c: 2, d: 40, e: 50};
sum = 0;
for (let elem in obj) {
	if ((obj[elem] === 1 || obj[elem] === 2)) { 
		sum += +obj[elem];
	}
}
console.log(sum);




for (let i = 0; i > 10; i++) {
	console.log(i);
}

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

while (i >= 10) {
	console.log(i);
	i++;
}

res;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);

res = 0;
for (let i = 1; i <= 10; i++) {
	res *= i;
}
console.log(res);

arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); 

arr = ['1', '2', '3', '4', '5'];
sum = '';
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); 

arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum);

arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}
console.log(sum); 

arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}
console.log(sum); 

arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); 

arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	elem = elem ** 2;
}
console.log(arr);

arr;
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);

obj = {a: 1, b: 2, c: 3};
sum = 0;
for (let elem in obj) {
	sum += elem;
}
console.log(sum);

obj = {a: 1, b: 2, c: 3};
sum = 0;
for (let key in obj) {
	sum += +obj[key];
}
console.log(sum);

obj = {a: 1, b: 2, c: 3};
sum = 0;
for (let key in obj) {
	sum += +obj[key];
}
console.log(sum);

arr = [1, 2, 3, 4, 5];
res = '';
for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}
console.log(res);
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);

arr = [1, 2, 3, 4, 5];
res = false;
for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}
console.log(res);

arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = []; 
for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}
console.log(res); 