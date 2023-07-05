interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

console.log(printTeacher("John", "Doe"));
console.log(director1);

