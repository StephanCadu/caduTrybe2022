import pandas as pd
from sqlalchemy import create_engine

# import pymysql

database_url = "mysql+pymysql://root:root@localhost:3306/estudantes"

engine = create_engine(database_url)

db_conn = engine.connect()

grades_dict = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3],
}

df = pd.DataFrame(grades_dict)

try:
    df.to_sql("estudantes", db_conn, if_exists="replace")

except Exception as error:
    print("Um erro ocorreu", error)

else:
    print("SUCESSO!")
finally:
    db_conn.close()

df = pd.read_sql("estudantes", engine)

print(df.head())

df.to_sql(name="notas", con=engine, index=False, if_exists="replace")
