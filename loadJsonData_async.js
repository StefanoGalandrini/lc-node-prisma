const { log } = require("console");
const fs = require("fs/promises");

async function loadJsonData() {
  const data = await fs.readFile("./db.json", "utf8")
  
  return data
}

// IIFE - funzione autoinvocante
(async () => {
  const res = await loadJsonData();

  log("risultato", res);
})()


// voglio sapere i dati letti
