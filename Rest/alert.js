function func(...nums) {
  if (nums.length === 0) {
    return 0; 
    }
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
}
console.log(func(1, 2, 3)); 
console.log(func(1, 2, 3, 4));
console.log(func(1, 2, 3, 4, 5)); 
console.log(func());
