def maior_numero(lista):
    if len(lista) == 1:
        return lista[0]
    else:
        proximo_maior = maior_numero(lista[:len(lista) - 1])
        if proximo_maior > lista[len(lista) - 1]:
            return proximo_maior
        else:
            return lista[len(lista) - 1]


print(maior_numero([1, 21, 300, 4, 57]))
