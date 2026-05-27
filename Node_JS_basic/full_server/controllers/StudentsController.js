// StudentsController.js
// Handles the students routes
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const lines = ['This is the list of our students'];
        Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            lines.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          });
        res.status(200).send(lines.join('\n'));
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}
