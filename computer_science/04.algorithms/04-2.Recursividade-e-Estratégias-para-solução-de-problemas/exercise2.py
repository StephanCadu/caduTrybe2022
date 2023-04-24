def conta_pares_recursiva(n):
    if n == 0:
        return 1
    if n % 2 == 0:
        return 1 + conta_pares_recursiva(n - 1)
    return conta_pares_recursiva(n - 1)


print(conta_pares_recursiva(6))
