const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.pizza.update({
  where: {
    id: 2
  },
  data: {
    name: "Rucola e grana",
    price: 6.5
  }
}).then((pizza) => {
  console.log("Pizza aggiornata: ", pizza);
})