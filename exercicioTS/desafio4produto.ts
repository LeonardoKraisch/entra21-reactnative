class Produto {
    descricao: string
    valorUnitario: number
    qtdEstoque: number

    constructor(descricao:string, valorUnitario:number, qtdEstoque:number){
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.qtdEstoque = qtdEstoque
    }

    getEstoque(): number{
        return this.qtdEstoque
    }

    precoComDesconto(taxa: number, qtd: number = 1): number{
        let porcentagem: number = taxa / 100
        let valor: number = this.valorUnitario - (this.valorUnitario * porcentagem)
        let total: number = valor * qtd
        return parseFloat(total.toFixed(2))
    }

    precoComAcrescimo(taxa: number, qtd: number = 1): number{
        let porcentagem: number = taxa / 100
        let valor: number = (this.valorUnitario * porcentagem) + this.valorUnitario
        let total: number = valor * qtd
        return parseFloat(total.toFixed(2))
    }
}

let arroz = new Produto("arroz", 7.49, 10)

console.log(arroz.getEstoque());
console.log(arroz.precoComDesconto(10));
console.log(arroz.precoComAcrescimo(10, 2));
