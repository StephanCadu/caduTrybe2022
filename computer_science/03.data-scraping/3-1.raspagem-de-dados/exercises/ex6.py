from pymongo import MongoClient


client = MongoClient()

db = client.library

category = input("Digite a categoria escolhida: ")

print(db.books.find_one())

with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}):
        print(book["title"])
