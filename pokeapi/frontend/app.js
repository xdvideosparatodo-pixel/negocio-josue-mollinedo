const btnBuscar = document.getElementById('btnBuscar');
const inputNombre = document.getElementById('inputNombre');
const resultado = document.getElementById('resultado');

async function ejecutarBusqueda() {
    const nombre = inputNombre.value.toLowerCase().trim();
    if (!nombre) return;

    resultado.innerHTML = 'Buscando...';

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const datos = await respuesta.json();
        mostrarPokemon(datos);
    } catch (error) {
        resultado.innerHTML = `<p>❌ ${error.message}</p>`;
    }
}

btnBuscar.addEventListener('click', ejecutarBusqueda);

// CORRECCIÓN: Cambiado para detectar la tecla Enter de forma correcta
inputNombre.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.code === 'Enter') {
        evento.preventDefault(); // Evita que se recargue la página si está dentro de un formulario
        ejecutarBusqueda();
    }
});

function mostrarPokemon(datos) {
    const nombreCapitalizado = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
    const tipos = datos.types.map(t => t.type.name).join(', ');
    
    const pesoKg = datos.weight / 10;
    const alturaMetros = datos.height / 10;

    resultado.innerHTML = `
        <div class="tarjeta">
            <h2>${nombreCapitalizado}</h2>
            <img src="${datos.sprites.front_default}" alt="${datos.name}">
            <p><strong>Tipo:</strong> ${tipos}</p>
            <p><strong>Peso:</strong> ${pesoKg} kg</p>
            <p><strong>Altura:</strong> ${alturaMetros} m</p>
        </div>
    `;
}
