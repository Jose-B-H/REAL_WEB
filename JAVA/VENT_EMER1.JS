// Variables de la ventana emergente
const popup = document.getElementById("simple-popup");
const closePopup = document.getElementById("close-popup");
const openPopup = document.getElementById("open-popup");
const okButton = document.getElementById("ok-button");

// Función para abrir la ventana emergente
openPopup.onclick = () => {
    popup.style.display = "block"; // Mostrar la ventana emergente
};

// Función para cerrar la ventana emergente
closePopup.onclick = () => {
    popup.style.display = "none"; // Ocultar la ventana emergente
};

// Función para aceptar la ventana emergente
okButton.onclick = () => {
    alert("Has aceptado la ventana emergente");
    popup.style.display = "none"; // Cerrar la ventana emergente al aceptar
};
