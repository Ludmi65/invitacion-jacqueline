// CUENTA REGRESIVA

const fechaFiesta = new Date("2026-12-05T21:00:00-03:00").getTime();

function actualizarCuenta() {

    const ahora = new Date().getTime();
    const diferencia = fechaFiesta - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);

// Crear lluvia de brillitos

const contenedorBrillos = document.querySelector(".lluvia-brillos");

for (let i = 0; i < 35; i++) {

    const brillo = document.createElement("span");

    brillo.classList.add("brillito");

    brillo.textContent = Math.random() > 0.5 ? "✧" : "✦";

    brillo.style.left = Math.random() * 100 + "%";

    brillo.style.fontSize = (8 + Math.random() * 12) + "px";

    brillo.style.animationDuration = (5 + Math.random() * 7) + "s";

    brillo.style.animationDelay = Math.random() * 8 + "s";

    contenedorBrillos.appendChild(brillo);
}

const firma = document.querySelector(".texto-tecleado");

const observadorFirma = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            firma.style.animation = "none";
            firma.offsetHeight;
            firma.style.animation = "";
        }
    });
}, {
    threshold: 0.5
});

observadorFirma.observe(firma);

const seccionDetalles = document.querySelector(".detalles-fiesta");
const fuegos = document.querySelector(".fuegos-artificiales");

const observarFuegos = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            fuegos.classList.remove("explotar");
            void fuegos.offsetWidth;
            fuegos.classList.add("explotar");
        } else {
            fuegos.classList.remove("explotar");
        }
    });
}, {
    threshold: 0.5
});

observarFuegos.observe(seccionDetalles);

document.addEventListener("DOMContentLoaded", () => {

    const seccionMensaje = document.querySelector(".mensaje");

    const observarMariposa = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                seccionMensaje.classList.add("mariposa-activa");
            } else {
                seccionMensaje.classList.remove("mariposa-activa");
            }

        });

    }, {
        threshold: 0.3
    });

    observarMariposa.observe(seccionMensaje);

});