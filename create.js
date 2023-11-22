const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const listaPizze = [
  {
    name: "Margherita",
    image: "margherita.webp",
  },
  {
    name: "Marinara",
    image: "marinara.jpeg",
  },
  {
    name: "Diavola",
    image: "diavola.jpeg",
  },
  {
    name: "Bufalina",
    image: "bufalina.jpeg",
  },
  {
    name: "4 formaggi",
    image: "4_formaggi.jpeg",
  },
];

// Creazione di un singolo elemento
prisma.pizza.create({
  data: {
    name: listaPizze[0].name,
    image: listaPizze[0].image,
    price: 5.5
  },
}).then((nuovaPizza) => {
  console.log("Nuova pizza creata: ", nuovaPizza);
});

// Creazione di più elementi contemporaneamente
prisma.pizza.createMany({
  data: listaPizze.map((pizza) => {
    pizza.price = 5.5
    return pizza 
  }),
}).then((result) => {
  console.log("Nuova pizza creata: ", result);
});