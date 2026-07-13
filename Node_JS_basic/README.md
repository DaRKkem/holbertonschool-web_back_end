# Node.js Basic

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) ![Node.js](https://img.shields.io/badge/Node.js-%3E=12-green) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

```js
const app = express();
app.get('/', (req, res) => res.send('Hello'));
```

A hands-on introduction to server-side JavaScript with Node.js. Covers I/O, module system, raw HTTP servers, Express, and a structured MVC-like architecture.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-console.js` | A function that prints a string to `stdout`. |
| `1-stdin.js` | Reads user input from `process.stdin` and echoes it. |
| `2-read_file.js` | Synchronously reads a CSV file and logs student counts. |
| `3-read_file_async.js` | Asynchronously reads the same CSV with a Promise-based approach. |
| `4-http.js` | A minimal HTTP server that responds with "Hello Holberton School!". |
| `5-http.js` | An HTTP server that routes `/` and `/students` (reads CSV on request). |
| `6-http_express.js` | Re-implements the HTTP server using Express (single route). |
| `7-http_express.js` | Express server with `/` and `/students` routes. |
| `full_server/` | A complete Express application with controllers, routes, and a server entry point: |
| `full_server/server.js` | Express server setup listening on a configurable port. |
| `full_server/utils.js` | Utility that reads the CSV database asynchronously. |
| `full_server/controllers/AppController.js` | Controller for the root endpoint. |
| `full_server/controllers/StudentsController.js` | Controller for the `/students` endpoint. |
| `full_server/routes/index.js` | Central route map linking paths to controller methods. |

---

## Key Concepts

- **console / process.stdin** -- basic input / output in Node.js
- **readFile (sync)** -- `fs.readFileSync` for blocking file reads
- **readFile (async)** -- `fs.readFile` with callbacks or Promises (via `util.promisify`)
- **HTTP server** -- `http.createServer` with `req.url` routing
- **Express** -- `express()`, `app.get()`, `res.send()`, `app.listen()`
- **Controllers / Routes pattern** -- separating request handling from route definitions
- **Modular design** -- splitting database access, controllers, and routes into separate files

---

Repository

GitHub repository: holbertonschool-web_back_end
Directory: Node_JS_basic

---

Author

Damien Rossi - DaRKkem — Holberton School, cohort C28, Auvergne-Rhône-Alpes
