"use strict";

let a = 123;
console.log(a);

let b, c; 
let d;
let result;
let str;
let str1;
let str2;
let txt; 
let num;
let num1;
let num2;
let num3;
let test;
let letnum;





a = 1;
b = 2;
c = 3;

a = 10;
console.log(a);

a = 20;
console.log(a);

a = 1 + 2;
console.log(a);

a = 10;
b = 5;
c = a - b;

d = 7;
result = c + d;
alert(result);

a = 8 + 2 / 2;
alert(a);

a = 10;
b = 2;
alert(a ** b);

a = 10;
b = 3;
alert(a ** b);

str = "Itami";
alert(str);

str = 'abc';
alert(str + ' def');

str = 'java';
alert(str + ' ' + 'script');

str = 'hello';
alert(str + ' ' + 'world');

str = 'abcdgsbgrhgfngngnsfnde';
alert(str.length);

str1 = 'xxx';
str2 = 'yyy';
txt = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';
alert(txt);

str = `abc
def`;
alert(str);

a = undefined;
alert(a);

a = null;
alert(a);

a = true;
alert(a);

a = false;
alert(a);

alert('abc' * 'art');

alert(10 / 0);
alert(-10 / 0);

num1 = 123;
num2 = 456;
num3 = 789;
console.log(num1, num2, num3);

console.log(123);
console.log('123');

const PI = 3.14;
let C = PI * 16;
alert(C);

a = (-'5') + (-'2');
alert(a);

a = '5' * 1 + '2' * 1;
alert(a);

a = '5' * '1' + '2' * '1';
alert(a);

a = '' + 3 + 1;
alert(a);

alert(Number('2') + Number('3'));
alert(2 + Number('3'));
alert('2' + Number('3'));

a = 10;
b = 20;
alert(Number(a) + Number(b));

b = '3';
a = '2';
alert(+a + +b); 




num1 = parseFloat('5px');
num2 = parseFloat('6px');
alert(num1 + num2); 


num1 = parseFloat('5.5px');
num2 = parseFloat('6.25px');
alert(num1 + num2 + "px"); 


num1 = 1;
num2 = 2;

alert(String(num1) + String(num2));


num = 12345678;
alert(String(num).length); // найдем длину строки


num1 = 1234;
num2 = 15678;
alert(String(num1).length + String(num2).length);


alert(true + 3);
alert(true + true);
alert(true + true);
alert(true + false);
alert('1' + true);
alert( String(true) + Number(true) );


test = Boolean(3);
alert(test);

test = Boolean(0);
alert(test);

test = Boolean(-1);
alert(test);

test = Boolean(-0);
alert(test);

test = Boolean(+0);
alert(test);

test = Boolean('abc');
alert(test);

test = Boolean('');
alert(test);

test = Boolean('0');
alert(test);

test = Boolean(true);
alert(test);

test = Boolean(false);
alert(test);

test = Boolean('true');
alert(test);

test = Boolean('false');
alert(test);

test = Boolean(null);
alert(test);

test = Boolean('null');
alert(test);

test = Boolean(undefined);
alert(test);

test = Boolean('undefined');
alert(test);

test = Boolean(NaN);
alert(test);

test = Boolean('NaN');
alert(test);

test = Boolean(3 * 'abc');
alert(test);

test = Boolean(Infinity);
alert(test);

test = Boolean(1 / 0);
alert(test);



str = 'abcde';

alert(str[0] + str[2] + str[4]);




str = 'abcde';

alert(str[4] + str[3] + str[2] + str[1] + str[0]);



str = 'abcde';
num = 3;

alert(str[num]);


str = 'abcde';
alert(str[str.length - 1]);

str = 'abcde';
alert(str[str.length - 2]);

str = 'abcde';
alert(str[str.length - 3]);



test = '12345'; 
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));


test = String(12345);
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

test = String(12345); 
alert(test[0] * test[1] * test[2] * test[3] * test[4]);

test = String(12345);
alert(test[4] + test[3] + test[2] + test[1] + test[0]);



num = 1;
num = num + 1;
num = num + 1;

alert(num);


num = 1;
num = num + 2;
num = num + 3;

alert(num);

num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);



num = 10;
num++;
num++;
num--;
alert(num);


letnum = 3;
alert(++letnum);

letnum = 3;
alert(letnum++);

letnum = 3;
alert(--letnum);

letnum = 3;
alert(letnum--);

num1 = 3
num2 = ++num1;
alert(num1);
alert(num2);

num1 = 3;num2 = num1++;
alert(num1);
alert(num2);

num1 = 3;
num2 = --num1;
alert(num1);
alert(num2);

num1 = 3;
num2 = num1--;
alert(num1);
alert(num2);

num1 = 3;
num1++;
num2 = num1--;
alert(num1++);
alert(--num2);

alert(0.1 * 0.2);

alert(0.3 - 0.1);


let name = prompt('Ваш возрост');
alert('Ваш возрост: ' + name);


num1 =
prompt('Введите первое число');
num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2)); 

num1 = prompt('Введите число');

alert(Number(num1) + Number(num1))

num1 = prompt('Введите первое число');
num2 = prompt('Введите второе число');

alert(Number(num1) * Number(num2)); 



document.write(123);

document.write('text');

document.write('<i>Это курсивный текст</i>');

str = 'text';
document.write('<i>' + str + '</i>');

document.write('<br>1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br><br>');

    
aaa = 1;
bbb = 2;
ccc = 3;

console.log(Number(aaa) + Number(bbb) + Number(ccc));   

num1 = 1;
num2 = 2;
console.log('сумма: ' + (num1 + num2));

a = 1;
b = 2;
c = 3; 
console.log(a + b + c);

num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]); 
console.log(sum);

num = 123;
console.log(String(num)[0]); 

a = 0;
console.log(++a); 

num = 123;
console.log(String(num).length); 

a = 24 * 60 * 60; 
console.log(a);

num = 123;
str = String(num);
console.log(str.length); 

num = 123;
str = String(num);
console.log(str[str.length - 1]);

a = '123';
b = '456';
s = Number(a) + Number(b); 
console.log(s);

aaa = 1;
bbb = 2;
ccc = 3; 

console.log(aaa + bbb + ccc); 



alert(24 * 60 * 60);
alert(30 * 24 * 60 * 60);
alert(365 * 24 * 60 * 60);
alert(24 * 60);
alert(365 * 24 * 60);
alert(1024 * 1024);
alert(1024 * 1024 * 1024);
alert(10 * 1024 * 1024 * 1024);
alert(1024 * 1024 * 1024 * 1024);
alert(1024 * 1024 * 1024);




let r = 5;
let s = Math.PI * Math.pow(r, 2);
console.log(s);


a = 10;
s = a * a;
console.log(s);


a = 8;
b = 12;
s = a * b;
console.log(s);


a = 8;
b = 12;
p = 2 * (a + b);
console.log(p);


tc = 25;
tf = (tc * 9/5) + 32;
console.log(tf);


tf = 77;
tc = (tf - 32) * 5/9;
console.log(tc);