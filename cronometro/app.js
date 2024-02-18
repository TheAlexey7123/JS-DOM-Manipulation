document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('boton-inicio-pausa');
    const restart = document.getElementById('boton-reiniciar');
    const cron = document.getElementById('cronometro');

    let [hours, minutes, seconds] = [0, 0, 0];
    let estado = 0;
    let intervale;

    function f_play() {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        update(hours, minutes, seconds);

    }

    function format(x) {
        return x < 10 ? "0" + x : x;
    }

    function update(hours, minutes, seconds) {
        cron.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
    }

    function f_restart() {
        [hours, minutes, seconds] = [0, 0, 0];
        update(hours, minutes, seconds);
    }

    play.onclick = () => {
        if (estado === 0) {
            intervale = window.setInterval(f_play, 1000);
            play.innerHTML = `<i class="bi bi-pause-fill"></i>`;
            play.classList.remove('iniciar');
            play.classList.add('pausar');
            estado = 1;
        }

        else {
            window.clearInterval(intervale);
            play.classList.remove('pausar');
            play.classList.add('iniciar');
            play.innerHTML = `<i class="bi bi-play-fill"></i>`;
            estado = 0;
        }
    };

    restart.onclick = () => {
        f_restart();
    };

});