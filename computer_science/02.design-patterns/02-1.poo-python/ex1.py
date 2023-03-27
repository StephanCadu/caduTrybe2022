class TV:
    def __init__(self, tamanho) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    def aumentar_volume(self):
        if self.volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 <= novo_canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError('O canal deve estar entre 1 e 99')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self) -> str:
        return f"""
        Dados da TV:
        - Tamanho: {self.tamanho}
        - Volume: {self.volume}
        - Canal: {self.canal}
        - Ligada: {self.ligada}
        """


tv = TV(500)

print(tv)

tv.ligar_desligar()

tv.diminuir_volume()

for n in range(60):
    tv.aumentar_volume()

tv.modificar_canal(67)

print(tv)
