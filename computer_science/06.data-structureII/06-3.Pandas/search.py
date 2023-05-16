import pandas as pd


data = {
    "comida": ["abacate", "requeijão", "margarina", "brigadeiro", "abacaxi"],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}

df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a condição
# df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["tipo"] == "doce"]
primeira_comida = df.iloc[0]

print(comidas_doces)
print(primeira_comida)
