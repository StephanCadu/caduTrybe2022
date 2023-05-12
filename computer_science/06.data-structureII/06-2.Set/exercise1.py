def calc(hand1, hand2, up=True):
    diff = hand1.difference(hand2)
    return max(diff) if up else min(diff)


def bluff(entrada):
    items = list(entrada.items())

    set1 = set(items[0][1])
    set2 = set(items[1][1])

    final1 = (items[0][0], calc(set1, set2) - calc(set1, set2, False))
    final2 = (items[1][0], calc(set2, set1) - calc(set2, set1, False))

    if final1[1] == final2[1]:
        return "empate"
    return final1[0] if final1[1] > final2[1] else final2[0]


jogo1 = {"clara": [0, 1, 5, 9, 10], "marco": [0, 2, 8, 9, 10]}


print(bluff(jogo1))  # marco
