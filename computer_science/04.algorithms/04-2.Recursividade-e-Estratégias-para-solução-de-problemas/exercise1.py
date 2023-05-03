def conta_pares(n):
    counter = 0
    for num in range(n + 1):
        if num % 2 == 0:
            print(num)
            counter += 1

    return counter


print(conta_pares(6))
