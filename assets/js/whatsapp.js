// JavaScript para el comportamiento del botón y el tooltip
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const whatsappTooltip = document.getElementById("whatsapp-tooltip");
    const whatsappMessage = document.getElementById("whatsapp-message");
    const whatsappSend = document.getElementById("whatsapp-send");
    let tooltipOpen = false;

    whatsappButton.addEventListener("click", function () {
        if (tooltipOpen) {
            whatsappTooltip.style.animation = "slideOutRight 0.5s ease-in-out";
            setTimeout(() => {
                whatsappTooltip.style.display = "none";
            }, 500);
            tooltipOpen = false;
        } else {
            whatsappTooltip.style.display = "block";
            whatsappTooltip.style.animation = "slideInRight 0.5s ease-in-out";
            tooltipOpen = true;
        }
    });

    whatsappSend.addEventListener("click", function () {
        const message = encodeURIComponent(whatsappMessage.value);
        const url = `https://wa.me/5491165959914?text=${message}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(url, "_blank");

        // Cerrar el tooltip
        whatsappTooltip.style.animation = "slideOutRight 0.5s ease-in-out";
        setTimeout(() => {
            whatsappTooltip.style.display = "none";
        }, 500);
        tooltipOpen = false;
    });
});
