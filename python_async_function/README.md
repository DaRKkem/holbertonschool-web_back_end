# Python Async Functions

![Python](https://img.shields.io/badge/Python-3.12-blue)

```python
async def wait_random(max_delay=10):
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
```

A project on writing and orchestrating coroutines in Python 3.5+ using `async`/`await`. Covers concurrent execution, task creation, and runtime benchmarking.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-basic_async_syntax.py` | An `async` coroutine `wait_random` that waits a random delay and returns it. |
| `1-concurrent_coroutines.py` | Spawns `wait_random` `n` times with `asyncio.gather` and returns sorted delays. |
| `2-measure_runtime.py` | Measures the total execution time of running `wait_n(5, 5)` and divides by `n`. |
| `3-tasks.py` | Creates an `asyncio.Task` from a coroutine using `asyncio.create_task`. |
| `4-tasks.py` | Re-implements `wait_n` using task objects instead of raw coroutines. |

---

## Key Concepts

- **async / await** -- declaring coroutines with `async def` and awaiting them with `await`
- **asyncio.gather** -- running multiple coroutines concurrently
- **create_task** -- wrapping a coroutine into a Task for fine-grained scheduling
- **Runtime measurement** -- `time.perf_counter()` for benchmarking async code
- **Coroutine sorting** -- collecting and ordering results from concurrent operations
- **Event loop** -- `asyncio.run()` as the entry point for async programs

---

Repository

GitHub repository: holbertonschool-web_back_end
Directory: python_async_function

---

Author

Damien Rossi - DaRKkem — Holberton School, cohort C28, Auvergne-Rhône-Alpes
