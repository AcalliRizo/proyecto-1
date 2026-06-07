
// Movimiento múltiple de carruseles usando clases
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
  // .querySelector busca la clase dentro de CADA contenedor de carrusel
  const track = carousel.querySelector('.carousel-track');
  const btnNext = carousel.querySelector('.btnNext'); 
  const btnPrev = carousel.querySelector('.btnPrev'); 

  // Al hacer click en Siguiente, avanza el carrusel correspondiente
  btnNext.addEventListener('click', () => {
    track.scrollLeft += 400; 
  });

  // Al hacer click en Atrás, retrocede el carrusel correspondiente
  btnPrev.addEventListener('click', () => {
    track.scrollLeft -= 400;
  });
});