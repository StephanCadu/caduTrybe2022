def count_max_stability(values):
    max_stability = 0
    cur_stability = 0

    for value in values:
        if value == 1:
            cur_stability += 1
        else:
            cur_stability = 0

        if cur_stability > max_stability:
            max_stability = cur_stability

    return max_stability
