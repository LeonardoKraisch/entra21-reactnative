class Animal {
    multicelular: boolean = true
    heterotrofico: boolean = true

    constructor(celulas: boolean, alimentacao: boolean) {
        if (celulas == false || alimentacao == false) {
            console.log("Este ser vivo não pertence à classe animal");
        } else {
            this.multicelular = celulas
            this.heterotrofico = alimentacao
        }
    }
}

class Vertebrado extends Animal {
    coluna: boolean = true
    medula: boolean = true

    constructor(coluna: boolean, medula: boolean, celulas: boolean, alimentacao: boolean) {
        super(celulas, alimentacao)
        if (coluna == false || medula == false) {
            console.log("Este animal não pertence à classe dos vertebrados")
        } else {
            this.coluna = coluna
            this.medula = medula
        }
    }
}

class Mamifero extends Vertebrado {
    pelos: boolean = true
    mamas: boolean = true
    nome: string = ''

    constructor(celulas: boolean, alimentacao: boolean, coluna: boolean, medula: boolean, pelos: boolean, mamas: boolean, nome: string) {
        super(celulas, alimentacao, coluna, medula)
        if (pelos == false || mamas == false) {
            console.log("Este vertebrado não pertence à classe dos mamíferos")
        }else{
            this.nome = nome
        }
    }
}

let boi = new Mamifero(true,true,true,true,true,true,"boi")
console.log(boi)