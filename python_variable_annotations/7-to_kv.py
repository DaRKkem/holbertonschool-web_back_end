#!/usr/bin/env python3
"""Module for creating a tuple from a string key and a numeric value."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of the string k and the square of v as a float."""
    return (k, float(v ** 2))
