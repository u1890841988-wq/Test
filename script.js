const body = document.getElementById('mainBody');
const toggle = document.getElementById('toggleAnim');
const statusText = document.getElementById('status');
let fireworkInterval;

// --- 1. FARBE ÄNDERN LOGIK ---
document.getElementById('farbeBtn').addEventListener('click', function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const neueFarbe = `rgb(${r}, ${g}, ${b})`;
    
    body.style.backgroundColor = neueFarbe;
    this.innerText = neueFarbe; // Zeigt den Farbcode im Button an
});

// --- 2. WELLEN-EFFEKT (RIPPLE) LOGIK ---
document.getElementById('welleBtn').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    
    // Position relativ zum Button berechnen
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    this.appendChild(ripple);
    
    // Nach der CSS-Animation entfernen
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// --- 3. MASSIVES FEUERWERK (TOGGLE) LOGIK ---
toggle.addEventListener('change', function() {
    if (this.checked) {
        statusText.innerText = "🎆 MASSEN-FEUERWERK AN 🎆";
        statusText.style.color = "#ffcc00";
        
        // Intervall für Dauer-Explosionen (alle 40ms)
        fireworkInterval = setInterval(() => {
            // Erzeugt pro Intervall 10 Explosionen an zufälligen Orten
            for(let i = 0; i < 10; i++) {
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                createFirework(randomX, randomY);
            }
        }, 40); 
    } else {
        // Stop & Aufräumen
        statusText.innerText = "Status: Bereit";
        statusText.style.color = "#aaa";
        clearInterval(fireworkInterval);
    }
});

// FUNKTION: EINZELNES FEUERWERK ERZEUGEN
function createFirework(x, y) {
    const color = `hsl(${Math.random() * 360}, 100%, 65%)`;
    const particleCount = 20; // Anzahl der Funken pro Knall

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Zufällige Größe der Funken
        const size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.backgroundColor = color;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.boxShadow = `0 0 10px ${color}`;
        
        document.body.appendChild(p);

        // Flugrichtung und Weite berechnen
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 150;
        const destX = Math.cos(angle) * velocity;
        const destY = Math.sin(angle) * velocity;

        // Animation ausführen
        const anim = p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
        ], { 
            duration: 600 + Math.random() * 400, 
            easing: 'ease-out' 
        });

        // Partikel nach Ende löschen, um Browser-Speicher zu sparen
        anim.onfinish = () => p.remove();
    }
}
