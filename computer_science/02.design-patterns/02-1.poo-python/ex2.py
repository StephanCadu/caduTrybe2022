class Estatistica:

    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        stats = {}
        for num in numbers:
            if num not in stats:
                stats[num] = 0
            stats[num] += 1

        most_common = (0, 0)
        for n in stats.items():
            if n[1] > most_common[1]:
                most_common = n

        return most_common[0]


statistics = Estatistica()
print(statistics.moda([1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10]))
