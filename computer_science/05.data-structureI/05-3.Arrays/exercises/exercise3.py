def count_combinations(nums):
    answer = 0
    i = 0
    size = len(nums)
    for i in range(size):
        for j in range(i + 1, size):
            if nums[i] == nums[j]:
                answer += 1
    return answer


print(count_combinations([1, 3, 1, 1, 3, 2, 5]))
