const chute = document.querySelector("#chute");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSApeak);

function onSApeak(e) {
    console.log(e)
    
    ouvir = e.results[0][0].transcript;

    exibirChute(ouvir);
}

function exibirChute(ouvir) {
    chute.innerHTML = 
    `<div>Você disse:</div>
    <span class="box">${ouvir}</span>`
}
