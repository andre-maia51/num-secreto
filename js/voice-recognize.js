const elementoChute = document.querySelector('#chute')
let cont = 0

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (e) => {
    const value = e.results[0][0].transcript
    exibeChute(value)
    verificaChute(value)
    calculaTentativas()
})

function exibeChute(value) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${value}</span>
    `
}

function calculaTentativas() {
    cont++;
    elementoChute.innerHTML += `
        <div class="text-tentativa">Tentativas: ${cont}</div>
    `
}

recognition.addEventListener('end', () => recognition.start())
