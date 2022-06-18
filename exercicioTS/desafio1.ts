interface compra {
    id: number
    cliente: string
    produtos: produto[]
    endereco: string
}

interface produto {
    descricao: string
    valor: number
    quantidade: number
}

var carrinho: compra = {id:1, cliente:"Leo", produtos:[], endereco:"Timbó"}

var feijao: produto = {descricao:"feijao", valor:10, quantidade:2}
carrinho.produtos.push(feijao)

var carne: produto = {descricao:"carne", valor:40, quantidade:3}
carrinho.produtos.push(carne)

console.log(carrinho);
