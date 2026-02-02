<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Meine Wunschliste 2026</title>
    <style>
        /* CSS: Das Design */
        body { font-family: sans-serif; display: flex; justify-content: center; padding: 50px; background: #f0f2f5; }
        .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 300px; }
        h2 { color: #333; }
        input { width: 70%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { padding: 8px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        ul { list-style: none; padding: 0; margin-top: 20px; }
        li { background: #eee; margin-bottom: 5px; padding: 8px; border-radius: 4px; display: flex; justify-content: space-between; }
    </style>
</head>
<body>

    <div class="card">
        <h2>Wunschliste 🎁</h2>
        <input type="text" id="itemInput" placeholder="Was wünschst du dir?">
        <button onclick="addItem()">Hinzufügen</button>
        <ul id="wishList"></ul>
    </div>

    <script>
        // JavaScript: Die Logik
        function addItem() {
            const input = document.getElementById('itemInput');
            const text = input.value;
            
            if (text === "") return; // Nichts tun, wenn das Feld leer ist

            const li = document.createElement('li');
            li.innerHTML = `${text} <span style="cursor:pointer" onclick="this.parentElement.remove()">❌</span>`;
            
            document.getElementById('wishList').appendChild(li);
            input.value = ""; // Eingabefeld leeren
        }
    </script>

</body>
</html>
