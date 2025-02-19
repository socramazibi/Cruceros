document.addEventListener("DOMContentLoaded", function () {
    const pdfViewer = document.getElementById("pdfViewer");
    const pdfInput = document.getElementById("pdfInput");

    // Definir el PDF por defecto
    const defaultPDF = "Programación Cruceros 2025 V5.9.pdf";
    pdfViewer.src = defaultPDF;

    // Actualizar PDF si el usuario cambia el nombre
    pdfInput.addEventListener("input", function () {
        pdfViewer.src = pdfInput.value;
    });
});
