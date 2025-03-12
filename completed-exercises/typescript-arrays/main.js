'use strict';
const colors = ['red', 'white', 'blue'];
colors.forEach((color, cIndex) => {
  console.log(`value of colors[${cIndex}]: ${color}`);
});
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('value of colors', colors);
const students = [
  'Debbie Grayson',
  'Cecil Stedman',
  'Mark Grayson',
  'Samantha Eve Wilkins',
];
console.log(`There are ${students.length} students in the class.`);
const lastIndex = students.length - 1;
console.log(`The last student in the array is ${students[lastIndex]}`);
console.log('value of students', students);
