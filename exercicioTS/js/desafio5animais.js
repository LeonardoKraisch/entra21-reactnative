"use strict";
class Animal {
    constructor(celulas, alimentacao) {
        this.multicelular = true;
        this.heterotrofico = true;
        if (celulas == false || alimentacao == false) {
            console.log("Este ser vivo não pertence à classe animal");
        }
        else {
            this.multicelular = celulas;
            this.heterotrofico = alimentacao;
        }
    }
}
class Vertebrado extends Animal {
    constructor(coluna, medula, celulas, alimentacao) {
        super(celulas, alimentacao);
        this.coluna = true;
        this.medula = true;
        if (coluna == false || medula == false) {
            console.log("Este animal não pertence à classe dos vertebrados");
        }
        else {
            this.coluna = coluna;
            this.medula = medula;
        }
    }
}
class Mamifero extends Vertebrado {
    constructor(celulas, alimentacao, coluna, medula, pelos, mamas, nome) {
        super(celulas, alimentacao, coluna, medula);
        this.pelos = true;
        this.mamas = true;
        this.nome = '';
        if (pelos == false || mamas == false) {
            console.log("Este vertebrado não pertence à classe dos mamíferos");
        }
        else {
            this.nome = nome;
        }
    }
}
let boi = new Mamifero(true, true, true, true, true, true, "boi");
console.log(boi);
