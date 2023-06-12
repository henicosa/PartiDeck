
let mainCard;
let offCard;

let cardsJson;
let currentCardIdx;

/**
 * loads json data for all cards and picks a random one to display
 */
document.addEventListener('DOMContentLoaded', function() {
  mainCard = document.getElementById("main-card");
  offCard = document.getElementById("off-card");

  fetch('methoden.json')
      .then(response => response.json())
      .then(jsonData => {
        cardsJson = jsonData;
        currentCardIdx = Math.floor(Math.random() * jsonData.length);
        fillCard(mainCard, currentCardIdx);
      })
      .catch(error => {
        console.error('Fehler beim Lesen der JSON-Datei:', error);
      });
});

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
}
