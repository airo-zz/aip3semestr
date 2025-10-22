"use strict";

let str = '12345';
let sum = 0;
for (let char of str) {
    sum += Number(char);
}
console.log(sum);