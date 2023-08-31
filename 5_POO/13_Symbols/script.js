////pode ser utilizando como uma "constante", só que para propriedade e objeto;

class Cachorro {
    constructor(raca){
        this.raca = raca;
    }
}

let poodle = new Cachorro('Poodle');

Cachorro.prototype.raca = "SRD"

let patas = Symbol();

Cachorro.prototype[patas] = 4;

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);    


console.log(Cachorro.prototype[patas]);