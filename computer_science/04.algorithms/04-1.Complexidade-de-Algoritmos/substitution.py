def substitution(arr):
    max = 0
    result = []
    arr.reverse()
    for num in arr:
        if num > max:
            max = num
        result.insert(0, max)
    return result


print(substitution([2, 1, 2, 3, 0, 5, 1, 2, 3]))
