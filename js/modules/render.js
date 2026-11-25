/* Funciones que generan HTML (con clases de Bootstrap) a partir de js/data/perfil.js */

// Barras de habilidades agrupadas (componente progress de Bootstrap)
export function pintarHabilidades(contenedor, grupos) {
  if (!contenedor) return;
  contenedor.innerHTML = Object.entries(grupos).map(([grupo, lista]) => `
    <div class="mb-4">
      <h4 class="small fw-normal text-body-secondary mb-2"># ${grupo}</h4>
      ${lista.map(([nombre, nivel]) => `
        <div class="habilidad row g-2 align-items-center small mb-1">
          <span class="col-5 col-sm-4 text-body-emphasis">${nombre}</span>
          <div class="col">
            <div class="progress" role="progressbar" aria-label="${nombre}" aria-valuenow="${nivel}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" data-v="${nivel}"></div>
            </div>
          </div>
          <span class="col-2 col-sm-1 text-end">${nivel}%</span>
        </div>`).join('')}
    </div>`).join('');
}

// Grid de íconos de herramientas (cada uno es una columna del row de Bootstrap)
export function pintarIconos(contenedor, lista) {
  if (!contenedor) return;
  contenedor.innerHTML = lista
    .map(([nombre, icono]) => `<div class="col icono small text-body-emphasis">${crearIcono(icono)}${nombre}</div>`)
    .join('');
}

// Devuelve el <i> del ícono: clase de Devicon, o "si:nombre:color" para Simple Icons
const SIMPLE_ICONS = 'https://cdn.jsdelivr.net/npm/simple-icons@16.30.0/icons/';
function crearIcono(icono) {
  if (icono.startsWith('si:')) {
    const [, nombre, color] = icono.split(':');
    return `<i class="si" style="--si-url:url('${SIMPLE_ICONS}${nombre}.svg');--si-color:${color}" aria-hidden="true"></i>`;
  }
  return `<i class="${icono}" aria-hidden="true"></i>`;
}

// Barra de stack (progress-stacked de Bootstrap) y su leyenda
export function pintarStack(barra, leyenda, stack) {
  if (barra) barra.innerHTML = stack.map(([nombre, porcentaje, color]) => `
    <div class="progress" role="progressbar" aria-label="${nombre}" aria-valuenow="${porcentaje}" aria-valuemin="0" aria-valuemax="100" style="width:${porcentaje}%">
      <div class="progress-bar" style="background:${color}"></div>
    </div>`).join('');
  if (leyenda) leyenda.innerHTML = stack.map(([nombre, porcentaje, color]) => `
    <li class="d-flex align-items-center gap-2 text-body-emphasis">
      <span class="punto rounded-circle" style="background:${color}"></span>${nombre}<em class="ms-auto fst-normal text-body-secondary">${porcentaje}%</em>
    </li>`).join('');
}
