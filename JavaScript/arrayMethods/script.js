// const students = [
//   { id: 1, name: "Nouman", score: 92, isPassed: true, city: "Peshawar" },
//   { id: 2, name: "Ali", score: 45, isPassed: false, city: "Lahore" },
//   { id: 3, name: "Sara", score: 78, isPassed: true, city: "Karachi" },
//   { id: 4, name: "Ahmed", score: 88, isPassed: true, city: "Peshawar" },
//   { id: 5, name: "Zara", score: 32, isPassed: false, city: "Islamabad" },
// ];


// filter() — only passed students
// map() — just the names of all students
// reduce() — average score
// find() — student with id: 3
// every() — did all students pass?
// some() — any student from Peshawar?
// sort() — by score high to low
// Chain filter() + map() — names of passed students only

// // 1
// const passStudent = students.filter((ps)=> ps.isPassed===true
// )
// console.log(passStudent);

// // 2
// const allStdName = students.map((std)=> std.name)
// console.log(allStdName);

// // 3
// const avgScore = students.reduce((total,current)=> {
//     return total + current.score;
// }, 0) / students.length;
// console.log(avgScore);

// // 4
// const stdId3 = students.find((std)=> std.id===3)
// console.log(stdId3);

// // 5
// const peshStd = students.some((pstd)=> pstd.city==="Peshawar")
// console.log(peshStd);

// // 6
// const sortScore = [...students].sort((a,b)=> b.score - a.score)
// console.log(sortScore);

// // 7
// const allPassStd = students.every((ps)=> ps.isPassed===true)
// console.log(allPassStd);

// const passstd = students.filter((ps)=> ps.isPassed===true).map((std)=> std.name)
// console.log(passstd);


// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.reduce((total, num) => total + num, 0);
// console.log(result);

const students = [
  { name: "Nouman", isPassed: true },
  { name: "Ali", isPassed: false },
  { name: "Sara", isPassed: true },
];

const result = students.filter(s => s.isPassed === true).map(s => s.name);

console.log(result);