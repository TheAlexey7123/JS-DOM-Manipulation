import citas from "./citas.js";

document.addEventListener('DOMContentLoaded', () => {
    const textCita = document.getElementById('cita');
    const name = document.getElementById('autor');
    const boton = document.getElementById('boton-cambiar-cita');

    function random() {
        return Math.floor(Math.random() * (citas.length - 1));
    }

    function changeCitas() {
        const num = random();

        let autor = citas[num].autor;
        let texto = citas[num].texto;

        textCita.innerText = `${texto}`;
        name.innerText = `${autor}`;
    }

    boton.onclick = () => {
        changeCitas();
    };

    changeCitas();

});