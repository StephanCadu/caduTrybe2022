import pandas as pd

grades_dict = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}

first_dataframe = pd.DataFrame(grades_dict)

print(first_dataframe)
