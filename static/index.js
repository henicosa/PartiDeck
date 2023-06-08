
document.addEventListener('DOMContentLoaded', function() {
  fetch('methoden.json')
      .then(response => response.json())
      .then(jsonData => {

        // ein zufälliges Listenelement auswählen
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        jsonData = jsonData[randomIndex];
        // JSON erfolgreich eingelesen
        // Felder der Tabelle füllen
        document.getElementById('titel').textContent = jsonData.Titel;
        document.getElementById('zielgruppe').textContent = jsonData.Zielgruppe;
        document.getElementById('anwendungsfall').textContent = jsonData.Anwendungsfall;
        document.getElementById('beschreibung').textContent = jsonData.Beschreibung;
        document.getElementById('minPersonenzahl').textContent = jsonData.GeeignetePersonenzahl.min;
        document.getElementById('maxPersonenzahl').textContent = jsonData.GeeignetePersonenzahl.max;
        document.getElementById('partizipationsgrad').textContent = jsonData.Partizipation.Partizipationsgrad;
        document.getElementById('artDerPartizipation').textContent = jsonData.Partizipation.ArtDerPartizipation;
        document.getElementById('voraussetzungen').textContent = jsonData.Voraussetzungen;
        document.getElementById('daten').textContent = jsonData.Daten;
        document.getElementById('technischeTools').textContent = jsonData.TechnischeTools;
        document.getElementById('finanzielleRessourcen').textContent = jsonData.FinanzielleRessourcen;
        document.getElementById('risikoWagnis').textContent = jsonData.RisikoWagnis;
        document.getElementById('schwierigkeitenHindernisse').textContent = jsonData.SchwierigkeitenHindernisse;
        document.getElementById('ursprungTopDown').textContent = jsonData.Ursprung.TopDown;
        document.getElementById('ursprungBottomUp').textContent = jsonData.Ursprung.BottomUp;
        document.getElementById('dauerIntervall').textContent = jsonData.DauerIntervall;
        document.getElementById('vorbereitungszeitUmsetzung').textContent = jsonData.Vorbereitungszeit.Umsetzung;
        document.getElementById('vorbereitungszeitInitiierung').textContent = jsonData.Vorbereitungszeit.Initiierung;
        document.getElementById('nachhaltigkeit').textContent = jsonData.Nachhaltigkeit;
        document.getElementById('ergebnistyp').textContent = jsonData.Ergebnistyp;
      })
      .catch(error => {
        console.error('Fehler beim Lesen der JSON-Datei:', error);
      });
});
