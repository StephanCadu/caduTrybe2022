import math


def retorna_maior(n1, n2):
    """Exercício 1"""
    if n1 > n2:
        return n1
    else:
        return n2


print(retorna_maior(1, 2))


def media_aritmetica(lista):
    """Exercício 2"""
    counter = 0
    for number in lista:
        counter += number

    return counter / len(lista)


print(media_aritmetica([2, 33, 4, 56, 92]))


def imprime_asteriscos(num):
    """Exercício 3"""
    for line in range(num):
        print(num * "*")


imprime_asteriscos(5)


def maior_nome(lista):
    """Exercício 4"""
    maior = ""
    for nome in lista:
        if len(nome) > len(maior):
            maior = nome
    print(maior)


maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])


def dados_pintura(valor):
    """Exercício 5"""
    litros = valor / 3
    latas = math.ceil(litros / 18)
    if litros % 18:
        latas += 1
    return (latas, f"R${latas * 80}")


print(dados_pintura(1000))


def eh_triangulo(l1, l2, l3):
    """Exercício 6"""
    if not (l1 + l2 + l3) == 180:
        return "Não é um triângulo"
    if l1 == l2 == l3:
        return "Triângulo Equilátero"
    if l1 == l2 or l1 == l3 or l2 == l3:
        return "Triângulo Isóceles"
    if not l1 == l2 == l3:
        return "Triângulo Escaleno"


print(eh_triangulo(1, 2, 3))
print(eh_triangulo(60, 60, 60))
print(eh_triangulo(45, 45, 90))
print(eh_triangulo(40, 60, 80))


def retorna_menor(n1, n2):
    """Exercício Bônus 1"""
    if n1 < n2:
        return n1
    else:
        return n2


print(retorna_menor(1, 2))


def imprime_asteriscos2(num):
    """Exercício Bônus 2"""
    for index in range(num):
        print((index + 1) * "*")


imprime_asteriscos2(5)


def soma_todos(num):
    """Exercício Bônus 3"""
    counter = 0
    for index in range(num):
        counter += index + 1
    print(counter)


soma_todos(5)


def preco_combustivel(litros, tipo):
    if tipo == "A":
        preco = 1.9
        desconto = 0.03
        if litros > 20:
            desconto = 0.05
    if tipo == "G":
        preco = 2.5
        desconto = 0.04
        if litros > 20:
            desconto = 0.06
    return (litros * preco) * (1 - desconto)


print(preco_combustivel(30, "A"))
print(preco_combustivel(50, "G"))
