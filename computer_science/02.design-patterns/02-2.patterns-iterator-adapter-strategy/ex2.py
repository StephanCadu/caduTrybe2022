from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class IteradorBaralho(Iterator):
    def __init__(self, baralho):
        self.baralho = baralho
        self.carta_atual = 0

    def __next__(self):
        try:
            carta = self.baralho[self.carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self.carta_atual += 1
            return carta


class BaralhoIteravel(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorBaralho(self._cartas)

    def __str__(self):
        return f"{[carta for carta in self]}"


baralho_iteravel = BaralhoIteravel()
print(baralho_iteravel)
