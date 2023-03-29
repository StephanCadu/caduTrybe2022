from collections.abc import Iterable, Iterator


class EstrategiaIterador(Iterator):
    def __init__(self, baralho, inicial):
        self.baralho = baralho
        self.carta_atual = inicial

    def __next__(self):
        raise NotImplementedError


class IteradorNormal(EstrategiaIterador):
    def __init__(self, baralho):
        super().__init__(baralho, 0)

    def __next__(self):
        try:
            carta = self.baralho[self.carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self.carta_atual += 1
            return carta


class IteradorReverso(EstrategiaIterador):
    def __init__(self, baralho):
        super().__init__(baralho, -1)

    def __next__(self):
        try:
            carta = self.baralho[self.carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self.carta_atual -= 1
            return carta


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class BaralhoIteravel(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, iterador):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.iterador = iterador

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return self.iterador(self._cartas)

    def __str__(self):
        return f"{[carta for carta in self]}"


baralho_normal = BaralhoIteravel(IteradorNormal)
baralho_reverso = BaralhoIteravel(IteradorReverso)

print(baralho_normal)
print(baralho_reverso)
