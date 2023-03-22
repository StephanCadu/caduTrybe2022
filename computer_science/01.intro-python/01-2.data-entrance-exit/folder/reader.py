import csv

with open("arquivo.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
