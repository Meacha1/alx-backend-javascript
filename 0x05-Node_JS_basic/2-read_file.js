const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = lines[0].split(',');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    fields.forEach(field => {
      const studentsInField = students.filter(student => student.split(',')[fields.indexOf(field)] === '1');
      const studentNames = studentsInField.map(student => student.split(',')[0]).join(', ');
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentNames}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
