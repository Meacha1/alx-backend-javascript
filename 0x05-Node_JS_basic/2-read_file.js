const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.filter(line => line !== '');

    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const [firstName, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
