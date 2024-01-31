function verificaChute(value) {
    const num = +value

    if(verificaNumValido(num)) {
        if(value.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2 class="win-title">Game Over!</h2>
                <h3 class="subtitle">Pressione o botão para jogar novamente. <i class="fa-regular fa-hand-point-down"></i></h3>
                <button id="play-again" class="btn-play">Jogar Novamente</button>
            `
        } else {
            elementoChute.innerHTML += `
                <div>Valor Inválido! Você deve informar um número.</div> 
            `
            return
        }
    }

    if(verificaRange(num)) {
        elementoChute.innerHTML += `
            <div>Valor Inválido! O número deve estar entre ${lowestValue} e ${greaterValue}.</div> 
        `
        return
    }

    if(num === secretNumber) {
        document.body.innerHTML = `
            <h2 class="win-title">Você Acertou!</h2>
            <h3 class="subtitle">O número secreto era ${secretNumber}! Você acertou em ${cont} tentativas.  <i class="fa-solid fa-face-laugh-squint"></i> </h3>

            <button id="play-again" class="btn-play">Jogar Novamente</button>
        `

    } else if(num > secretNumber) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function verificaRange(num) {
    return num > greaterValue || num < lowestValue
}

function verificaNumValido(num) {
    return Number.isNaN(num)
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again') {
        window.location.reload()
    }
})
