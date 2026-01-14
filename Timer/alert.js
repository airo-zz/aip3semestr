setInterval(function() {
    console.log('Timer tick every 3 seconds');
}, 3000);
console.log("следующее задание");

let counter1 = 100;
setInterval(function() {
    console.log(--counter1);
}, 1000);
console.log("следующее задание");

let counter2 = 10;
let timerId1 = setInterval(function() {
    console.log(--counter2);
    if (counter2 === 0) {
        clearInterval(timerId1);
    }
}, 1000);
console.log("следующее задание");

let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    let i = 0;
    setInterval(function() {
        console.log(++i);
    }, 1000);
});
console.log("следующее задание");

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function func() {
    let i = 100;
    let timerId = setInterval(function() {
        console.log(--i);
        if (i === 0) {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', func);
});
console.log("следующее задание");

let start1 = document.querySelector('#start1');
let stop1 = document.querySelector('#stop1');
let timerId2;
let counter3 = 100;

start1.addEventListener('click', function() {
    timerId2 = setInterval(function() {
        console.log(--counter3);
        if (counter3 === 0) {
            clearInterval(timerId2);
        }
    }, 1000);
});

stop1.addEventListener('click', function() {
    clearInterval(timerId2);
});
console.log("следующее задание");

let elem1 = document.querySelector('#elem1');
setInterval(function() {
    elem1.value = Number(elem1.value) - 1;
    if (Number(elem1.value) === 0) {
        clearInterval(timerId3);
    }
}, 1000);
console.log("следующее задание");

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', function() {
    let self = this;
    setInterval(function() {
        console.log(self.value);
    }, 1000);
});
console.log("следующее задание");

let elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', function() {
    let self = this;
    setInterval(function() {
        self.value = Number(self.value) + 1;
    }, 1000);
});
console.log("Ошибка возникла потому, что внутри функции setInterval this указывает на window, а не на кнопку. Нужно сохранить контекст во внешней переменной");
console.log("следующее задание");

let button5 = document.querySelector('#button5');
let paragraph1 = document.querySelector('#paragraph1');
button5.addEventListener('click', function() {
    setInterval(function() {
        paragraph1.textContent = Number(paragraph1.textContent) + 1;
    }, 1000);
});
console.log("следующее задание");

let button6 = document.querySelector('#button6');
let paragraph2 = document.querySelector('#paragraph2');
button6.addEventListener('click', function() {
    let timerId = setInterval(function() {
        let current = Number(paragraph2.textContent);
        paragraph2.textContent = current - 1;
        if (current - 1 === 0) {
            clearInterval(timerId);
        }
    }, 1000);
});
console.log("следующее задание");

let input1 = document.querySelector('#input1');
let paragraph3 = document.querySelector('#paragraph3');
setInterval(function() {
    let value = Number(input1.value);
    paragraph3.textContent = value * value;
}, 1000);
console.log("следующее задание");

let input2 = document.querySelector('#input2');
let paragraph4 = document.querySelector('#paragraph4');
input2.addEventListener('blur', function() {
    let count = Number(this.value);
    let timerId = setInterval(function() {
        paragraph4.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timerId);
        }
    }, 1000);
});
console.log("следующее задание");

let input3 = document.querySelector('#input3');
let button7 = document.querySelector('#button7');
let paragraph5 = document.querySelector('#paragraph5');
button7.addEventListener('click', function() {
    let count = Number(input3.value);
    paragraph5.textContent = count;
    let timerId = setInterval(function() {
        count--;
        paragraph5.textContent = count;
        if (count === 0) {
            clearInterval(timerId);
        }
    }, 1000);
});
console.log("следующее задание");

let paragraph6 = document.querySelector('#paragraph6');
let start2 = document.querySelector('#start2');
let stop2 = document.querySelector('#stop2');
let timerId4;

start2.addEventListener('click', function() {
    timerId4 = setInterval(function() {
        paragraph6.textContent = Number(paragraph6.textContent) + 1;
    }, 1000);
});

stop2.addEventListener('click', function() {
    clearInterval(timerId4);
});
console.log("следующее задание");

let paragraph7 = document.querySelector('#paragraph7');
setInterval(function() {
    if (paragraph7.classList.contains('red')) {
        paragraph7.classList.remove('red');
        paragraph7.classList.add('green');
    } else {
        paragraph7.classList.remove('green');
        paragraph7.classList.add('red');
    }
}, 1000);
console.log("следующее задание");

let clock = document.querySelector('#clock');
setInterval(function() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
console.log("следующее задание");

let paragraph8 = document.querySelector('#paragraph8');
setTimeout(function() {
    paragraph8.textContent = 'Message appeared after 10 seconds!';
}, 10000);
console.log("следующее задание");

let paragraph9 = document.querySelector('#paragraph9');
let delay = 0;
let counter4 = 0;

function incrementalTimer() {
    setTimeout(function() {
        paragraph9.textContent = counter4;
        counter4++;
        delay += 1000;
        incrementalTimer();
    }, delay);
}

incrementalTimer();
console.log("следующее задание");