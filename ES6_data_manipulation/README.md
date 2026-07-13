# ES6 Data Manipulation

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) ![Node.js](https://img.shields.io/badge/Node.js-%3E=12-green)

```js
const ids = students.map((student) => student.id);
```

A project focused on transforming and querying data using ES6 methods. Covers arrays, typed arrays, sets, maps, and functional programming patterns.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-get_list_students.js` | Returns a hard-coded array of student objects. |
| `1-get_list_student_ids.js` | Extracts an array of student IDs using `map`. |
| `2-get_students_by_loc.js` | Filters students by a given city using `filter`. |
| `3-get_ids_sum.js` | Sums all student IDs using `reduce`. |
| `4-update_grade_by_city.js` | Combines `filter` and `map` to update grades for students in a specific city. |
| `5-typed_arrays.js` | Creates a `Set` from an array and returns an array of its unique elements. |
| `6-set.js` | Creates an `Int8Array` (TypedArray) and sets a value at a specific index. |
| `7-has_array_values.js` | Checks whether all elements of one array exist in a Set. |
| `8-clean_set.js` | Filters Set values that start with a given string and joins them. |
| `9-groceries_list.js` | Returns a `Map` of grocery items with quantities. |
| `10-update_uniq_items.js` | Updates all items in a Map with quantity of 1 to 100. |

---

## Key Concepts

- **Array.map()** -- transform every element in an array
- **Array.filter()** -- select elements that pass a condition
- **Array.reduce()** -- accumulate values into a single result
- **Array spread (`...`)** -- expand an array in place
- **TypedArrays** -- `Int8Array`, `Uint8Array`, etc. for binary data
- **Set** -- collection of unique values with `has`, `add`, `delete`
- **Map** -- key-value store with `get`, `set`, `has`
- **Data transformation pipelines** -- chaining `filter` -> `map` -> `reduce`

---

Repository

GitHub repository: holbertonschool-web_back_end
Directory: ES6_data_manipulation

---

Author

Damien Rossi - DaRKkem — Holberton School, cohort C28, Auvergne-Rhône-Alpes
