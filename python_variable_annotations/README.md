# Python Variable Annotations

![Python](https://img.shields.io/badge/Python-3.12-blue)

```python
def add(a: float, b: float) -> float:
    return a + b
```

A project introducing Python 3 type hints. Covers basic annotations, the `typing` module, and higher-order function signatures.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-add.py` | Type-annotated function `add(a: float, b: float) -> float` that returns their sum. |
| `1-concat.py` | Type-annotated function `concat(str1: str, str2: str) -> str` that concatenates strings. |
| `2-floor.py` | Type-annotated function `floor(n: float) -> int` that returns the floor of a float. |
| `3-to_str.py` | Type-annotated function `to_str(n: float) -> str` that converts a float to string. |
| `4-define_variables.py` | Defines typed variables (`a: int`, `pi: float`, etc.) with annotations. |
| `5-sum_list.py` | Type-annotated function `sum_list(input_list: List[float]) -> float` using `typing.List`. |
| `6-sum_mixed_list.py` | Type-annotated function that sums a `List[Union[int, float]]` and returns a float. |
| `7-to_kv.py` | Type-annotated function `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]`. |
| `8-make_multiplier.py` | Returns a `Callable[[float], float]` -- a higher-order function that multiplies by a given factor. |
| `9-element_length.py` | Infers the type of a list of tuples `Sequence[Sequence]` with the `Iterable`/`Sequence` annotations. |

---

## Key Concepts

- **Basic type hints** -- `float`, `str`, `int`, `bool` as annotations
- **typing module** -- `List`, `Tuple`, `Callable`, `Union`, `Sequence`, `Iterable`
- **Variable annotations** -- syntax `variable: type = value`
- **Function annotations** -- `def func(arg: type) -> ReturnType:`
- **Higher-order function types** -- `Callable[[ArgType], ReturnType]`
- **Union types** -- `Union[int, float]` for parameters that accept multiple types
- **Complex types** -- nested generics like `List[Tuple[str, float]]`

---

Repository

GitHub repository: holbertonschool-web_back_end
Directory: python_variable_annotations

---

Author

Damien Rossi - DaRKkem — Holberton School, cohort C28, Auvergne-Rhône-Alpes
