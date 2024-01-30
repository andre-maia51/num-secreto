const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (e) => {
    const value = e.results[0][0].transcript
    exibeChute(value)
    verificaChute(value)
})

function exibeChute(value) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${value}</span>

    `
}

recognition.addEventListener('end', () => recognition.start())