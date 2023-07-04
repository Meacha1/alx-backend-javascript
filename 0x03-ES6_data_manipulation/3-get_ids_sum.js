export default function getStudentIdSum(students) {
  if (!Array.isArray(students)) {
    return null;
  }
  students.reduce((acc, student) => (acc + student.id));
}
