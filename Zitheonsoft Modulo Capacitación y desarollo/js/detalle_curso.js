document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source');
    const backLink = document.querySelector('.header-back-link a');
    
    if (source === 'index') {
        backLink.href = 'index.html';
        backLink.textContent = 'Volver al Inicio';
    } else {
        backLink.href = 'mi_aprendizaje.html';
        backLink.textContent = 'Volver a Mi Aprendizaje';
    }
});
