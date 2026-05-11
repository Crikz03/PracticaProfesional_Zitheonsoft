document.addEventListener("DOMContentLoaded", () => {
    // 1. Interacción para los filtros de estado (Píldoras)
    const filterPills = document.querySelectorAll('.filter-pill');
    if (filterPills.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                // Remover la clase active de todos
                filterPills.forEach(p => p.classList.remove('active'));
                // Agregar la clase active al clickeado
                pill.classList.add('active');
            });
        });
    }

    // 2. Interacciones genéricas para botones principales
    const btnCrearCurso = document.querySelector('.btn-admin-primary');
    if (btnCrearCurso && btnCrearCurso.textContent.includes('+')) {
        btnCrearCurso.addEventListener('click', () => {
            alert('Esta acción abriría el formulario para crear una nueva entidad (Curso, Regla, etc).');
        });
    }

    const btnsEditar = document.querySelectorAll('.action-icons .fa-pencil-alt, .btn-outline-blue');
    btnsEditar.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Abriendo vista de edición...');
        });
    });

    const btnsEliminar = document.querySelectorAll('.action-icons .fa-trash');
    btnsEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            if(confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
                // Lógica simulada de eliminación
                const row = btn.closest('tr') || btn.closest('.rule-card');
                if(row) row.style.display = 'none';
            }
        });
    });

    // Interacción para abrir el modal en admin_automatizacion.html
    const btnNuevaRegla = document.querySelector('.btn-admin-primary');
    if (btnNuevaRegla && btnNuevaRegla.textContent.includes('+ Nueva Regla')) {
        btnNuevaRegla.addEventListener('click', () => {
            const modal = document.getElementById('modal-regla');
            if (modal) modal.classList.add('active');
        });
    }
});

// Funciones globales para el modal
window.cerrarModal = function() {
    const modal = document.getElementById('modal-regla');
    if (modal) modal.classList.remove('active');
};

// Funciones para el Reporte de Analytics
window.abrirReporte = function() {
    const modal = document.getElementById('modal-reporte');
    if (modal) modal.classList.add('active');
};

window.cerrarReporte = function() {
    const modal = document.getElementById('modal-reporte');
    if (modal) modal.classList.remove('active');
};
