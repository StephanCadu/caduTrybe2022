from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    category = input("Digite a categoria escolhida: ")

    for book in db.books.find({"categories": category}):
        print(book["title"])
