document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.container');

    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección inmediata

        document.body.classList.add('fade-out');

        setTimeout(function() {
            window.location.href = link.href; // Redirige después de la animación
        }, 1000); // Tiempo de la animación en milisegundos (1 segundo)
    });
});


