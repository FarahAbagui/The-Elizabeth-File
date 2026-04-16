// Esta función se activa cuando clicas un objeto
function recogerObjeto(nombre) {
    // 1. Mirar qué tenemos guardado en la memoria del navegador
    let mochila = JSON.parse(localStorage.getItem("miMochila")) || [];

    // 2. Si el objeto no está en la mochila, lo guardamos
    if (!mochila.includes(nombre)) {
        mochila.push(nombre);
        localStorage.setItem("miMochila", JSON.stringify(mochila));
        alert("¡Has encontrado: " + nombre + "!");
    }

    // 3. Dibujar la mochila actualizada en la pantalla
    mostrarMochila();
}

// Esta función dibuja la lista de objetos en el menú
function mostrarMochila() {
    let mochila = JSON.parse(localStorage.getItem("miMochila")) || [];
    let listaHTML = document.getElementById("lista-objetos");
    
    if (listaHTML) {
        listaHTML.innerHTML = ""; // Limpiar la lista antes de escribir
        mochila.forEach(objeto => {
            listaHTML.innerHTML += "<li>" + objeto + "</li>";
        });
    }
}

// Cuando la página se carga, enseñar lo que ya teníamos
window.onload = mostrarMochila;

// Función para vaciar la mochila y empezar de cero
function reiniciarProgreso() {
    localStorage.removeItem("miMochila");
    location.reload();
}