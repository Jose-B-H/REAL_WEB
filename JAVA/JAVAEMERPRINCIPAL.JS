// Mostrar el modal automáticamente al cargar la página
window.onload = function() {
    const modal = document.getElementById('miModal');
    const cerrar = document.getElementById('cerrarModal');

    // MOSTRAR LA VENTANA
    modal.style.display = 'block';

    // CERRAR LA VENTANA CON EL CLICK
    cerrar.onclick = function() {
        modal.style.display = 'none';
    };

    // AQUI SE CIERRA AUTOMATICAMENTE SI DAMOS UN CLICK FUERA DEL CONTENIDO
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};
