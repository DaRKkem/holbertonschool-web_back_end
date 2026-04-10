#!/usr/bin/env python3
"""Module for running multiple coroutines concurrently."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times and return delays in ascending order."""
    delays = await asyncio.gather(*[wait_random(max_delay) for _ in range(n)])
    result = []
    for delay in delays:
        # Insert delay at the correct position to keep list sorted
        inserted = False
        for i, val in enumerate(result):
            if delay < val:
                result.insert(i, delay)
                inserted = True
                break
        if not inserted:
            result.append(delay)
    return result
