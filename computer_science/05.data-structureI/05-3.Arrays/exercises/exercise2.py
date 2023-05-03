def shuffle(cards):
    middle = len(cards) // 2
    part1 = cards[:middle]
    part2 = cards[middle:]

    shuffled = []
    for index in range(len(part1)):
        shuffled.append(part1[index])
        shuffled.append(part2[index])

    return shuffled


print(shuffle([2, 6, 4, 5]))
print(shuffle([1, 4, 4, 7, 6, 6]))
