employees = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: []
}


def count_score(employees, num, memo={}):
    if num in memo:
        return memo[num]

    memo[num] = 1

    for employee in employees[num]:
        memo[num] += count_score(employees, employee, memo)
   
    return memo[num]


print(count_score(employees, 1))
print(count_score(employees, 2))
print(count_score(employees, 3))
print(count_score(employees, 4))
print(count_score(employees, 5))
print(count_score(employees, 6))
print(count_score(employees, 7))
