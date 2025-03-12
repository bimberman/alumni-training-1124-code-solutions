/**
 * @param {number} minutes - the number of minutes to be converted into seconds
 * @returns {number} The resulting seconds
 */
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

/**
 * @param {string} name - the name to be greeted
 * @returns {string} The greeting
 */
function greet(name: string): string {
  return 'Hello ' + name + '!';
}

/**
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} The area of the rectangle
 */
const getArea = (width: number, height: number): number => {
  return width * height;
};

interface Person {
  firstName: string;
  lastName: string;
}

/**
 * @param {Person} person - the person object
 * @returns {string} The first name of the person
 */
const getFirstName = (person: Person): string => {
  return person.firstName;
};

/**
 * @param {Person} person - the person object
 * @returns {string} The last name of the person
 */
const getLastName = (person: Person): string => {
  return person.lastName;
};

const person: Person = { firstName: 'Rex', lastName: 'Splode' };

/**
 * @param {Function} otherFunction - the function to be called
 * @param {unknown} params - the parameters to be passed to the function
 * @returns {any} The result of the function
 */
const callOtherFunction = (otherFunction: Function, params: unknown): any => {
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
