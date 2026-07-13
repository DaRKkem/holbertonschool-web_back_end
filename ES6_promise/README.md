# ES6 Promises

An introduction to asynchronous programming in JavaScript using Promises. Covers creation, resolution, rejection, chaining, error handling, and parallel execution.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-promise.js` | Returns a new Promise (placeholder for later resolution/rejection). |
| `1-promise.js` | Returns a Promise that resolves or rejects based on a boolean parameter. |
| `2-then.js` | Attaches `onFulfilled` and `onRejected` handlers with `.then()`. |
| `3-all.js` | Uses `Promise.all` to handle multiple promises concurrently and log results. |
| `4-user-promise.js` | Returns a Promise that resolves with a user object after a delay. |
| `5-photo-reject.js` | Returns a Promise that rejects with an `Error` for a given filename. |
| `6-final-user.js` | Orchestrates multiple promises and collects their `status` / `value` / `reason`. |
| `7-load_balancer.js` | Returns the value of the fastest-resolving promise (race pattern). |
| `8-try.js` | Wraps a function in try/catch and returns an error array on failure. |
| `9-try.js` | Appends a success/error message to a queue based on function outcome (guardrail pattern). |

---

## Key Concepts

- **Promise creation** -- `new Promise((resolve, reject) => {...})`
- **resolve / reject** -- controlling the eventual state of a Promise
- **.then() chaining** -- sequential asynchronous operations
- **Promise.all()** -- wait for all promises (fail-fast on first rejection)
- **Promise.race()** -- return the first settled promise
- **Error handling** -- `.catch()` and try/catch with async patterns
- **Guardrail pattern** -- always return a structured response even on failure
- **Concurrent execution** -- running tasks in parallel with `Promise.all`

**Repository:** `holbertonschool-web_back_end` -- **Directory:** `ES6_promise`

---

**Author:** Damien Rossi - **[DaRKkem](https://github.com/DaRKkem)** -- Holberton School, cohort C28, Auvergne-Rhone-Alpes
