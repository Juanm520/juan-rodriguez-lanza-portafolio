/* Animaciones al hacer scroll: aparición de tarjetas, llenado de barras y contadores. */

function animarContador(elemento) {
  const meta = Number(elemento.dataset.meta);
  let actual = 0;
  (function paso() {
    actual = Math.min(meta, actual + 2);
    elemento.textContent = actual;
    if (actual < meta) setTimeout(paso, 20);
  })();
}

export function iniciarAnimaciones(selector = '.celda, #lista-habilidades') {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const el = entrada.target;
      el.classList.add('visible');
      el.querySelectorAll('.progress-bar[data-v]').forEach((barra) => { barra.style.width = barra.dataset.v + '%'; });
      el.querySelectorAll('.numero').forEach(animarContador);
      observador.unobserve(el);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(selector).forEach((el, i) => {
    if (el.classList.contains('celda')) el.style.transitionDelay = (i * 70) + 'ms';
    observador.observe(el);
  });
}
