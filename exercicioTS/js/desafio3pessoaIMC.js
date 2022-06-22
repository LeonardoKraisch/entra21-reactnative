"use strict";
class Pessoa {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
    calculaImc() {
        var imc = this.peso / (this.altura * this.altura);
        var msg = `${this.nome}, seu IMC é ${imc.toFixed(2)}. `;
        if (imc >= 40) {
            msg += "Seu IMC indica obesidade grave.";
            return msg;
        }
        else if (imc >= 30) {
            msg += "Seu IMC indica obesidade.";
            return msg;
        }
        else if (imc >= 25) {
            msg += "Seu IMC indica sobrepeso.";
            return msg;
        }
        else if (imc >= 18.5) {
            msg += "Seu IMC indica peso normal.";
            return msg;
        }
        else {
            msg += "Seu IMC indica abaixo do peso.";
            return msg;
        }
    }
}
var andre = new Pessoa("André Feuzer", 1.82, 130);
console.log(andre.calculaImc());
