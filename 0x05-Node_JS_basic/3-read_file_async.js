const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath - The path to the CSV data file.
 * @returns {Promise<boolean>} - A promise that resolves to true if the operation was successful.
 * @throws {Error} - Throws an error if the database cannot be loaded.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const fieldNames = lines[0].split(',');
      const propertyNames = fieldNames
        .slice(0, fieldNames.length - 1);

      for (const line of lines.slice(1)) {
        const record = line.split(',');
        const propertyValues = record
          .slice(0, record.length - 1);
        const field = record[record.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const entries = propertyNames
          .map((propName, idx) => [propName, propertyValues[idx]]);
        studentGroups[field].push(Object.fromEntries(entries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
