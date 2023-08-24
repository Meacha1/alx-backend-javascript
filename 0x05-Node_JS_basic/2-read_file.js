const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const fields = lines[0].split(',');

    if (fields.length <= 1) {
      throw new Error('Invalid database format');
    }

    const students = {};

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');

      if (values.length !== fields.length) {
        continue; // Skip invalid lines
      }

      for (let j = 1; j < values.length; j++) {
        const field = fields[j].trim();
        const student = values[j].trim();

        if (field && student) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(student);
        }
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
