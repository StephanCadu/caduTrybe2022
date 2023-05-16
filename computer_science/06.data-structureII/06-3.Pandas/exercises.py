import pandas as pd


df = pd.read_csv("fifa_audience.csv")

# 1
print(df.describe())

# 2
print(df.loc[df["population_share"] > 2])

# 3
print(df.groupby("confederation")["country"].count().reset_index(name="count"))

# 4
print(df.loc[df["confederation"] == "CONMEBOL"])

# 5
print(df[df["confederation"] == "UEFA"]["tv_audience_share"].mean())
