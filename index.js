import { roles, habilidades, herramientasFront, herramientasBack, herramientasBD, herramientasOtras, stackProyecto, tecnologiasProyectos } from './js/data/perfil.js';
import { iniciarMaquinaDeEscribir } from './js/modules/maquinaEscribir.js';
import { pintarHabilidades, pintarIconos, pintarStack } from './js/modules/render.js';
import { iniciarAnimaciones } from './js/modules/animaciones.js';
import { iniciarSpotlight } from './js/modules/spotlight.js';
import { iniciarNavegacion } from './js/modules/navegacion.js';

iniciarMaquinaDeEscribir(document.getElementById('rol'), roles);

pintarHabilidades(document.getElementById('lista-habilidades'), habilidades);
pintarIconos(document.getElementById('iconos-front'), herramientasFront);
pintarIconos(document.getElementById('iconos-back'), herramientasBack);
pintarIconos(document.getElementById('iconos-bd'), herramientasBD);
pintarIconos(document.getElementById('iconos-herramientas'), herramientasOtras);


document.querySelectorAll('[data-tecnologias]').forEach((contenedor) => {
  pintarIconos(contenedor, tecnologiasProyectos[contenedor.dataset.tecnologias] || []);
});
pintarStack(document.getElementById('barra-langs'), document.getElementById('leyenda'), stackProyecto);

iniciarAnimaciones();
iniciarSpotlight(document.getElementById('spotlight'));
iniciarNavegacion();
