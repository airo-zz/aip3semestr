let obj = {1: 'Понедельник', 2: 'вторнипк', 3: 'четверг', 4: 'среда', 5: 'кодеМУ', 6: 'будень'};
console.log("рабочие дня недели", obj);

obj = {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'};
console.log(obj);

let user = {'name': 'Иван', 'surname': 'Иванович', 'patronymic': 'Иванович'};
console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);

let date = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
console.log(date.year + '-' + date.month + '-' + date.day);

obj = {
	'1a': 1,
	'b2': 2,
	's-s': 3, 
	'd4': 4, 
	'e5': 5,
    'c-c': 6
};
console.log(obj['1a']); 
console.log(obj['b2']); 
console.log(obj['c-c']); 
console.log(obj['d4']); 
console.log(obj['e5']); 

obj = {x: 1, y: 2, z: 3};
obj.x = Math.pow(obj.x, 2);
obj.y = Math.pow(obj.y, 2);
obj.z = Math.pow(obj.z, 2);
console.log(obj); 

obj = {};
obj['name'] = 'Иван';
obj['age'] = 25;
obj['city'] = 'Москва';
console.log(obj);

obj = {7: 'a', 50: 'b', 23: 'c'};
console.log(obj[7]); 
console.log(obj[50]); 
console.log(obj[23]); 
obj = {23: 'c', 50: 'b', 7: 'a'};
console.log(obj[7]); 
console.log(obj[50]); 
console.log(obj[23]); 
obj = {7: 'a', 1000: 'b'};
console.log(obj[7]); 
console.log(obj[1000]); 

let keys = Object.keys(obj);
console.log(keys); 

obj = {a: 1, b: 2, c: 3};
console.log(obj.length); 
console.log(Object.keys(obj).length); 
let obj2 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj2).length); 

obj = {x: 1, y: 2, z: 3};
let key = 'y';
console.log(obj[key]);

let q = 'x';
obj = {x: 1, y: 2, z: 3};
console.log(obj[q]);

obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]); 
console.log(obj.x);

obj = {
	[key]: 1,
	b: 2,
	c: 3
};
key = 'x';
obj = {
	key: 1, // замена на [key]
	y: 2,
	z: 3
};

key = 'x';
obj = {
	[key + '1']: 1,
	[key + '2']: 2,
	[key + '3']: 3
};

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
obj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};

obj = {x: 1, y: 2, z: 3};
console.log('x' in obj);
console.log('w' in obj); 

obj = {x: 1, y: 2, z: 3};
delete obj.x;
console.log('x' in obj);

console.log( typeof {x: 1, y: 2, z: 3} );
console.log( typeof {} );
obj = {x: 1, y: 2, z: 3};
console.log( typeof obj );
obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );

console.log('массивы в JavaScript являются объектами')

console.log( typeof {x: 1, y: 2, z: 3} );
console.log( typeof [1, 2, 3] );
let arr = [1, 2, 3];
console.log( typeof arr );
arr = [1, 2, 3];
console.log( typeof arr[0] );
arr = ['1', '2', '3'];
console.log( typeof arr[0] );

console.log( Array.isArray([1, 2, 3]) );
console.log( Array.isArray({x: 1, y: 2, z: 3}) );


test = {x: 1, y: 2, z: 3};
console.log(test);
test = {x: 1, y: 2, z: 3};
console.log(test.x);
test = [1, 2, 3];
console.log(test);
test = [1, 2, 3];
console.log(test[1]);
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1);
test1 = [1, 2, 3];
test2 = 1;
console.log(test1[test2]);
console.log("string number boolean null undefined symbol bigint")

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
console.log(arr2);

arr1 = [1, 2, 3];
arr2 = arr1;
arr1[0] = 'a';
arr2[1] = 'b';
console.log(arr1);

arr1 = [1, 2, 3];
arr2 = arr1;
arr1[0] = 'a';
arr2[0] = 'b';
console.log(arr2);

/*const arrr = ['a', 'b', 'c'];
arrr[1] = '!';
console.log(arrr);
const arrrr = ['a', 'b', 'c'];
arrrr = [1, 2, 3];
console.log(arrrr);
const arrrrr = ['a', 'b', 'c'];
arrrrr = ['a', 'b', 'c'];
console.log(arrrrr);*/

arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);

obj = {x: 1, y: 2, z: 3};
console.log(obj.x);

obj = {x: 1, y: 2, z: 3};
key = 'x';
console.log(obj[key]);

obj = {x: 1, y: 2, z: 3};
let sum = obj.x + obj.y + obj.x;
console.log(sum);

obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);