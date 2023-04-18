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
        sum_value = 0

        for _ in range(n):
            sum_value += random.randrange(1, n)

        avg = sum_value / n
        averages.append(avg)

    return averages


# Exercício 3
def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

# complexidade de tempo: 0(n)
# complexidade de espaço: 0(n)
