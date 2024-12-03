// Obtén el modal, el botón "Ver más" y el botón de cerrar
let modal = document.getElementById('modal');
let btn = document.getElementById('verMasBtn');
let span = document.getElementById('close');

// Mostrar el modal cuando el usuario haga clic en "Ver más"
btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Cerrar el modal cuando el usuario haga clic en el botón de cerrar (X)
span.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
