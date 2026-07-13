# ES6 Classes

An exploration of the ES6 `class` syntax for object-oriented programming in JavaScript. Covers constructors, getters/setters, inheritance, static members, and special symbols.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-classroom.js` | Defines a basic `ClassRoom` class with a constructor that accepts `maxStudentsSize`. |
| `1-make_classrooms.js` | Exports a function that instantiates multiple `ClassRoom` objects. |
| `2-hbtn_course.js` | Implements a `HolbertonCourse` class with getters/setters for `name`, `length`, and `students`. |
| `3-currency.js` | Creates a `Currency` class with `name` and `code` attributes and a `displayFullCurrency` method. |
| `4-pricing.js` | Builds a `Pricing` class that converts currency amounts using a static method. |
| `5-building.js` | Defines an abstract-like `Building` base class that enforces subclass override of `evacuationWarningMessage`. |
| `6-sky_high.js` | Extends `Building` to create `SkyHighBuilding`, overriding the warning method. |
| `7-airport.js` | Adds a custom `Symbol.toStringTag` so `String(airport)` returns a meaningful name. |
| `8-hbtn_class.js` | Overrides `Symbol.toPrimitive` to control how the class behaves in numeric/string coercion. |
| `9-hoisting.js` | Demonstrates class hoisting quirks by re-ordering class and function declarations. |
| `10-car.js` | Implements a `Car` class with a `cloneCar` method, introducing object cloning patterns. |

---

## Key Concepts

- **Class syntax** -- `class`, `constructor`, instance properties
- **Getters / Setters** -- controlled access with `get` and `set` keywords
- **extends / Inheritance** -- subclassing with `extends` and `super()`
- **Static methods** -- methods called on the class itself, not instances
- **Symbol.toStringTag** -- custom string representation via `Object.prototype.toString`
- **Symbol.toPrimitive** -- fine-grained control over type coercion (number, string, default)
- **Hoisting** -- classes are NOT hoisted like function declarations; order matters
- **Object cloning** -- creating independent copies of class instances

**Repository:** `holbertonschool-web_back_end` -- **Directory:** `ES6_classes`

---

**Author:** Damien Rossi - **[DaRKkem](https://github.com/DaRKkem)** -- Holberton School, cohort C28, Auvergne-Rhone-Alpes
