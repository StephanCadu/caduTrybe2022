def is_odd(number):
    "Retorna True se um número é ímpar, senão False."
    return number % 2 != 0


def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number


def get_most_ordered_dish_per_costumer(arr, name):
    stats = {}
    for item in arr:
        if item["customer"] == name:
            order = item["order"]
            if order not in stats:
                stats[order] = 1
            else:
                stats[order] += 1

    most_ordered = ""
    counter = 0
    for item in stats.items():
        if item[1] > counter:
            most_ordered = item[0]
            counter = item[1]

    return most_ordered


def get_order_frequency_per_costumer(orders, name, order):
    frequency = 0
    for item in orders:
        if item["customer"] == name and item["order"] == order:
            frequency += 1

    return frequency
