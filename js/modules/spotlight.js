/* Luz radial que sigue al puntero. */
export function iniciarSpotlight(elemento) {
  if (!elemento) return;
  window.addEventListener('pointermove', (e) => {
    elemento.style.setProperty('--x', e.clientX + 'px');
    elemento.style.setProperty('--y', e.clientY + 'px');
  });
}
