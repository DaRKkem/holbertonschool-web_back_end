# Pagination

A Python project exploring different pagination strategies for REST APIs. Covers offset-based, hypermedia, and deletion-resilient (cursor-based) pagination.

---

## Tasks / Files

| File | Description |
|------|-------------|
| `0-simple_helper_function.py` | Provides `index_range(page, page_size)` that returns a tuple `(start_index, end_index)`. |
| `1-simple_pagination.py` | Implements `get_page(page, page_size)` that slices a dataset using `index_range`. |
| `2-hypermedia_pagination.py` | Extends pagination with a `get_hyper` method that returns metadata (next, prev, total_pages). |
| `3-hypermedia_del_pagination.py` | Implements deletion-resilient pagination using a cursor-based approach to handle removed rows. |

---

## Key Concepts

- **index_range helper** -- math to convert `(page, page_size)` to dataset indices
- **Simple pagination** -- direct slice of a list with offset/limit
- **Hypermedia pagination** -- response includes `next`, `prev`, `total_pages` links/metadata
- **Deletion-resilient pagination** -- cursor-based: use a unique, stable field to resume after deletions
- **Metadata** -- `page`, `page_size`, `total_pages`, `next`, `prev` in API responses
- **Data integrity** -- ensuring no items are skipped or duplicated as the dataset changes

**Repository:** `holbertonschool-web_back_end` -- **Directory:** `pagination`

---

**Author:** Damien Rossi - **[DaRKkem](https://github.com/DaRKkem)** -- Holberton School, cohort C28, Auvergne-Rhone-Alpes
