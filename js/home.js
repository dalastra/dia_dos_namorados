const audio = document.getElementById("musica");

const playBtn = document.getElementById("playBtn");

const progressBar =
document.querySelector(".progress-bar");

let tocando = false;

/* ====================
   PLAY / PAUSE
==================== */

playBtn.addEventListener("click", () => {

    if(tocando){

        audio.pause();

        playBtn.innerHTML = "▶";

    }else{

        audio.play();

        playBtn.innerHTML = "⏸";

    }

    tocando = !tocando;
});

/* ====================
   ATUALIZAR BARRA
==================== */

audio.addEventListener("timeupdate", () => {

    const progresso =
        (audio.currentTime / audio.duration) * 100;

    progressBar.value = progresso;
});

/* ====================
   MOVER BARRA
==================== */

progressBar.addEventListener("input", () => {

    const tempo =
        (progressBar.value / 100) * audio.duration;

    audio.currentTime = tempo;
});

/* ====================
   QUANDO TERMINAR
==================== */

audio.addEventListener("ended", () => {

    tocando = false;

    playBtn.innerHTML = "▶";

    progressBar.value = 0;
});