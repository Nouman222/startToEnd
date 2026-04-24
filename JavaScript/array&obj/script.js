// Create an array of 5 student objects, each with: name, score, isPassed
// Use a for...of loop to print each student's name and score
// Use continue to skip failed students and only show passed ones
// Calculate the average score of all students using a loop
// Find and print the highest score using a loop
// Use a for...in loop to print all properties of the first student

// const students = [
//   { name: "Ali", score: 85, isPassed: true },
//   { name: "Sara", score: 92, isPassed: true },
//   { name: "John", score: 78, isPassed: true },
//   { name: "Emily", score: 65, isPassed: false },
//   { name: "Michael", score: 55, isPassed: false },
// ];

// for (const student of students) {
//   if (!student.isPassed) {
//     continue;
//   }
//   console.log(`${student.name}: ${student.score}`);
// }

// let totalScore = 0;
// for (const student of students) {
//   totalScore += student.score;
// }
// const averageScore = totalScore / students.length;
// console.log(`Average Score: ${averageScore}`);

// let highestScore = 0;
// for (const student of students) {
//   if (student.score > highestScore) {
//     highestScore = student.score;
//   }
// }
// console.log(`Highest Score: ${highestScore}`);

// const firstStudent = students[0];
// for (const property in firstStudent) {
//   console.log(`${property}: ${firstStudent[property]}`);
// }
