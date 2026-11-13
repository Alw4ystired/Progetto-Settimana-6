// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


// Tema scuro

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('#theme-toggle');

    // Impostazione tema chiaro come default all'avvio
    if (!document.documentElement.hasAttribute('data-bs-theme')) {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }

    themeToggleBtn.addEventListener('click', () => {
        // Controllo dello stato attuale
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');

        if (currentTheme === 'dark') {
            // Passa al tema chiaro
            document.documentElement.setAttribute('data-bs-theme', 'light');
            themeToggleBtn.textContent = '🌙'; 
        } else {
            // Passa al tema scuro
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            themeToggleBtn.textContent = '☀️'; 
        }
    });
});

// Modale contatti
const contactForm = document.querySelector('#contact-form');
const successMessage = document.querySelector('#success-message');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
     e.preventDefault();

        // Nasconde il form e mostra il messaggio di successo
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Aspetta 2 secondi prima di chiudere la modale
        setTimeout(() => {

            // Ho provato a fare la chiusura della modale cosi
            const closeBtn = document.querySelector('#contactModal .btn-close');
            if (closeBtn) {
                closeBtn.click();
            }

            // 3. Dopo la chiusura (300ms per l'animazione), resetta tutto
            setTimeout(() => {
                contactForm.reset(); // Svuota i campi
                contactForm.style.display = 'block'; // Rimostra il form
                successMessage.style.display = 'none'; // Nasconde il messaggio
            }, 300);

        }, 2000);
    });
}
