let randomNumber = Math.round(Math.random() * 10);
const btnReset = document.querySelector('#btnReset')

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', tryAgain)

//CallBacks
function handleClick(event) {
    console.log(xAttempts)
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value == randomNumber){
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++;
}

function tryAgain(event){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}