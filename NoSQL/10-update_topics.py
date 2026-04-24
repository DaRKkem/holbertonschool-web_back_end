#!/usr/bin/env python3
"""Module that changes all topics of a school document based on name"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return mongo_collection.find_one({"name": name})
