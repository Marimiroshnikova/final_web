document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  });
  
  sr.reveal('.hero__content', {});
  sr.reveal('.product__card', { interval: 100 });
  sr.reveal('.about__content', { origin: 'left' });
  sr.reveal('.contact__form', { origin: 'right' });
});
