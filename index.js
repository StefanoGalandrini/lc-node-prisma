const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function read(id) {
  console.log("Sto eseguendo la funzione read");

  if (id) {
    prisma.pizza.findUnique({ where: { id: parseInt(id) } }).then((pizza) => {
      console.log(`Pizza con id ${id}: `, pizza);
    });
  } else {
    prisma.pizza.findMany().then((pizze) => {
      console.log("Lista delle pizze: ", pizze);
    });
  }
}

function create(jsonData) {
  prisma.pizza.create({ data: jsonData }).then((pizza) => {
    console.log("Pizza creata: ", pizza);
  });
  console.log("Sto eseguendo la funzione create");
}

function update() {
  console.log("Sto eseguendo la funzione update");
}

function destroy() {
  console.log("Sto eseguendo la funzione destroy");
}

const requiredFunction = process.argv[2];

switch (requiredFunction) {
  case "read":
    const id = process.argv[3];
    read(id);
    break;
  case "create":
    const jsonData = JSON.parse(process.argv[3] || "{}");

    create(jsonData);
    break;
  case "update":
    update();
    break;
  case "destroy":
    destroy();
    break;
  default:
    console.log("Function not found");
}

// read();
// create();
// update();
// destroy();
