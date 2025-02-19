function loadPDF() {
  const pdfInput = document.getElementById('pdfInput');
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfPath = pdfInput.value.trim();
  
  if (pdfPath) {
    pdfViewer.src = pdfPath;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const pdfInput = document.getElementById('pdfInput');
  
  // Cargar el PDF inicial
  loadPDF();
  
  // Cargar PDF cuando cambie el valor del input
  pdfInput.addEventListener('input', loadPDF);
});