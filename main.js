document.addEventListener("DOMContentLoaded", function () {
    const pdfViewer = document.getElementById("pdfViewer");
    const pdfInput = document.getElementById("pdfInput");

    // Definir el PDF por defecto
    const defaultPDF = "cruceros.pdf";
    pdfViewer.src = defaultPDF;

    // Actualizar PDF si el usuario cambia el nombre
    pdfInput.addEventListener("input", function () {
        pdfViewer.src = pdfInput.value;
    });
});
