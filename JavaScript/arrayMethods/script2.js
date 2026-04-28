// 🟢 Beginner Level
// map()
// Given [1, 2, 3, 4], create a new array where each number is doubled.
// filter()
// From [5, 10, 15, 20], return only numbers greater than 10.
// forEach()
// Print each element of ["apple", "banana", "mango"] in console.
// find()
// Find the first number greater than 50 in [10, 25, 60, 40].

// const arr = [1,2,3,4]
// const newArr = arr.map((n)=> n*2)
// console.log(newArr);

// const arr2 = [5,10,15,20]
// const newArr2 = arr2.filter((n)=> n>10)
// console.log(newArr2);

// const fruit = ["apple","banana","mango"]
// fruit.forEach((f)=> {
//     const fruit2 = f
//     console.log(fruit2);

// });
// console.log(fruit);

// const number = [40,10,20,50,60]
// const result = number.find((e) => e > 50)
// console.log(result);

// 🟡 Intermediate Level
// reduce()
// Find the sum of [1, 2, 3, 4, 5].
// includes()
// Check if "cat" exists in ["dog", "cat", "bird"].
// some()
// Check if any number is even in [1, 3, 5, 6].
// every()
// Check if all numbers are positive in [2, 4, 6, 8].

// const arr = [1, 2, 3, 4, 5]
// console.log(arr.reduce((total,current,0)=> total+current));

// const pet = ["dog", "cat", "bird"]
// console.log(
//     pet.includes("cat")
// );

// const arr2 = [1, 2, 3, 4, 5]
// console.log(arr2.some((e)=>e%2===0));

// const arr3 =[2, 4, 6, 8]
// console.log(arr3.every((e)=>e>0));

// 🔵 Advanced Level
// Chaining methods
// From [1, 2, 3, 4, 5], double the numbers and then return only numbers greater than 5.
// Objects + filter()
// const users = [
//   { name: "Ali", age: 22 },
//   { name: "Ahmed", age: 17 },
//   { name: "Sara", age: 25 }
// ];
// Return users whose age is greater than 18.
// reduce() (advanced)
// Count how many times each number appears in [1, 2, 2, 3, 3, 3].
// sort()
// Sort [10, 5, 20, 1] in ascending order.
// flat()
// Convert [1, [2, 3], [4, [5]]] into a single array.
// 🔴 Challenge Tasks
// Combine:
// Get total price of items:
// const cart = [
//   { item: "book", price: 100 },
//   { item: "pen", price: 20 },
//   { item: "bag", price: 500 }
// ];
// Real-world:
// From users array, return names of users whose age > 18 in uppercase.

const numbers = [1, 2, 3, 4, 5]
const chaining = numbers.map((e)=>e*2)
console.log(chaining.filter((e)=>e>5));

const users = [
  { name: "Ali", age: 22 },
  { name: "Ahmed", age: 17 },
  { name: "Sara", age: 25 },
];

const ages = users.filter((user) => user.age > 18);
console.log(ages);

const arr = [1, 2, 2, 3, 3, 3]
const count = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(count);

const arr2 = [10, 5, 20, 1]
console.log(arr2.sort((a, b) => a - b));  

const arr3 = [1, [2, 3], [4, [5]]]
console.log(arr3.flat(Infinity)); 


