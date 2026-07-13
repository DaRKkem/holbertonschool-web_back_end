# Python Async Comprehension

A project covering asynchronous generators and comprehensions in Python 3.6+. Introduces `async for`, `yield` in coroutines, and runtime measurement.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-async_generator.py` | An async generator that yields random numbers between 0 and 10 every second, 10 times. |
| `1-async_comprehension.py` | Uses an async comprehension (`[i async for i in ...]`) to collect values from the async generator. |
| `2-measure_runtime.py` | Runs four async comprehensions in parallel with `asyncio.gather` and measures total runtime. |

---

## Key Concepts

- **Async generators** -- `async def` functions that use `yield` to produce values asynchronously
- **Async comprehensions** -- `[x async for x in async_gen]` syntax for building lists from async iterables
- **asyncio.gather** -- running multiple coroutines concurrently and collecting results
- **Runtime measurement** -- `time.perf_counter()` to benchmark async execution
- **Event loop** -- `asyncio.run()` to execute top-level async code

**Repository:** `holbertonschool-web_back_end` -- **Directory:** `python_async_comprehension`

---

**Author:** Damien Rossi - **[DaRKkem](https://github.com/DaRKkem)** -- Holberton School, cohort C28, Auvergne-Rhone-Alpes
