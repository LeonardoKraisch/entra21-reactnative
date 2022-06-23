"use strict";
class Produto {
    constructor(descricao, valorUnitario, qtdEstoque) {
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
        this.qtdEstoque = qtdEstoque;
    }
    getEstoque() {
        return this.qtdEstoque;
    }
    precoComDesconto(taxa, qtd = 1) {
        let porcentagem = taxa / 100;
        let valor = this.valorUnitario - (this.valorUnitario * porcentagem);
        let total = valor * qtd;
        return parseFloat(total.toFixed(2));
    }
    precoComAcrescimo(taxa, qtd = 1) {
        let porcentagem = taxa / 100;
        let valor = (this.valorUnitario * porcentagem) + this.valorUnitario;
        let total = valor * qtd;
        return parseFloat(total.toFixed(2));
    }
}
let arroz = new Produto("arroz", 7.49, 10);
console.log(arroz.getEstoque());
console.log(arroz.precoComDesconto(10));
console.log(arroz.precoComAcrescimo(10, 2));
