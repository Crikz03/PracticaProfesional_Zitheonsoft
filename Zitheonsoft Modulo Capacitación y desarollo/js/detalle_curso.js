document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source');
    const backLink = document.querySelector('.header-back-link a');
    
    // 1. Lógica del botón volver
    if (backLink) {
        if (source === 'index') {
            backLink.href = 'index.html';
            backLink.textContent = 'Volver al Inicio';
        } else {
            backLink.href = 'mi_aprendizaje.html';
            backLink.textContent = 'Volver a Mi Aprendizaje';
        }
    }

    // 2. Simulación de carga dinámica
    const courseId = params.get('curso');
    const courseTitle = document.querySelector('.course-hero-info h1');
    if (courseTitle && courseId) {
        // Formatear el param para que se vea como un título
        const formattedTitle = courseId.charAt(0).toUpperCase() + courseId.slice(1).replace(/-/g, ' ');
        courseTitle.textContent = `Curso de ${formattedTitle}`;
    }

    // 3. Interacción en los módulos
    const moduleItems = document.querySelectorAll('.module-item');
    moduleItems.forEach(item => {
        item.style.cursor = 'pointer'; 
        
        item.addEventListener('click', () => {
            const isLocked = item.querySelector('.icon-locked');
            const titleElement = item.querySelector('.module-title');
            const title = titleElement ? titleElement.textContent : 'este módulo';
            
            if (isLocked) {
                alert(`🔒 El módulo "${title}" está bloqueado.\n\nPor favor, completa los módulos anteriores para acceder a este contenido.`);
            } else {
                alert(`▶️ Abriendo: ${title}\n\n(Aquí se cargaría el reproductor de video o contenido)`);
            }
        });
    });

    // 4. Botones de acción principales
    const btnContinuar = document.querySelector('.btn-primary-large');
    const btnMateriales = document.querySelector('.btn-secondary-large');

    if (btnContinuar) {
        btnContinuar.addEventListener('click', () => {
            alert('Cargando el Módulo 3...\nRedirigiendo a la vista de contenido.');
        });
    }

    if (btnMateriales) {
        btnMateriales.addEventListener('click', () => {
            alert('Descargando materiales del curso (PDF, plantillas)...\n¡Revisa tu carpeta de descargas!');
        });
    }

    // 5. Animación del progreso circular
    const progressContainer = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    
    if (progressContainer && progressValue) {
        let startValue = 0;
        let endValue = 45; // Valor objetivo
        let speed = 25; // ms por incremento
        
        let progress = setInterval(() => {
            startValue++;
            
            // Actualizar el texto interior
            progressValue.innerHTML = `${startValue}% <span class="progress-label">Tu Progreso</span>`;
            
            // Actualizar el gradiente circular
            progressContainer.style.background = `conic-gradient(#ffffff ${startValue}%, rgba(255,255,255,0.3) ${startValue}%)`;
            
            if (startValue === endValue) {
                clearInterval(progress);
            }
        }, speed);
    }
});
