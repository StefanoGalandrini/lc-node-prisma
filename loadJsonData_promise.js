const { log } = require("console");
const fs = require("fs");

function loadJsonData() {
  /*
  Siccome so che questa funzione sarà asincrona,
  devo ritornare una Promise.
  */
  return new Promise((resolve, reject) => {
    // Funzione esecutore.

    // scrivo tutto il codice da eseguire
    // in modo asincrono
    fs.readFile("./data.json", "utf8", (err, data) => {
      // ho finito di eseguire il codice asincrono
      // ora devo decidere come risponderò alla Promise
      if (err) {
        reject(err); // esito negativo .catch()
        return;
      }

      resolve(data); // esito positivo .then()
    });
  });
}

loadJsonData()
  .then((result) => {
    log("File data.json letto correttamente");
  })
  .catch((err) => {
    log("Errore nella lettura del file data.json");
  });

// voglio sapere i dati letti
