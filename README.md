

# 🏛️ Atelier - Studio di Architettura

Un sito web one-page per uno studio di architettura, progettato per essere moderno, responsivo e con supporto nativo al tema chiaro/scuro.

## 🛠️ Tecnologie Utilizzate

Questo progetto è stato sviluppato mettendo in pratica i concetti di:
* **HTML5 semantico**: Utilizzo corretto dei tag (`<header>`, `<section>`, `<footer>`, `<nav>`).
* **Bootstrap 5.3 (via CDN)**: Per la griglia responsive, la navbar sticky, il componente modale e le utility di spaziamento.
* **SASS (SCSS)**: Per la gestione avanzata degli stili, utilizzando:
  * **Variabili**: Per colori brand, ombre e colori del tema scuro.
  * **Mixin**: Creazione del mixin `card-elevata` per l'effetto hover rialzato delle card.
  * **Nesting**: Per mantenere il codice CSS organizzato e leggibile.
* **JavaScript (Vanilla)**: Per la logica di interazione (toggle tema e gestione della modale).

## ✨ Caratteristiche Principali

* **Design Responsivo**: Layout ottimizzato per mobile, tablet e desktop grazie al sistema a griglia di Bootstrap.
* **Navbar Sticky**: La barra di navigazione rimane fissa in alto durante lo scroll con un menu hamburger automatico su schermi piccoli.
* **Effetto Hover sulle Card**: Le card dei servizi si sollevano e aumentano la loro ombra al passaggio del mouse (desktop), grazie al mixin SCSS.
* **Tema Chiaro / Tema Scuro**: 
  * Toggle dinamico tramite un bottone con emoji (🌙 / ☀️).
  * Cambio dell'attributo `data-bs-theme` sull'elemento `<html>`.
  * Ombre delle card adattate (bianche in tema scuro per essere visibili su fondo nero).
  * Transizioni fluide tra i due temi.
* **Modale di Contatto**: 
  * Apertura e chiusura gestita nativamente da Bootstrap.
  * Form con validazione HTML nativa.
  * Invio fittizio con messaggio di successo animato (fading) e chiusura automatica dopo 2 secondi.

## 📁 Struttura del Progetto

```text
Atelier/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css      # File CSS compilato da SASS
    ├── js/
    │   └── script.js      # Logica JavaScript (tema e modale)
    └── scss/
        └── style.scss     # File sorgente SASS
```

## 💻 Come avviare il progetto in locale

Clona il repository o scarica la cartella del progetto.

Apri index.html nel tuo browser. Il sito è visibile immediatamente grazie all'uso di CDN per Bootstrap.

## Modificare gli stili (SASS)
Se vuoi modificare gli stili, devi compilare il file SCSS. Assicurati di avere SASS installato sul tuo computer (npm install -g sass).

Apri il terminale nella cartella del progetto e avvia la compilazione in modalità watch:

```bash
sass --watch assets/scss/style.scss:assets/css/style.css
```
Ogni volta che salverai il file style.scss, il file style.css verrà aggiornato automaticamente.


## 🎨 Palette Colori (Tema Chiaro)
**Brand Primary**: hsl(20, 30%, 35%)

**Brand Hover**: hsl(20, 30%, 27%)

**Navbar/Footer**: hsl(20, 20%, 15%)

**Testo**: #000000

**Sfondo Card**: #ffffff

(Il tema scuro utilizza sfondi #121212 e #1e1e1e con testi #f0f0f0)

## 👨‍💻 Autore
Sviluppato da Alessandro Lainà durante il corso Epicode come progetto settimanale numero 6