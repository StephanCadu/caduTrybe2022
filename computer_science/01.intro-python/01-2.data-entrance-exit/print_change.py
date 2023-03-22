import sys

# utilizando diferentes métodos da função print


# alterando a saída padrão de erros:
err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


# alterando o separador:
print("Maria", "João", "Miguel", "Ana", sep=", ")

# alterando o caractere de fim de linha (por padrão é \n):
print("Na mesma", end=" ")
print("linha.")
