from typing import List


class Employee:
    def __init__(self, id, name) -> None:
        self.id = id
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self.buckets: List[List[Employee]] = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id)
        self.buckets[address].append(employee)

    def get_value(self, id):
        address = self.get_address(id)
        for employee in self.buckets[address]:
            if employee.id == id:
                return employee.name

    def has(self, id):
        address = self.get_address(id)
        return len(self.buckets[address]) != 0

    def update_value(self, id, new_name):
        address = self.get_address(id)
        for index, employee in enumerate(self.buckets[address]):
            if employee.id == id:
                self.buckets[address][index] = Employee(id, new_name)


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
my_hash = HashMap()

for id, name in employees:
    my_hash.insert(Employee(id, name))

print(my_hash.get_value(23))

print(my_hash.get_value(10))

my_hash.update_value(10, "name30")

print(my_hash.get_value(10))
