const fetch = require("node-fetch").default;

/**
 * Legge i dati dall'api indicata e li ritorna sotto forma di un oggetto con queste chiavi:
 * - status: lo stato della richiesta
 * - data: i dati recuperati
 * - num_totale: il numero totale di dati recuperati
 * - url: l'url da cui sono stati recuperati i dati
 *
 * @param {string} url
 */
function loadAjaxData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((data) => {
            // finalmente ho i dati
            // resolve(data)

            resolve({
              status: response.status,
              data: data,
              num_totale: data.length,
              url: url,
            })
          })
          .catch((err) => {reject(err)});
      })
      .catch((err) => {reject(err)});
  });
}

// Invoco una funzione che mi recupererà i dati dall'url indicato.
loadAjaxData("https://fakestoreapi.com/users")
  .then((data) => {
    // dati finali
  })
  .catch((err) => {});
