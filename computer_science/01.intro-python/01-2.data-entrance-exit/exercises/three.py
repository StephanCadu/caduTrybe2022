import random

with open("arquivo.txt", "r") as file:
    palavras = [word.replace("\n", "") for word in file]


palavra = random.choice(palavras)

embaralhada = "".join(random.sample(palavra, len(palavra)))

print(embaralhada)

acerto = False
tentativas = 3

while not acerto and tentativas > 0:
    palpite = input(f"{tentativas} tentativas restantes. Digite seu palpite: ")

    if palpite == palavra:
        acerto = True
        print("Você acertou!")
    else:
        msg = "Tente novamente..." if tentativas > 1 else "Sem tentativas :("
        print(msg)
        tentativas -= 1
