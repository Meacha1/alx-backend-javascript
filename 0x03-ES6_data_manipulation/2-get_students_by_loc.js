export default function getStudentsByLocation(getListStudent, city) {
  return getListStudent.filter(student => student.location === city);
}
