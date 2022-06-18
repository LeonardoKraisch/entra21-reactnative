"use strict";
var carrinho = { id: 1, cliente: "Leo", produtos: [], endereco: "Timbó" };
var feijao = { descricao: "feijao", valor: 10, quantidade: 2 };
carrinho.produtos.push(feijao);
var carne = { descricao: "carne", valor: 40, quantidade: 3 };
carrinho.produtos.push(carne);
console.log(carrinho);
