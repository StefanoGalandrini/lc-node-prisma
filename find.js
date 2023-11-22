const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// trovo tutte le pizze che corrispondono alla query
prisma.pizza.findMany({
  // Non scrivendo select, viene eseguita una SELECT *
  select: {
    name: true, 
    id: true
  },
  where: {
    name: {
      contains: "ri"
    }
  },
  orderBy: {
    id: "desc"
  }
}).then((pizze) => {
  console.log("Lista pizze: ", pizze);
});


prisma.pizza.findFirst({
  where: {
    id: 1
  }
}).then((pizza) => {
  console.log("Pizza con id 1: ", pizza);
});