// Creates an HTTP server that serves student data from a CSV file
const http = require('http');
const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.split('\n').filter((line) => line !== '');
      const students = lines.slice(1);
      // difference with task 3 below (result)
      let result = `Number of students: ${students.length}\n`;

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => { // difference with task 3 below (result)
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
      return resolve(result);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => res.end(`This is the list of our students\n${data}`))
      .catch((err) => res.end(err.message));
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
