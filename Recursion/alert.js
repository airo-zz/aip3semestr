let arr = [1, 2, 3, 4, 5];
function printArray(arr) {
    console.log(arr.shift());
    if (arr.length != 0) {
        printArray(arr); 
    }
}
printArray(arr);


console.log('Следущее задание')


arr = [1, 2, 3, 4, 5];
function sumOfSquares(arr) {
    if (arr.length === 0) return 0;
    let firstElement = arr.shift();
    let square = firstElement * firstElement;
    return square + sumOfSquares(arr);
}
console.log(sumOfSquares([...arr])); 


console.log('Следущее задание')


let obj = {
    a: 1, 
    b: {c: 2, d: 3, e: 4}, 
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};
function func(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            func(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}
func(obj);

arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
function func12(arr) {
    let result = [];
    for (let elem of arr) {
        if (typeof elem == 'object') {
            result = result.concat(func12(elem));
        } else {
            result.push(elem);
        }
    }
    return result;
}
console.log(func12(arr));


console.log('Следущее задание')


obj = {
    a: 1, 
    b: {c: 2, d: 3, e: 4}, 
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};
function func13(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            sum += func13(obj[key]);
        } else {
            sum += obj[key];
        }
    }
    return sum;
}
console.log(func13(obj));

arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
function func21(arr) {
    let result = '';
    for (let elem of arr) {
        if (typeof elem == 'object') {
            result += func21(elem);
        } else {
            result += elem;
        }
    }
    return result;
}
console.log(func21(arr));


console.log('Следущее задание')


arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function func7(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = func7(arr[i]);
        } else {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}
console.log(func7(arr));