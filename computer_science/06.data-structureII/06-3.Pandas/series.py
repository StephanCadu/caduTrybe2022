import pandas as pd


cavaleiros = ["Ikki", "Hyoga", "Seyia", "Shiryu", "Shun"]

serie = pd.Series(cavaleiros)

print(serie)

sailors = {
    "Moon": "Usagi",
    "Mercury": "Ami",
    "Mars": "Rei",
    "Jupter": "Makoto",
    "Venus": "Minako",
}

second_serie = pd.Series(sailors)

print(second_serie)
