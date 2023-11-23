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
async function loadAjaxData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return {
    status: response.status,
    data: data,
    num_totale: data.length,
    url: url,
  };
}

(async function () {
  try {
    // Invoco una funzione che mi recupererà i dati dall'url indicato.
    const data = await loadAjaxData("https://fakeastoreapi.com/users");
  } catch (err) {
    console.log(err);
  }
})();
