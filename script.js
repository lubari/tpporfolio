const menu = document.querySelector('.menu');
        let lastScrollY = window.scrollY; // Guarda la última posición de scroll

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling hacia abajo: Ocultar el menú
                menu.classList.add('hide');
            } else {
                // Scrolling hacia arriba: Mostrar el menú
                menu.classList.remove('hide');
            }

            // Si el usuario está en la parte superior de la página, el menú siempre debe ser visible
            if (window.scrollY <= 0) { // Usamos <= 0 para capturar el punto exacto de arriba
                menu.classList.remove('hide');
            }

            lastScrollY = window.scrollY; // Actualiza la última posición de scroll
        });