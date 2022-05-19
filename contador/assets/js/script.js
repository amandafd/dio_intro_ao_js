var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const subtrair = document.getElementById("subtrair");
subtrair.addEventListener("click", decrement);

const adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", increment);


//para deixar o número vermelho quando for negativo, adicionar em ambas funções, que serão o que farão com que se adicione ou subtraia um número. Importante adicionar a função para que volte a ficar preto quando for positivo.
function increment() {
    if(currentNumber >= 10){
        document.getElementById("increment").disabled = true;
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if(currentNumber < 0){ 
        document.getElementById("currentNumber").style.color = "red";
    }

    if(currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

function decrement() {
    if(currentNumber < 0){
        document.getElementById("decrement").disabled = true;
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){ 
        document.getElementById("currentNumber").style.color = "red";
    }

    if(currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

