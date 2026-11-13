// Atelier — Week Project Settimana VI

document.addEventListener('DOMContentLoaded', () => {
    
    // Tema scuro
    const themeToggleBtn = document.querySelector('#theme-toggle');

    if (!document.documentElement.hasAttribute('data-bs-theme')) {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');

        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });


    // Modale contatti
    const contactForm = document.querySelector('#contact-form');
    const successMessage = document.querySelector('#success-message');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            contactForm.style.display = 'none';
            successMessage.style.display = 'block';

            setTimeout(() => {
                const closeBtn = document.querySelector('#contactModal .btn-close');
                if (closeBtn) {
                    closeBtn.click();
                }

                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 300);
            }, 2000);
        });
    }


    const lavoriContainer = document.querySelector('#lavori-container');
    
    // Array per le card
    const lavori = [
        {
            id: 1,
            titolo: "Villa Moderna",
            categoria: "Residenziale",
            descrizione: "Ristrutturazione completa di una villa anni '70 con ampi spazi aperti e luce naturale.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+1"
        },
        {
            id: 2,
            titolo: "Ufficio Creativo",
            categoria: "Interior Design",
            descrizione: "Progettazione di un open space per un'agenzia pubblicitaria, con zone relax e aree collaborative.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+2"
        },
        {
            id: 3,
            titolo: "Loft Industriale",
            categoria: "Ristrutturazione",
            descrizione: "Recupero di un ex capannone in un loft residenziale, mantenendo i dettagli industriali.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+3"
        },
        {
            id: 4,
            titolo: "Boutique Hotel",
            categoria: "Interior Design",
            descrizione: "Allestimento di un boutique hotel nel centro storico, con materiali pregiati e design su misura.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+4"
        },
        {
            id: 5,
            titolo: "Casa al Lago",
            categoria: "Residenziale",
            descrizione: "Costruzione di una casa unifamiliare con vista lago, caratterizzata da ampie vetrate.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+5"
        },
        {
            id: 6,
            titolo: "Ristorante Fusion",
            categoria: "Ristrutturazione",
            descrizione: "Riqualificazione di un ex negozio in un ristorante fusion, con cucina a vista e sala accogliente.",
            img: "https://placehold.co/600x300/eeeeee/999999?text=Lavoro+6"
        }
    ];


    // Funzione per generare le card
    const generaCard = (listaLavori) => {
        // Svuoto il contenitore rimuovendo i figli uno ad uno
        // Uso removeChild per essere sicuro di non perdere i riferimenti
        while (lavoriContainer.firstChild) {
            lavoriContainer.removeChild(lavoriContainer.firstChild);
        }

        // Ciclo l'array
        listaLavori.forEach((lavoro) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4';

            const card = document.createElement('div');
            card.className = 'card-lavoro';

            const categoria = document.createElement('span');
            categoria.className = 'categoria';
            categoria.textContent = lavoro.categoria;

            const titolo = document.createElement('h3');
            titolo.textContent = lavoro.titolo;

            const img = document.createElement('img');
            img.src = lavoro.img;
            img.alt = lavoro.titolo;

            const descrizione = document.createElement('p');
            descrizione.textContent = lavoro.descrizione;

            // Assemblaggio
            card.appendChild(categoria);
            card.appendChild(titolo);
            card.appendChild(img);
            card.appendChild(descrizione);

            col.appendChild(card);
            lavoriContainer.appendChild(col);
        });
    };

    // Genera tutte le card all'inizio
    if (lavoriContainer) {
        generaCard(lavori);
    }


    // Gestione filtri
    const filtriContainer = document.querySelector('#filtri-lavori');
    const btnFiltri = document.querySelectorAll('.btn-filtro');

    if (filtriContainer) {
        filtriContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-filtro')) {
                const filtroScelto = e.target.dataset.filtro;

                // Rimuovo la classe "active" da tutti i bottoni
                btnFiltri.forEach(btn => btn.classList.remove('active'));
                // Aggiungo "active" al bottone cliccato
                e.target.classList.add('active');

                // Filtro l'array e rigenero le card
                if (filtroScelto === 'tutti') {
                    generaCard(lavori);
                } else {
                    const lavoriFiltrati = lavori.filter(lavoro => lavoro.categoria === filtroScelto);
                    generaCard(lavoriFiltrati);
                }
            }
        });
    }

});