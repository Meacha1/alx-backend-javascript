export default function getStudentIdSum(students) {
  students.reduce((acc, student) => {
    return acc + student.id;
  });
}
