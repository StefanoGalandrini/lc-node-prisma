const { log } = require("console");
const fs = require("fs");

function loadJsonData(cbSuccess, cbError) {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      cbError(err);
      return;
    }

    cbSuccess(data);
  });
}

loadJsonData(
  (result) => {
    log("File data.json letto correttamente");
  },
  (err) => {
    log("Errore nella lettura del file data.json");
  }
);

// voglio sapere i dati letti
