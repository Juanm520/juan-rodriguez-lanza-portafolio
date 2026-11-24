/* Resalta en el menú lateral la sección que está en pantalla. */
export function iniciarNavegacion() {
  const enlaces = document.querySelectorAll('nav a');
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      enlaces.forEach((a) => a.classList.toggle('activo', a.getAttribute('href') === '#' + entrada.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('main section').forEach((s) => observador.observe(s));
}
