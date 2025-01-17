# Minecraft Server Onepager Template

Dieses Repository enthält ein modernes und vollständig anpassbares **Onepager-Template** für Minecraft-Server. Es ist einfach zu bearbeiten und bietet eine Vielzahl an Funktionen, um deinen Server professionell zu präsentieren.

---

## 🌟 Features

### 🖌️ **Anpassbares Design**
- **Einfache Farbanpassung:** Über die `:root`-CSS-Variablen können Hauptfarben schnell geändert werden:
  ```css
  --primary-color: #ff9800;
  --primary-hover-color: #e68900;
  ```
- Unterstützung für unterschiedliche Schriftarten (Roboto ist standardmäßig eingebunden).

### 🎮 **Server-Informationen**
- Popup mit Serverdaten:
  - **Server-Icon** und **Server-IP**
  - Spieleranzahl (Live-Daten über API von `https://api.mcsrvstat.us`)

### 💡 **Interaktive Elemente**
- Smooth-Scrolling zwischen Sektionen.
- **Banner-Rotation:** Dynamische Nachrichten wie Discord-Einladung oder Teamspeak-Link.
- **Copy-to-Clipboard:** Einfaches Kopieren der Server-IP.

### 👥 **Team-Bereich**
- Präsentation von Teammitgliedern mit Avataren:
  - Bilder über UUID automatisch generiert (via `https://crafatar.com`).

### 🔧 **Optimierung**
- Responsives Design, (nicht auf Handy/Tablett angepasst).
- SEO-optimierte Struktur für bessere Sichtbarkeit.
- Einfacher Aufbau für zukünftige Erweiterungen.

---

## 🚀 Installation und Nutzung

### 1️⃣ **Repository klonen**
```bash
git clone https://github.com/deinusername/minecraft-server-onepager.git
```

### 2️⃣ **Struktur der Dateien**
- **`index.html`**: Hauptdatei mit allen Sektionen und Struktur.
- **`style.css`**: Design und Styling (Farben, Layout).
- **`script.js`**: Interaktive Funktionen (Popup, Smooth-Scrolling, API-Integration).

### 3️⃣ **Anpassungen vornehmen**

#### ⚙️ **Server-IP konfigurieren**
- Ändere die IP im **Popup und im Input-Feld** (`script.js`, `index.html`):
  ```javascript
  loadServerData("play.deinserver.de");
  ```
  ```html
  <input type="text" id="serverIp" value="play.deinserver.de" readonly class="server-ip-input" />
  ```

#### 👥 **Team-Mitglieder bearbeiten**
- UUIDs für Spieler-Avatare im Abschnitt `#team` anpassen:
  ```html
  <img src="https://crafatar.com/avatars/DEINE-UUID?size=100&overlay" alt="Spieler Kopf" />
  ```

#### 🎨 **Farben anpassen**
- Passe die Hauptfarben in der `style.css` an:
  ```css
  --primary-color: #ff9800;
  --primary-hover-color: #e68900;
  ```

#### 📋 **Banner-Nachrichten aktualisieren**
- Nachrichten für die rotierenden Banner in `script.js` anpassen:
  ```javascript
  const banners = [
      `<p>📢 Trete unserem <strong>Discord</strong> bei: <a href="https://discord.gg/link">Klick mich!</a></p>`,
      `<p>🎙️ Verbinde dich mit unserem <strong>Teamspeak</strong>: <a href="ts3server://deineTSip">Klick mich!</a></p>`
  ];
  ```

---

## 📂 Verzeichnisstruktur
```
├── index.html        # Hauptdatei der Webseite
├── assets/
│   ├── css/
│   │   └── style.css # Styling der Webseite
│   ├── js/
│   │   └── script.js # JavaScript für Interaktionen
│   └── img/          # Bilder, Logos, Avatare
├── LICENSE           # Lizenzinformationen
└── README.md         # Diese Dokumentation
```

---

## 📜 Lizenz
Dieses Template ist kostenlos für den persönlichen Gebrauch verfügbar. Änderungen sind erlaubt, jedoch dürfen das erneute Hochladen, die Verbreitung oder der Verkauf – auch in veränderter Form – nur mit ausdrücklicher Zustimmung des Autors erfolgen. Das Copyright im Footer muss erhalten bleiben.

---

## 📧 Kontakt - Bei Fragen oder Anfragen.

Discord: **einfachmatthew**
Discord-Server: **discord.gg/dejxvcwWR6**
Mail: **hej@velurapictures.de**

---

Viel Spaß beim Anpassen und Präsentieren deines Minecraft-Servers! 🚀
