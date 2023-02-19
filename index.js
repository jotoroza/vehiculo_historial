function refrescarPagina() {
    location.reload();
}

function ocultarImagenes() {
    var imagenes = document.getElementById('galeria');

    if (imagenes.style.display === "none") {
        imagenes.style.display = "block";
    } else {
        imagenes.style.display = "none";
    }
}