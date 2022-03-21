let faixas = [
    {
        titulo:'Malvadão',
        artista:'Luka Bass',
        img:'image/teste.jpg',
        file:'music/01.mp3'
    },
    {
        titulo:'Sentadão',
        artista:'Luka Bass',
        img:'image/teste.jpg',
        file:'music/02.mp3'
    },{
        titulo:'Crockada',
        artista:'Luka Bass',
        img:'image/teste.jpg',
        file:'music/03.mp3'
    }
];


let music = document.querySelector('audio');
let indexMusica = 0;

let imagem = document.querySelector('.img');
let nameMusic = document.querySelector('.nameMusic')
let nameArtist = document.querySelector('.artist');
renderizarMusic(indexMusica);

document.querySelector('.btnPlay').addEventListener('click', playMusic);
document.querySelector('.btnPause').addEventListener('click', pauseMusic);

document.querySelector('.prev').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0)
    {
        indexMusica = 2;
    }
    renderizarMusic(indexMusica);
});
document.querySelector('.next').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2)
    {
        indexMusica = 0;
    }
    renderizarMusic(indexMusica);
});


music.addEventListener('timeupdate', timeProgress);

window.onload = duration

function renderizarMusic(index) {
    music.setAttribute('src', faixas[index].file);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = faixas[index].titulo;
        nameArtist.textContent = faixas[index].artista;
        imagem.src = faixas[index].img;
        timeFim.textContent = timeFormatTemp(Math.floor(music.duration));

    });
}

function playMusic () {
    music.play();
    document.querySelector('.btnPause').style.display = 'block';
    document.querySelector('.btnPlay').style.display = 'none';
}

function pauseMusic () {
    music.pause();
    document.querySelector('.btnPause').style.display = 'none';
    document.querySelector('.btnPlay').style.display = 'block';
}

function timeProgress () {
    let progress = document.querySelector('.progresso');
    progress.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timeInitial = document.querySelector('.inicio');
    timeInitial.textContent = timeFormatTemp(Math.floor(music.currentTime));
}

function timeFormatTemp (seconds) {
    let cpMinuto = Math.floor(seconds / 60);
    let cpSeconds = seconds % 60;
    if (cpSeconds < 10)
    {
        cpSeconds = '0' + cpSeconds;
    }

    return '0' + cpMinuto + ':' + cpSeconds;
}

function duration() {
    let timeFim = document.querySelector('.fim');
    timeFim.textContent = timeFormatTemp(Math.floor(music.duration));
}
