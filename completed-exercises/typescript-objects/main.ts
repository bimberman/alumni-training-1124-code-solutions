interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Mark',
  lastName: 'Grayson',
  age: 19,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Software Engineer';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof of student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Luna',
  kind: 'Dog',
};

delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof of pet:', typeof pet);
