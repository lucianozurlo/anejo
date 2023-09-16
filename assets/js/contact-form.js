document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const mensajeInput = document.getElementById("mensaje");
    const enviarButton = document.getElementById("enviar");

    enviarButton.addEventListener("click", function () {
        const nombre = encodeURIComponent(nombreInput.value);
        const telefono = encodeURIComponent(telefonoInput.value);
        const mensaje = encodeURIComponent(mensajeInput.value);
        const url = `https://wa.me/5491165959914?text=Nombre: ${nombre}%0ATeléfono: ${telefono}%0AMensaje: ${mensaje}`;

        // Abrir WhatsApp en una nueva pestaña con los datos del formulario
        window.open(url, "_blank");
    });
});
