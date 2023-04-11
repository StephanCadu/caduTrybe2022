from pymongo import MongoClient


client = MongoClient()

db = client.library


for book in db.books.find():
    print(book["title"])
