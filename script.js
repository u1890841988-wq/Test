document.getElementById('fireworksButton').addEventListener('click', function() {
    triggerFireworksAndShake();
});

function triggerFireworksAndShake() {
    // 1. Wackel-Effekt aktivieren
    document.body.classList.add('shake');
    // Nach der Animation den Wackel-Effekt entfernen
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500); // Entspricht der Dauer der CSS-Shake-Animation

    // 2. Mehrere Feuerwerke zünden
    const numFireworks = 15; // Anzahl der Feuerwerke
    for (let i = 0; i < numFireworks; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 100); // Jedes Feuerwerk zeitlich versetzt starten
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Zufällige Startposition am unteren Bildschirmrand
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight; // Startet am unteren Rand

    // Zufällige Zielfarbe für das Feuerwerk
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff6600', '#ff0000'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.backgroundColor = randomColor;
    firework.style.color = randomColor; // Für den box-shadow im Keyframe

    // Zufällige Zielposition im oberen/mittleren Bereich
    const endX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1; // Nicht ganz am Rand
    const endY = Math.random() * window.innerHeight * 0.5; // Im oberen Bereich

    firework.style.left = `${startX}px`;
    firework.style.top = `${startY}px`;

    // Animation für das "Aufsteigen" des Feuerwerks
    // (Der "Explode"-Teil ist in CSS)
    firework.animate([
        { transform: `translate(-50%, 0)`, opacity: 0.8 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 1 }
    ], {
        duration: 800 + Math.random() * 400, // Zufällige Dauer
        easing: 'ease-out',
        fill: 'forwards'
    }).onfinish = () => {
        // Wenn das Aufsteigen beendet ist, explodiert es (durch CSS-Keyframe)
        // und wird dann entfernt
        setTimeout(() => {
            firework.remove();
        }, 1500); // Entspricht der Dauer von firework-explode
    };

    document.body.appendChild(firework);
}
