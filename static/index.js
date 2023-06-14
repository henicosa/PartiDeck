
const mainCard = document.getElementById("main-card");
const offCard = document.getElementById("off-card");
const mainCardInner = mainCard.querySelector(".flip-card-inner");
const offCardInner = offCard.querySelector(".flip-card-inner");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

let cardsJson;
let currentCardIdx;

/**
 * loads json data for all cards and picks a random one to display
 */
fetch('methoden.json')
    .then(response => response.json())
    .then(jsonData => {
      cardsJson = jsonData;

      currentCardIdx = getQueriedItem();
      fillCard(mainCard, currentCardIdx);
      updateButtonState();
    })
    .catch(error => {
      console.error('Fehler beim Lesen der JSON-Datei:', error);
    });

/**
 * Reads card index from query string if one was defined with ?item=...
 */
function getQueriedItem() {
  if (params.has("item")) {
    console.log(params.get("item"));
    const itemIdx = parseInt(params.get("item"));

    if (!isNaN(itemIdx) && Number.isInteger(itemIdx)) {
      return Math.min(Math.max(itemIdx, 1), cardsJson.length) - 1;
    }
  }
  return Math.floor(Math.random() * cardsJson.length);
}

/**
 * object with all json identifiers mapped to their equivalent identifier in the dom tree
 */
const idToAttributeMap = {
  titel: 'Titel',
  zielgruppe: 'Zielgruppe',
  anwendungsfall: 'Anwendungsfall',
  beschreibung: 'Beschreibung',
  personenzahl: 'GeeignetePersonenzahl',
  partizipationsgrad: 'Partizipation.Partizipationsgrad',
  artDerPartizipation: 'Partizipation.ArtDerPartizipation',
  voraussetzungen: 'Voraussetzungen',
  daten: 'Daten',
  technischeTools: 'TechnischeTools',
  finanzielleRessourcen: 'FinanzielleRessourcen',
  risikoWagnis: 'RisikoWagnis',
  schwierigkeitenHindernisse: 'SchwierigkeitenHindernisse',
  ursprungTopDown: 'Ursprung.TopDown',
  ursprungBottomUp: 'Ursprung.BottomUp',
  dauerIntervall: 'DauerIntervall',
  vorbereitungszeitUmsetzung: 'Vorbereitungszeit.Umsetzung',
  vorbereitungszeitInitiierung: 'Vorbereitungszeit.Initiierung',
  nachhaltigkeit: 'Nachhaltigkeit',
  ergebnistyp: 'Ergebnistyp'
};

/**
 * fills a card with all information from the json table
 * @param domCard dom element of the card to fill
 * @param cardIdx index of the card in the json data
 */
function fillCard(domCard, cardIdx) {
  let cardJson = cardsJson[cardIdx];

  for (const [id, attribute] of Object.entries(idToAttributeMap)) {
    if (id === 'personenzahl') {
      domCard.querySelector(`.${id}`).textContent = `${cardJson[attribute].min} - ${cardJson[attribute].max}`;
    } else {
      domCard.querySelector(`.${id}`).textContent = cardJson[attribute];
    }
  }
  domCard.querySelector(".card-num").textContent = `${cardIdx + 1} / ${cardsJson.length}`;
}
