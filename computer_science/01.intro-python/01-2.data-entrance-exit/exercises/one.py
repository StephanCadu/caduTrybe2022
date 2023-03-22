nome = input("Digite seu nome: ")

while len(nome):
    print(nome)
    novo_nome = nome[:-1]
    nome = novo_nome
