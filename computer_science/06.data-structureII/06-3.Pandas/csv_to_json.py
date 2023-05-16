import pandas as pd


chuvas_morumbi = pd.read_csv("chuvas_morumbi.csv")
chuvas_morumbi.to_json("chuvas-morumbi.json")
