function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("auuuuuu");
}

let pug = new Cachorro('Pug', 4, 'branco');

console.log(pug.cor);
pug.uivar();