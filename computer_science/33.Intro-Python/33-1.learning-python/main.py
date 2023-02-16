# list
fruits = ['laranja', 'maçã', 'uva', 'abacaxi']

fruits[0]

fruits[-1]

fruits.append('banana')

fruits.remove('abacaxi')

fruits.extend(['pera', 'melão', 'kiwi'])

fruits.index('maçã')

fruits.sort()

trybe_course = ['Introdução', 'Front-end', 'Back-end']

trybe_course.append('Ciência da Computação')

trybe_course[0] = 'Fundamentos'

# turple
user = ('Will', 'Marcondes', 42)

user[0]

# set
permissions = {'member', 'group'}

permissions.add('root')

permissions.add('member')

permissions.union({'user'})

permissions.intersection({'user', 'member'})

permissions.difference({'user'})

me = set()

me.add('Cadu')

# frozenset
# permissions = frozenset(["member", "group"])

permissions.union({"user"})

permissions.intersection({"user", "member"})

permissions.difference({"user"})

# dict
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}

people_by_id[1]

del people_by_id[1]

people_by_id.items()

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"

del info["origem"]

# range
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

person = ("Thiago", "Nobre", 19)

my_list = [20, 20, 1, 2]
count_elements = {
    20: 2,
    1: 1,
    2: 2
}
