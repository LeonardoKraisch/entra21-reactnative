"use strict";
class Product {
    constructor(id, descricao, preco) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
    }
}
let p1 = new Product(1, 'Feijão', 7.89);
let p2 = new Product(2, 'Arroz', 4.25);
class itemVenda {
    constructor(id, produto, qtd) {
        this.id = id;
        this.produto = produto;
        this.qtd = qtd;
    }
}
let it1 = new itemVenda(1, p1, 10);
let it2 = new itemVenda(2, p2, 15);
class Venda {
    constructor(id, itens) {
        this.id = id;
        this.itens = itens;
    }
}
let venda1 = new Venda(1, [it1, it2]);
console.log(venda1);
