from abc import ABC, abstractmethod


class Setor(ABC):
    @abstractmethod
    def __repr__(self):
        pass


class Suporte(Setor):
    def __repr__(self):
        return "Suporte"


class Vendas(Setor):
    def __repr__(self):
        return "Vendas"


class Financeiro(Setor):
    def __repr__(self):
        return "Financeiro"


class Account(ABC):
    def __init__(self):
        self.setores = []
        self.criar_conta()

    @abstractmethod
    def criar_conta(self):
        pass

    def exibe_setores(self):
        return self.setores

    def adicionar_setores(self, setor):
        self.setores.append(setor)


class ContaSuporte(Account):
    def criar_conta(self):
        self.adicionar_setores(Suporte())


class ContaSuporteVendas(Account):
    def criar_conta(self):
        self.adicionar_setores(Suporte())
        self.adicionar_setores(Vendas())


class ContaGerente(Account):
    def criar_conta(self):
        self.adicionar_setores(Suporte())
        self.adicionar_setores(Vendas())
        self.adicionar_setores(Financeiro())


gerente = ContaGerente()
print(gerente.exibe_setores())
