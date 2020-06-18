var btnCalcular = document.getElementById("calcular");
var btnLimpar = document.getElementById("limpar");
var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var indice;
var filtroTeclas = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
  }
function calcular() {
    var resultado = (peso.value / Math.pow(altura.value, 2)).toFixed(2);
    if (resultado == "NaN"){
        alert("Revise os campos e efetue o calculo novamente!");
        return resultado = "";
    }
    if (resultado < 18.5){
        resultado += "<br>Classificação Magreza";
    }
    else if (resultado < 25){
        resultado += "<br>Classificação Normal";
    }
    else if (resultado < 30){
        resultado += "<br>Classificação sobrepeso";
    }
    else if (resultado < 40){
        resultado += "<br>Classificação Obesidade";
    }
    else {
        resultado += "<br>Classificação  Obesidade Grave";
    }
    return resultado ;
}

btnCalcular.onclick = function() {
    document.getElementById("result").innerHTML = calcular().toString();
}

btnLimpar.onclick = function () {
    peso.value = " ";
    altura.value = " ";
}