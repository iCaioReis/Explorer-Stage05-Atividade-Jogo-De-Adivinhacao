const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event) {
    console.log(xAttempts)
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++;
}

function tryAgain(event){
    
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    xAttempts = 1
}

//Eventos

const btnTry = document.querySelector('#btnTry')
btnTry.addEventListener('click', handleClick)

const btnReset = document.querySelector('#btnReset')
btnReset.addEventListener('click', tryAgain)