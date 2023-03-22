import json
import csv


with open("books.json") as file:
    books = json.load(file)


with open("books.csv", "w", encoding="utf-8") as file:
    headers = ["categoria", "porcentagem"]
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()

    stats = {}
    for book in books:
        for category in book["categories"]:
            if category not in stats:
                stats[category] = 1
            else:
                stats[category] += 1

    for category, times in stats.items():
        row = {"categoria": category, "porcentagem": times / len(books)}
        writer.writerow(row)


with open("books.csv", encoding="utf-8") as file:
    booksRead = csv.DictReader(file, delimiter=",", quotechar='"')

    chosen = ["Java", "Python", "PHP"]

    for line in booksRead:
        if line["categoria"] in chosen:
            print(line)
