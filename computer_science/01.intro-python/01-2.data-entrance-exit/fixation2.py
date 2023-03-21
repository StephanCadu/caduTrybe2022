numeros_str = input("Digite números separados por espaços: ")

numeros_arr = numeros_str.split(" ")

result = 0
for num in numeros_arr:
    if not num.isdigit():
        print(f"Um erro aconteceu: O caractere {num} não é um dígito!")
        break
    else:
        result += int(num)


print(f"O resultado é {result}")
