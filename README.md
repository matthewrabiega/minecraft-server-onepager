# 🛠 Minecraft Server Onepager

<p align="center">
  <img src="assets/img/logo.png" alt="Server Logo" width="150">
</p>

---

<p align="center">
  <img src="assets/img/github.jpg" alt="GitBanner" width="100%">
</p>

Eine moderne und flexible Webseite für Minecraft-Server. 🏗️ Einfach anzupassen, schnell eingerichtet und perfekt, um deinen Server professionell zu präsentieren.

---

## 📌 Demo  
🔗 **[Live-Demo ansehen](http://demo01.pengu-network.de)**  

---

## 📥 Installation

```bash
git clone https://github.com/matthewrabiega/minecraft-server-webseite.git
cd minecraft-server-webseite
```

### ⚙️ Einrichtung
- 📂 Entpacke die Dateien und lade sie auf deinen Webserver.
- 🎨 Falls nötig, passe `index.html`, `style.css` und `script.js` an.
- ✅ Nach dem Hochladen ist die Seite direkt einsatzbereit.

---

## 🎨 Anpassung

### 📝 HTML (index.html & Unterseiten)
- **Servername & Beschreibung**: `<title>`, `<h1>`, `<p>`
- **Server-IP & Statusanzeige**: `play.deinserver.de`
- **Links zu Discord, YouTube, TikTok, Teamspeak**
- **Teamseite mit Spielernamen, Rängen und Avataren**
- **Dynamische Spielmodi-Anzeige (Bedwars, City Build, Sky Wars)**
- **Serverstatus-Popup mit Spieleranzahl und Icon**
- **Voting-Funktion für Spielmodi**
- **Footer mit Impressum und Credits**

### 🎨 Design (style.css)
- **Hauptfarbe**: `--primary-color` (`#ff9800`)
- **Hintergrundfarbe**: `--background-color` (`#f8f9fa`)
- **Schriftart**: `font-family: 'Roboto'`
- **Rangfarben für Teammitglieder**
  - Administrator: `#ff4500`
  - Supporter: `#32cd32`
  - Developer: `#ffd700`
  - Builder: `#00ced1`

### 🖼️ Medien
- **Logo ersetzen**: Datei `assets/img/logo.png`
- **Hintergrundbilder der Abschnitte (rotierend)**: `bg1.png`, `bg2.png`, `bg3.png`, `bg4.png`

### ⚙️ JavaScript (script.js)
- **Server-Status abrufen**: `loadServerData("play.deinserver.de")`
- **Dynamische Teamseite generieren**: `displayTeamGrid()`
- **Zufällige Nachrichten anzeigen**: `typeMessage()`
- **Smooth Scrolling zwischen den Sektionen**
- **Navigation-Highlighting je nach Scrollposition**
- **Automatische Bannerrotation mit Serverinfos**
- **Kopierbare Server-IP per Klick**

---

## 📞 Support & Kontakt
Hast du Fragen oder benötigst Hilfe? ✉️ Trete unserem Discord-Server bei, klicke auf [beitreten](https://discord.gg/HcqKn7CVN5)

---

## 📜 Lizenz
© 2025 **Matthew Rabiega (TheVelu)**  
🔒 Dieses Template ist für den privaten und nicht-kommerziellen Gebrauch vorgesehen.  
🚫 Verkauf oder erneutes Hochladen ist nicht gestattet.

