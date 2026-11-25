/* Escribe y borra frases en un elemento, una tras otra, en bucle. */
export function iniciarMaquinaDeEscribir(elemento, frases, { escribir = 65, borrar = 30, pausa = 1800 } = {}) {
  if (!elemento || !frases.length) return;
  let indiceFrase = 0;
  let indiceLetra = 0;
  let borrando = false;

  function paso() {
    const texto = frases[indiceFrase];
    elemento.textContent = texto.slice(0, indiceLetra);

    if (!borrando && indiceLetra < texto.length) indiceLetra++;
    else if (!borrando) { borrando = true; return setTimeout(paso, pausa); }
    else if (indiceLetra > 0) indiceLetra--;
    else { borrando = false; indiceFrase = (indiceFrase + 1) % frases.length; }

    setTimeout(paso, borrando ? borrar : escribir);
  }
  paso();
}
