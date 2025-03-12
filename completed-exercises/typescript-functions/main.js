'use strict';
/**
 * @param {number} minutes - the number of minutes to be converted into seconds
 * @returns {number} The resulting seconds
 */
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
/**
 * @param {string} name - the name to be greeted
 * @returns {string} The greeting
 */
function greet(name) {
  return 'Hello' + name + '!';
}
/**
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} The area of the rectangle
 */
const getArea = (width, height) => {
  return width * height;
};
/**
 * @param {Person} person - the person object
 * @returns {string} The first name of the person
 */
const getFirstName = (person) => {
  return person.firstName;
};
/**
 * @param {Person} person - the person object
 * @returns {string} The last name of the person
 */
const getLastName = (person) => {
  return person.lastName;
};
const person = { firstName: 'Rex', lastName: 'Splode' };
/**
 * @param {Function} otherFunction - the function to be called
 * @param {unknown} params - the parameters to be passed to the function
 * @returns {any} The result of the function
 */
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
console.log('converting 5 minutes into seconds:', convertMinutesToSeconds(5)); // 300
console.log('greeting john', greet('John')); // Hello John!
console.log(
  'getting the area of a rectangle of side lengths 5 & 10:',
  getArea(5, 10)
); // 50
console.log("getting the person's first name:", getFirstName(person)); // Rex
console.log("getting the person's last name:", getLastName(person)); // Splode
console.log(
  "calling another function (getFirstName) to get the person's first name:",
  callOtherFunction(getFirstName, person)
); // Rex
console.log(
  "calling another function (getLastName) to get the person's last name:",
  callOtherFunction(getLastName, person)
); // Splode
