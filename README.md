# Prisma

1. Inizializziamo il progetto con npm init
2. Installiamo prisma e prisma client
3. Inizializziamo prisma nel nostro progetto
4. Configuriamo la variabile DATABASE_URL nel file .env

# Funzioni
Prima di decidere quale funzione usare dobbiamo capire che tipo di operazione vogliamo eseguire?
- Voglio leggere tutti i dati o solo 1?
- voglio modificare o creare più elementi contemporaneamente o solo 1?
- voglio cancellare 1 o più elementi?

## Singola risorsa
Vanno a lavorare su una sola risorsa alla volta.
- create()
- update()
- findUnique() / findFirst()
- delete()

## Multiple risorsa
Vanno a lavorare su una o più risorsa alla volta.
- createMany()
- updateMany()
- findMany()
- deleteMany()