// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtener el campo de texto
    const nombre = inputAmigo.value.trim(); // Obtener y limpiar el valor del campo (elimina espacios al inicio y final)

    // Validar si el campo está vacío después de eliminar espacios
    if (!nombre) { // Si el nombre está vacío o solo contiene espacios
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si está vacío
        return; // Salir de la función sin agregar el nombre
    }

    // Validar si el nombre ya existe en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista."); // Mostrar alerta si el nombre ya existe
        return; // Salir de la función sin agregar el nombre
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto
    inputAmigo.value = "";

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento <ul>
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Mostrar alerta si no hay amigos
        return; // Salir de la función
    }

    // Seleccionar un amigo aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre del amigo seleccionado

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById("resultado"); // Obtener el elemento de resultado
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; // Mostrar el resultado
}

// Event listeners para los botones (opcional, si prefieres no usar onclick en el HTML)
document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.querySelector(".button-add"); // Obtener el botón "Añadir"
    const botonSortear = document.querySelector(".button-draw"); // Obtener el botón "Sortear"

    // Asignar eventos a los botones
    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);
});
