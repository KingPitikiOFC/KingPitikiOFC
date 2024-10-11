// Reproducir música de fondo al cargar la página
window.onload = function() {
    const musica = document.getElementById('musica');
    musica.play().catch((error) => {
        console.log('Error al reproducir la música: ' + error);
    });
};
