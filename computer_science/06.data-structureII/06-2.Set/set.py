class Conjunto:
    def __init__(self) -> None:
        self.list = [False] * 1001
        self.last = 0

    def add_item(self, item):
        if not self.list[item]:
            self.list[item] = True

        if item > self.last:
            self.last = item

    def __str__(self) -> str:
        string = "{"

        for index, boo in enumerate(self.list):
            if boo:
                string += str(index)
                if index < self.last:
                    string += ", "

        string += "}"

        return string

    def __contains__(self, item):
        return self.list[item]

    def union(self, conjunto):
        union = Conjunto()

        for index in range(1001):
            if self.list[index] or conjunto.list[index]:
                union.add_item(index)

        return union

    def intersection(self, conjunto):
        intersection = Conjunto()

        for index in range(1001):
            if self.list[index] or conjunto.list[index]:
                intersection.add_item(index)

        return intersection


if __name__ == "__main__":
    conjunto = Conjunto()
    lista = [0, 10, 100, 1000]

    for item in lista:
        conjunto.add_item(item)

    print(conjunto)
    print(conjunto.__contains__(0))
    print(conjunto.__contains__(7))

    conj1 = Conjunto()
    for i in range(1, 11):
        conj1.add_item(i)

    conj2 = Conjunto()
    for i in range(10, 21):
        conj2.add_item(i)

    conj3 = conj1.union(conj2)
    conj4 = conj1.intersection(conj2)

    print(conj3)
    print(conj4)
