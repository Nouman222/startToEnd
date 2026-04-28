// function greetUser(name, timeOfDay) — returns "Good Morning Nouman" or "Good Evening Nouman" based on timeOfDay
// Arrow function calculateArea — takes width and height, returns the area
// Arrow function isEven — takes a number, returns true if even, false if odd (use %)
// Arrow function findExpensiveProducts — takes an array of products and a maxPrice, returns only products cheaper than maxPrice
// Arrow function calculateCartTotal — takes an array of cart items (each with price and quantity), returns total price


// const greetUser = (name, timeOfDay) => {
//   if (timeOfDay === "morning") {
//     return `Good Morning ${name}`; 
//   } else {
//     return `Good Evening ${name}`; 
//   }
// };

// console.log(greetUser("Nouman", "morning")); 




// const calculateArea = (width, height) => width * height;

// const area = calculateArea(145, 120);
// console.log(`Area: ${area}`); // Area: 17400 ✅

// // Or directly:
// console.log(calculateArea(145, 120)); // ✅




// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // Even cleaner with ternary ✅
// const isEven = (number) => number % 2 === 0 ? true : false;

// // Even MORE clean — just return the comparison directly! ✅
// const isEven = (number) => number % 2 === 0;

// console.log(isEven(4));  // true
// console.log(isEven(7));  // false



// const findExpensiveProducts = (products, maxPrice) => {
//   const result = [];

//   for (const product of products) {
//     if (product.price < maxPrice) {
//       result.push(product);
//     }
//   }

//   return result;
// };




// const calculateCartTotal = (cart) => {
//   let total = 0;

//   for (const item of cart) {
//     total += item.price * item.quantity;
//   }

//   return total;
// };


