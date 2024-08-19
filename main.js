console.log("¡Bienvenido a Mi Página Web!");
// main.js
document.getElementById('entrada-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;

    const nuevaEntrada = document.createElement('div');
    nuevaEntrada.classList.add('nueva-entrada');

    const entradaTitulo = document.createElement('h3');
    entradaTitulo.textContent = titulo;

    const entradaContenido = document.createElement('p');
    entradaContenido.textContent = contenido;

    nuevaEntrada.appendChild(entradaTitulo);
    nuevaEntrada.appendChild(entradaContenido);

    document.getElementById('entradas').appendChild(nuevaEntrada);

    document.getElementById('entrada-form').reset();
});