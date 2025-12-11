// Array para almacenar los índices de cada carrusel
// Índice 0: Carrusel Principal (index.html)
// Índice 1: Carrusel Real Madrid
// Índice 2: Carrusel FC Barcelona
// Índice 3: Carrusel Atlético de Madrid
let slideIndices = [1, 1, 1, 1]; 

// Función para inicializar y mostrar un carrusel específico
function mostrarSlides(carruselIndex, n) {
    let i;
    
    // Obtener el tipo de slides (principal o leyenda)
    let slides;
    if (carruselIndex === 0) {
        slides = document.getElementsByClassName("carrusel-slide"); // Carrusel Principal
    } else {
        slides = document.getElementsByClassName("carrusel-leyendas")[carruselIndex - 1].getElementsByClassName("leyenda-slide"); // Carrusel de Leyendas
    }

    // Si no hay slides, detener la función
    if (slides.length === 0) return;

    // Ajustar el índice para el carrusel actual
    if (n > slides.length) {
        slideIndices[carruselIndex] = 1;
    }
    if (n < 1) {
        slideIndices[carruselIndex] = slides.length;
    }

    // Ocultar todos los slides de ese carrusel
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostrar el slide actual
    slides[slideIndices[carruselIndex] - 1].style.display = "block";
}


// --- FUNCIONES DE CONTROL ---

// Control para el Carrusel Principal (Botones prev/next existentes)
function cambiarSlide(n) {
  // Carrusel Index 0
  mostrarSlides(0, slideIndices[0] += n);
}

// Control para los Carruseles de Leyendas (Nuevos botones prev-small/next-small)
function cambiarLeyenda(carruselIndex, n) {
    // Carrusel Index 1, 2, o 3
    mostrarSlides(carruselIndex, slideIndices[carruselIndex] += n);
}


// --- INICIALIZACIÓN ---

// Inicializa todos los carruseles al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarSlides(0, 1); // Inicializa el carrusel principal
    mostrarSlides(1, 1); // Inicializa Madrid
    mostrarSlides(2, 1); // Inicializa Barcelona
    mostrarSlides(3, 1); // Inicializa Atlético
});