import pandas as pd


def calc_situation(media):
    return "Aprovado" if media >= 7 else "Reprovado"


grades_dict = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}

df = pd.DataFrame(grades_dict)

df["media"] = (df["primeira_nota"] + df["segunda_nota"]) / 2

df["situacao"] = df["media"].apply(calc_situation)

print(df.groupby(by=["situacao"]))

# print(df)

# print(df.shape)
# print(df.columns)
# print(df.describe())
# print(df.info())
# print(df.head(6))
# print(df.tail(7))
