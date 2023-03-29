ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# # ou
# print(f"{ROSA}Olá Mundo!{RESET}")
# print(f"{ROXO}Olá Mundo!{RESET}")
# print(f"{AZUL}Olá Mundo!{RESET}")
# print(f"{VERDE}Olá Mundo!{RESET}")
# print(f"{LARANJA}Olá Mundo!{RESET}")
# print(f"{VERMELHO}Olá Mundo!{RESET}")
# print(f"{NEGRITO}Olá Mundo!{RESET}")
# print(f"{SUBLINHADO}Olá Mundo!{RESET}")


class Log:
    def dispara_log(self, message):
        return message


class LogError(Log):
    def dispara_log(self, message):
        return super().dispara_log(f"{VERMELHO}{message}{RESET}")


class LogWarning(Log):
    def dispara_log(self, message):
        return super().dispara_log(f"{LARANJA}{message}{RESET}")


class LogSuccess(Log):
    def dispara_log(self, message):
        return super().dispara_log(f"{VERDE}{message}{RESET}")


erro = LogError()
alerta = LogWarning()
sucesso = LogSuccess()

print(erro.dispara_log('MENSAGEM'))
print(alerta.dispara_log('MENSAGEM'))
print(sucesso.dispara_log('MENSAGEM'))
