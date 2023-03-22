import random
import json


times = 0
with open("../json/pokemons.json") as file:
    pokemons = json.load(file)
    chosen_pokemon = random.choice(pokemons["results"])
    print(chosen_pokemon["name"][0:times])

guess = ""
while not guess == chosen_pokemon["name"]:
    new_guess = input("Quem é esse pokemon?")
    guess = new_guess
    if guess == chosen_pokemon["name"]:
        print("Você acertou!")
    else:
        times += 1
        print(chosen_pokemon["name"][0:times])
