const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Cancella l'elemento che corrisponde alla query indicata
prisma.pizza.delete({
  where: {
    id: 1
  }
}).then((result) => {
  console.log("Pizza cancellata: ", result);
})