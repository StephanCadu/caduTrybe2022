names = ["Ana", "alberto", "bianca", "cadu", "daniel", "Douglas"]


def separe_by_letter(names):
    result = {}

    for name in names:
        first = name[0].lower()

        if first not in result:
            result[first] = [name]
        else:
            result[first].append(name)

    return result


print(separe_by_letter(names))
