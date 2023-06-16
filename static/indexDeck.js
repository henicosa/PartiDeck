
const deckCard = `

`
const deckHolder = document.getElementById("deck-inner")
let cardsJson;

/**
 * loads json data for all cards and picks a random one to display
 */
fetch('methoden.json')
    .then(response => response.json())
    .then(jsonData => {
      cardsJson = jsonData;
      createDeckCards();
    })
    .catch(error => {
      console.error('Fehler beim Lesen der JSON-Datei:', error);
    });

function createDeckCards() {
  cardsJson.forEach(function (card, i) {
    createTitleCard(i, card.Titel)
  });
}

function createTitleCard(idx, title) {
  deckHolder.insertAdjacentHTML("beforeend", `
<div id="card${idx}" class="card-item">
  <a href="index.html?item=${idx + 1}">
    <div class="card-inner">
      <section>
        <p>${title}</p>
      </section>
    </div>
  </a>
</div>`);
}