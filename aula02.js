var btnConvert = document.querySelector("#btn-converter")
btnConvert.disabled = true;

var resultado = document.querySelector("#valorConvertido")

var inputDolar = document.querySelector("#dolar")
var inputBitcoin = document.querySelector("#bitcoin")
var inputEuro = document.querySelector("#euro")

var valorDigitado = document.querySelector("#valor")

valorDigitado.addEventListener('keypress', function(){
    btnConvert.disabled = false;
})

btnConvert.addEventListener('click', function(){

    if(inputDolar.checked == true && valorDigitado.value != null){
        converterDolar();
    } else if (inputBitcoin.checked == true && valorDigitado.value != null){
        converterBitcoin();
    } else if (inputEuro.checked == true && valorDigitado.value != null){
        converterEuro();
    } else{
        alert('Digite um valor!')
    }

})

function converterDolar() {
    var real = parseFloat(valorDigitado.value);
    var valorConvertido = real * 5;
    
    resultado.innerHTML = "Valor convertido: " + valorConvertido + " Reais"
}

function converterEuro(){
    var real = parseFloat(valorDigitado.value);
    var valorConvertido = real * 5.5;
    
    resultado.innerHTML = "Valor convertido: " + valorConvertido + " Reais"
}

function converterBitcoin(){
    var real = parseFloat(valorDigitado.value);
    var valorConvertido = real * 211143.19;
    
    resultado.innerHTML = "Valor convertido: " + valorConvertido + " Reais"
}