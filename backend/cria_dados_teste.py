import sqlite3

nome_banco = "animes.db"
con = sqlite3.connect(nome_banco)
cur = con.cursor()
# id INTEGER, modelo TEXT, cor TEXT, ano INTEGER, preco REAL, automatico INTEGER
animes = [
    (None, 'CDZ', 3.50),
    (None, 'DBZ', 2.00),
    (None, 'Naruto', 3.10)
]

cur.executemany("INSERT INTO Animes VALUES (?, ?, ?)", animes)

con.commit()
con.close()