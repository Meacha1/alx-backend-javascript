import { Cpp } from "./js/subjects/Cpp";
import { Java } from "./js/subjects/Java";
import { React } from "./js/subjects/React";

const cpp = new Cpp();
const java = new Java();
const react = new React();

export const cppSubjects = cpp;
export const javaSubjects = java;
export const reactSubjects = react;

const cTeacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
