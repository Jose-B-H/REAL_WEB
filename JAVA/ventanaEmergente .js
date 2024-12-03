// Obtener la ventana emergente
var ventanaEmergente = document.getElementById("ventanaEmergente");

// Obtener el botón "Ver más"
var btn = document.getElementById("verMasBtn");

// Obtener el elemento de cierre (la "X")
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón "Ver más", se muestra la ventana emergente
btn.onclick = function() {
    ventanaEmergente.style.display = "flex"; // Cambiamos a "flex" para que se vea
}

// Cuando el usuario hace clic en la "X", se cierra la ventana emergente
span.onclick = function() {
    ventanaEmergente.style.display = "none";
}

// Cuando el usuario hace clic fuera de la ventana emergente, se cierra
window.onclick = function(event) {
    if (event.target == ventanaEmergente) {
        ventanaEmergente.style.display = "none";
    }
}
