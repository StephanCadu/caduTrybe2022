class EstrategiaISS:
    def __init__(self, valor):
        self.valor = valor

    def calcular(self):
        return self.valor * 0.1


class EstrategiaICMS:
    def __init__(self, valor):
        self.valor = valor

    def calcular(self):
        return self.valor * 0.06


class EstrategiaPIS:
    def __init__(self, valor):
        self.valor = valor

    def calcular(self):
        return self.valor * 0.065


class EstrategiaCOFINS:
    def __init__(self, valor):
        self.valor = valor

    def calcular(self):
        return self.valor * 0.3


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto(self.valor).calcular()


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(EstrategiaISS)}")
print(f"ICMS: {orcamento.calcular_imposto(EstrategiaICMS)}")
print(f"PIS: {orcamento.calcular_imposto(EstrategiaPIS)}")
print(f"COFINS: {orcamento.calcular_imposto(EstrategiaCOFINS)}")
