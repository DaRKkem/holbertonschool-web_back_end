#!/usr/bin/env python3
"""Module for running multiple tasks concurrently."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times and return delays in ascending order."""
    delays = await asyncio.gather(*[task_wait_random(max_delay) for _ in range(n)])
    result = []
    for delay in delays:
        inserted = False
        for i, val in enumerate(result):
            if delay < val:
                result.insert(i, delay)
                inserted = True
                break
        if not inserted:
            result.append(delay)
    return result
