def intersection(listA, listB):
    dictA = {item: True for item in listA}
    return [item for item in listB if item in dictA]


a = [1, 2, 3, 4, 5, 6]
b = [4, 5, 6, 7, 8, 9]


print(intersection(a, b))
