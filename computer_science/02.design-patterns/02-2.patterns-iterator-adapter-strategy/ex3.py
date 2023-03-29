from collections.abc import Iterator
from ex2 import BaralhoIteravel


class IteradorBaralhoInverso(Iterator):
    def __init__(self, baralho):
        self.baralho = baralho
        self.carta_atual = -1

    def __next__(self):
        try:
            carta = self.baralho[self.carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self.carta_atual -= 1
            return carta


class BaralhoInverso(BaralhoIteravel):
    def __iter__(self):
        return IteradorBaralhoInverso(self._cartas)


baralho_inverso = BaralhoInverso()
print(baralho_inverso)
