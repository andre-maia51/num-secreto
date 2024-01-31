const lowestValue = 1
const greaterValue = 200
const secretNumber = gerarNum()

function gerarNum() {
    return parseInt(Math.random()*greaterValue + 1)
}

console.log(secretNumber)

const elementLowestValue = document.querySelector('#lowest-value')
elementLowestValue.innerHTML = lowestValue

const elementGreaterValue = document.querySelector('#greater-value')
elementGreaterValue.innerHTML = greaterValue
