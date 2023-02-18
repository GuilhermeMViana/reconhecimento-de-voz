const chute = document.querySelector("#chute");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSApeak);

function onSApeak(e) {
    
    ouvir = e.results[0][0].transcript;

    exibirChute(ouvir);
    verficarChute(ouvir);
}

function exibirChute(ouvir) {
    chute.innerHTML = 
    `<div>Você disse:</div>
    <span class="box">${ouvir}</span>`
}

recognition.addEventListener('end', () => recognition.start())
