import numbers


def fizz_buzz(number):
    if not isinstance(number, numbers.Number):
        raise TypeError("Value is not a number")
    result = []
    for num in range(1, number + 1):
        if not num % 3 and not num % 5 and not num == 0:
            result.append("FizzBuzz")
        elif not num % 3 and not num == 0:
            result.append("Fizz")
        elif not num % 5 and not num == 0:
            result.append("Buzz")
        else:
            result.append(num)

    return result


if __name__ == "__main__":
    print(fizz_buzz([]))
    print(fizz_buzz(0))
    print(fizz_buzz(31))
    print(fizz_buzz("a"))
