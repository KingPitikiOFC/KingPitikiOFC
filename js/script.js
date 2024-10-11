// Reproducir música de fondo al hacer clic en el botón
document.getElementById('playButton').onclick = function() {
    const musica = document.getElementById('musica');
    musica.play().catch((error) => {
        console.log('Error al reproducir la música: ' + error);
    });
};
