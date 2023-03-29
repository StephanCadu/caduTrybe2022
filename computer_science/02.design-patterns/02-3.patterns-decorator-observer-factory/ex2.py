class Alarme:
    def __init__(self):
        self.__tarefas = []

    def adicionar_tarefa(self, tarefa):
        self.__tarefas.append(tarefa)

    def despertar(self):
        for tarefa in self.__tarefas:
            tarefa.acionar()


class Tarefa:
    def acionar(self):
        ...


class AcenderLuz(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print('Luzes acesas')


class PrepararCafe(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print('Café preparado')


class LigarComputador(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print('Computador ligado')


alarme = Alarme()
AcenderLuz(alarme)
PrepararCafe(alarme)
LigarComputador(alarme)
alarme.despertar()
