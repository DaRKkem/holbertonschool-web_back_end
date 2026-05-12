// Reads a CSV database synchronously and counts students by field
const fs = require('fs');

function countStudents (path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line !== '');
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  students.forEach((line) => {
    const [firstname, , , field] = line.split(',');
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  Object.keys(fields).forEach((field) => {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  });
}

module.exports = countStudents;
