let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;
console.log(name); 
console.log(surname); 
console.log(department);
console.log(position);   
console.log(salary);


console.log("следущее задание"); 


function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}
[name, surname, department, position, salary] = func();
console.log(name);
console.log(surname);  
console.log(department);
console.log(position);  
console.log(salary);


console.log("следущее задание"); 


arr = ['John', 'Smit', 'development', 'programmer', 2000];
[, , department, position] = arr;
console.log(department); 
console.log(position); 


console.log("следущее задание"); 


arr = ['John', 'Smit', 'development', 'programmer', 2000];
[name, surname, ...info] = arr;
console.log(name); 
console.log(surname); 
console.log(info); 


console.log("следущее задание"); 


arr = ['John', 'Smit', 'development', 'programmer'];
[name, surname, department, position = 'trainee'] = arr;
console.log(name);  
console.log(surname); 
console.log(department); 
console.log(position);


console.log("следущее задание"); 


function getCurrentYear() {
  return (new Date()).getFullYear();
}
function getCurrentMonth() {
  return (new Date()).getMonth() + 1; 
}
function getCurrentDay() {
  return (new Date()).getDate();
}
arr = [getCurrentYear()];
let [year = getCurrentYear(), month = getCurrentMonth(), day = getCurrentDay()] = arr;
console.log(year);
console.log(month);
console.log(day);


console.log("следущее задание"); 


let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let { color, width, height } = options;
console.log(color); 
console.log(width);
console.log(height); 


console.log("следущее задание"); 


options = {
  color: 'red',
  width: 400,
  height: 500,
};
let { color: c, width: w, height: h } = options;
console.log(c); // Выведет 'red'
console.log(w); // Выведет 400
console.log(h); // Выведет 500



options = {
  width: 400,
  height: 500,
};
let{ colors = 'black', widths, heights } = options;
console.log(colors);
console.log(widths); 
console.log(heights); 


console.log("следущее задание"); 


options = {
  width: 400,
  height: 500,
};
let { colorq: cq = 'black', widthq: wq, heightq: hq } = options;
console.log(cq); // Выведет 'black'
console.log(wq); // Выведет 400
console.log(hq); // Выведет 500


console.log("следущее задание"); 


function func1([name, surname, department, position, salary]) {
  console.log(name, surname, department, position, salary);
}
func1(['John', 'Smit', 'development', 'programmer', 2000]);

function func2([name, surname, ...info]) {
  console.log(name, surname, info);
}
func2(['John', 'Smit', 'development', 'programmer', 2000]);

function func3([name, surname, department, position = 'junior']) {
  console.log(name, surname, department, position);
}
func3(['John', 'Smit', 'development']);

function func4(department, [name, surname], [year, month, day]) {
  console.log(department, name, surname, year, month, day);
}
func4('development', ['John', 'Smit'], [2018, 12, 31]);


console.log("следущее задание"); 


function func1({ color, width, height }) {
  console.log(color, width, height);
}
func1({ color: 'red', width: 400, height: 500 });

function func2({ width, height, color = 'black' }) {
  console.log(color, width, height);
}
func2({ color: 'red', width: 400, height: 500 });