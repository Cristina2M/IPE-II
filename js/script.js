document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Academia Nova iniciado...");
    
    // Add simple form handling just for visual feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Transmisión enviada con éxito! Nos pondremos en contacto pronto.');
            form.reset();
        });
    });
});
