// push
// let fruits = ["apple", "banana", "orange", "mango"];
// let newLength = fruits.push("orange", "mango");
// console.log(fruits); // ["apple", "banana", "orange", "mango"]
// console.log(newLength); // 4

// let last = fruits.pop();
// console.log(fruits); // ["apple", "banana"]
// console.log(last); // "orange"

// let first = fruits.shift();
// console.log(fruits); // ["banana", "orange"]
// console.log(first); // "apple"

// let NewLength = fruits.unshift("apple", "ram");
// console.log(fruits); // ["apple", "mango", "banana", "orange"]
// console.log(NewLength); // 4

// let removed = fruits.splice(1, 1);
// console.log(fruits); // ["apple", "orange"]
// console.log(removed); // ["banana"]

// // Adds 2 elements at index 1
// fruits.splice(1, 1, "kiwi", "grape");
// console.log(fruits); // ["apple", "kiwi", "grape", "orange"]

// let citrus = fruits.slice(1, 3);
// console.log(citrus); // ["banana", "orange"]
// console.log(fruits); // ["apple", "banana", "orange", "mango"]

// let moreFruits = ["orange", "mango"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // ["apple", "banana", "orange", "mango"]

// fruits.forEach(function(item, index, array) {
//     console.log(item);
//   });
// Output:
// apple 0
// banana 1
// orange 2

//   let numbers = [1, 4, 9];
// let roots = numbers.map(function(num) {
//   return Math.sqrt(num);
// });
// console.log(roots);
// console.log(numbers); // [1, 2, 3]

// let numbers = [1, 4, 9,7,20];
// let evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(evens);

// let numbers = [1, 4, 9];
// let sum = numbers.reduce(function(total, num) {
//     return total + num;
//   }, 0);
//   console.log(sum); // 10

// let numbers = [ 4,1, 9, 20, 19];
// let found = numbers.find(function (num) {
//   return num < 10;
// });
// console.log(found); // 16

// let numbers = [ 4,1, 9, 20, 19];
//   let index = numbers.findIndex(function(num) {
//     return num > 10;
//   });
//   console.log(index); // 2

// let fruits = [1,6,7,3,8];
//   console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape")); // false

// fruits.sort();
// console.log(fruits); // ["apple", "banana", "mango"]

let number = [4, 2, 9, 1];
number.sort(function(a, b) {
  return b - a;
});
console.log(number); // [1, 2, 4, 9]
