'use strict';
const student = {
  firstName: 'Mark',
  lastName: 'Grayson',
  age: 19,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Software Engineer';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof of student:', typeof student);
const vehicle = {
  make: 'Toyota',
  model: 'Rav4',
  year: 2024,
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof of vehicle:', typeof vehicle);
const pet = {
  name: 'Luna',
  kind: 'Dog',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof of pet:', typeof pet);
