import random


# Exercício 1
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# melhor caso: 0(1)
# caso médio: 0(n)
# pior caso: 0(n)


# Exercício 2
def random_avg(n):
    averages = []
    for _ in range(100):
        sum = 0

        for _ in range(n):
            sum += random.randrange(1, n)

        avg = sum / n
        averages.append(avg)

    return averages
