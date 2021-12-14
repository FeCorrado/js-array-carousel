const titoli = ['titolo1', 'titolo2', 'titolo3', 'titolo4', 'titolo5'];
const paragrafi = [
    'ROMA - è arrivata la circolare del ministero dell Interno sull obbligo vaccinale per le forze dellordine - sicurezza, difesa e soccorso pubblico - e, separatamente, quella per il personale scolastico. Lo prevede l ultimo decreto sulle misure anti-Covid varato dal governo: l obbligo scatta domani, mercoledì 15 dicembre.',
    'L obbligo riguarda anche gli assenti dal servizio. "Il giorno 15 dicembre - si legge nella circolare - il personale tutto, anche se assente per legittimi motivi, dovrà produrre al responsabile della propria struttura la documentazione attestante ladempimento".',
    'Se la documentazione non arriverà, l amministrazione competente dovrà invitare l interessato, "senza indugio", a produrre entro cinque giorni dalla ricezione dellinvito la documentazione richiesta. Per chi non si vaccina tra le forze dell ordine, ',
    'Le paritarie realizzano controlli autonomi, non essendo inserite nel Sistema informativo dell istruzione (Sidi). Su questa piattaforma, già attivata a settembre per il controllo del green pass a scuola (il semaforo verde o rosso), ',
    'Tra la seconda e la terza dose devono intercorrere almeno cinque mesi. La validità della carta verde, dalla fine del primo ciclo vaccinale (dose 1 e 2) o dal richiamo (dose 3) vale per nove mesi.'
];
const immagini = [
    'img/le-piu-belle-foto-del-2019-15.jpg',
    'img/b99f667f-ff0a-44be-9ea4-f728b1c6c711_large.webp',
    'img/images.jpg',
    'img/73615ccd65_74606446.jpg',
    'img/le-piu-belle-foto-del-2019-09.jpg'
]
let currentIndex = 0;

const titolo = document.querySelector('.up')
const paragrafo = document.querySelector('.down')
const nextButton = document.querySelector('.arrow-right')
const preButton = document.querySelector('.arrow-left')
const imgg = document.querySelector('.img')

titolo.innerHTML = titoli[currentIndex];
paragrafo.innerHTML = paragrafi[currentIndex];
imgg.innerHTML = immagini[currentIndex];

nextButton.addEventListener(`click`, function () {
    currentIndex++;
    if(currentIndex >= titoli.length){
        currentIndex = 0;
    }
    titolo.innerHTML = titoli[currentIndex];
    paragrafo.innerHTML = paragrafi[currentIndex];
    imgg.src = immagini[currentIndex];
})

preButton.addEventListener(`click`, function () {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = titoli.length - 1;
    }
    titolo.innerHTML = titoli[currentIndex];
    paragrafo.innerHTML = paragrafi[currentIndex];
    imgg.src = immagini[currentIndex];
})

