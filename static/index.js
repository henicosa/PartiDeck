
document.addEventListener('DOMContentLoaded', function() {
  fetch('methoden.json')
      .then(response => response.json())
      .then(jsonData => {

        // ein zufälliges Listenelement auswählen
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        // JSON erfolgreich eingelesen
        // Felder der Tabelle füllen
        displayCard(jsonData[randomIndex])
      })
      .catch(error => {
        console.error('Fehler beim Lesen der JSON-Datei:', error);
      });
});

function displayCard(cardJson) {
  document.getElementById('titel').textContent = cardJson.Titel;
  document.getElementById('zielgruppe').textContent = cardJson.Zielgruppe;
  document.getElementById('anwendungsfall').textContent = cardJson.Anwendungsfall;
  document.getElementById('beschreibung').textContent = cardJson.Beschreibung;
  document.getElementById('personenzahl').textContent = `${cardJson.GeeignetePersonenzahl.min} - ${cardJson.GeeignetePersonenzahl.max}`;
  document.getElementById('partizipationsgrad').textContent = cardJson.Partizipation.Partizipationsgrad;
  document.getElementById('artDerPartizipation').textContent = cardJson.Partizipation.ArtDerPartizipation;
  document.getElementById('voraussetzungen').textContent = cardJson.Voraussetzungen;
  document.getElementById('daten').textContent = cardJson.Daten;
  document.getElementById('technischeTools').textContent = cardJson.TechnischeTools;
  document.getElementById('finanzielleRessourcen').textContent = cardJson.FinanzielleRessourcen;
  document.getElementById('risikoWagnis').textContent = cardJson.RisikoWagnis;
  document.getElementById('schwierigkeitenHindernisse').textContent = cardJson.SchwierigkeitenHindernisse;
  document.getElementById('ursprungTopDown').textContent = cardJson.Ursprung.TopDown;
  document.getElementById('ursprungBottomUp').textContent = cardJson.Ursprung.BottomUp;
  document.getElementById('dauerIntervall').textContent = cardJson.DauerIntervall;
  document.getElementById('vorbereitungszeitUmsetzung').textContent = cardJson.Vorbereitungszeit.Umsetzung;
  document.getElementById('vorbereitungszeitInitiierung').textContent = cardJson.Vorbereitungszeit.Initiierung;
  document.getElementById('nachhaltigkeit').textContent = cardJson.Nachhaltigkeit;
  document.getElementById('ergebnistyp').textContent = cardJson.Ergebnistyp;
}
