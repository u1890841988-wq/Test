# 🎁 Meine Wunschliste 2026

Das ist mein allererstes Web-App-Projekt! Hier lerne ich die Grundlagen von HTML, CSS und JavaScript.

## Features
* **Wünsche hinzufügen:** Einfach in das Feld tippen.
* **Wünsche löschen:** Klicke auf das ❌, um einen Eintrag zu entfernen.
* **Responsive Design:** Sieht auch auf dem Handy gut aus.

## Installation
Du musst nichts installieren. Öffne einfach die `index.html` in deinem Browser.

## Roadmap
- [ ] Daten im Browser speichern (LocalStorage)
- [ ] Dark Mode hinzufügen
- [ ] Kategorien für Wünsche (z.B. "Technik", "Reisen")
- [ ] meinButton
// 1. Den Button im Code finden (über die ID)
const btn = document.getElementById('meinButton');

// 2. Ihm sagen, worauf er hören soll
btn.addEventListener('click', function() {
    console.log("Button wurde geklickt!");
    document.body.style.backgroundColor = "lightblue"; // Ändert die Hintergrundfarbe
});
