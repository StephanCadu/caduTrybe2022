def count_presence(ins, outs, moment):
    counter = 0
    for i in range(len(ins)):
        if ins[i] <= moment <= outs[i]:
            counter += 1

    return counter


print(count_presence([1, 2, 3], [3, 2, 7], 4))
