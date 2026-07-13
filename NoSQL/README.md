# NoSQL -- MongoDB

![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green) ![Python](https://img.shields.io/badge/Python-3.12-blue)

```js
db.collection.find({ score: { $gt: 80 } })
```

A project covering both the MongoDB shell (CLI) and Python-driven CRUD with PyMongo. Moves from basic database operations to aggregation and real-world log analysis.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-list_databases` | Shell script that lists all MongoDB databases (`show dbs`). |
| `1-use_or_create_database` | Shell script that creates or switches to a database (`use`). |
| `2-insert` | Shell script that inserts a document into a collection. |
| `3-all` | Shell script that lists all documents in a collection. |
| `4-match` | Shell script that queries documents matching a filter. |
| `5-count` | Shell script that counts documents in a collection. |
| `6-update` | Shell script that updates documents matching a filter. |
| `7-delete` | Shell script that removes documents matching a filter. |
| `8-all.py` | PyMongo function that lists all documents in a collection. |
| `9-insert_school.py` | PyMongo function that inserts a new school document. |
| `10-update_topics.py` | PyMongo function that updates the topics array of a school. |
| `11-schools_by_topic.py` | PyMongo function that finds schools by a specific topic. |
| `12-log_stats.py` | PyMongo aggregation pipeline that computes statistics from an Nginx log collection. |

---

## Key Concepts

- **MongoDB Shell** -- `show dbs`, `use`, `db.collection.insert()/find()/update()/delete()`
- **PyMongo CRUD** -- Python equivalents: `insert_one`, `find`, `update_one`, `delete_one`
- **Query filters** -- matching documents with `{ field: value }` and operators like `$set`
- **Aggregation pipeline** -- `$match`, `$group`, `$sort`, `$project` for data analysis
- **Log analysis** -- extracting patterns (IP, method, status) from raw collections
- **Python + MongoDB** -- connecting with `pymongo.MongoClient` and accessing databases/collections

---

Repository

GitHub repository: holbertonschool-web_back_end
Directory: NoSQL

---

Author

Damien Rossi - DaRKkem — Holberton School, cohort C28, Auvergne-Rhône-Alpes
