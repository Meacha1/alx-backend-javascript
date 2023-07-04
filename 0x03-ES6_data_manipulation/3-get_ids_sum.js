export default function getStudentIdSum(students) {
  if (!Array.isArray(students)) {
    return null;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
