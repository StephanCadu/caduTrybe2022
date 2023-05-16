import pandas as pd


df = pd.read_csv("pesquisa_pao_na_chapa.csv")

# 1
menor_valor = df["preco_reais"].loc[df["produto"] == "queijo muçarela"].min()
dia = df["dia_da_semana"].loc[
    (df["preco_reais"] == menor_valor) & (df["produto"] == "queijo muçarela")
]

print(dia)

# 2
maior_valor = df["preco_reais"].loc[df["produto"] == "tomate"].max()
fornecedor = df["nome_do_fornecedor"].loc[
    (df["preco_reais"] == maior_valor) & (df["produto"] == "tomate")
]

print(fornecedor)

# 3
fechado = df["dia_da_semana"].loc[
    (df["preco_reais"].isnull()) & (df["nome_do_fornecedor"] == "soma pão")
]

print(fechado)

# 4
new_df = (
    df.groupby(by="produto")
    .mean(numeric_only=True)
    .rename(columns={"preco_reais": "preco_medio"})
)

print(new_df)
