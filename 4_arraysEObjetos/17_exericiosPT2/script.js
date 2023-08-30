let frutas = ['maçã', 'morango', 'banana', 'melao', 'melancia'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

////////


const casa1 = {
    "portas" : 2,
    "janelas" : 4,
    "piscina" : "sim"
}

const casa2 = {
    "portas": 1,
    "janelas": 6,
    "piscina": "nao",
}

const casa3 = {
    "portas": 3,
    "janelas": 8,
    "piscina": "sim"
}

console.log(casa3.portas)
console.log(casa2.portas)
console.log(casa1.portas)

/////
let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split(" ")

for(let x = 0; x <palavras.length; x++){
    console.log(palavras[x])
}

////////

const calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    dividir: function(a, b){
        return a / b;
    },
    multiplicar: function(a, b){
        return a * b;
    }
}


console.log(calculadora.soma(10,5));
console.log(calculadora.subtrair(10,5));
console.log(calculadora.multiplicar(10,5));
console.log(calculadora.dividir(10,5));






