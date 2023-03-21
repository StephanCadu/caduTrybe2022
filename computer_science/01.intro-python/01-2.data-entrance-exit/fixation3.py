approved = []


with open("estudantes.txt", "r") as file:
    approved = [line.split()[0] for line in file if int(line.split()[1]) >= 6]


with open("aprovados.txt", "w") as file:
    for student in approved:
        file.write(f"{student}\n")


with open("aprovados.txt", "r") as file:
    content = file.read()
    print(content)
