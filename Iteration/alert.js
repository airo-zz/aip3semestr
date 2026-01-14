let arr = [1, 4, 9, 16, 25];
let res = arr.map(function(elem) {
    return Math.sqrt(elem);
});
console.log(res);

arr = ['abc', 'def', 'ghi'];
res = arr.map(function(elem) {
    return elem + '!';
});
console.log(res);

arr = ['abc', 'def', 'ghi'];
res = arr.map(function(elem) {
    return elem.split('').reverse().join('');
});
console.log(res);

arr = ['123', '456', '789'];
res = arr.map(function(elem) {
    return elem.split('').map(function(num) {
        return Number(num);
    });
});
console.log(res);

arr = [1, 2, 3, 4, 5];
res = arr.map(function(elem, index) {
    return elem * index;
});
console.log(res);


console.log('Следущее задание')


arr = [1, 2, 3, 4, 5];
sum = 0;
arr.forEach(function(elem) {
    sum += elem * elem;
});
console.log(sum);


console.log('Следущее задание')


arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
res = arr.filter(function(elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(res);

arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
res = arr.filter(function(elem) {
    if (elem < 0) {
        return true;
    } else {
        return false;
    }
});
console.log(res);

arr = [-2, 5, 1, 15, -1, 1, 3, 25, -1];
res = arr.filter(function(elem) {
    if (elem > 0 && elem < 10) {
        return true;
    } else {
        return false;
    }
});
console.log(res);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
res = arr.filter(function(elem, index) {
    if (elem * index < 30) {
        return true;
    } else {
        return false;
    }
});
console.log(res);

arr = [1, 2, [3, 4], 5, [6, 7]];
res = arr.filter(function(elem) {
    if (typeof elem != 'object') {
        return true;
    } else {
        return false;
    }
});
console.log(res);


console.log('Следущее задание')


arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(check);

arr = [1, 2, 3, 4, 5];
check = arr.every(function(elem, index) {
    if (elem * index < 30) {
        return true;
    } else {
        return false;
    }
});
console.log(check);


console.log('Следущее задание')


arr = [-2, -1, 0, 1, 2];
result = arr.some(function(elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result);

arr = [1, 2, 3, 4, 5, 10];
result = arr.some(function(elem, index) {
    if (elem * index > 30) {
        return true;
    } else {
        return false;
    }
});
console.log(result);
