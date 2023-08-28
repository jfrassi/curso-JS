let texto = '\n          teste    \n';

console.log(texto.trim());

///////
///padStart

let milAoContrario = '1';

console.log(milAoContrario.padStart(6, '0'));


/// split

let frase = "o rato roeu a roupa do rei de roma";

console.log(frase.split())

/// join

let frase1 = "Testando o split";

let palavras = frase1.split(" ")

console.log(frase1);
let fraseMontada = palavras.join('.');
console.log(fraseMontada);


/// repeat

let palavra = "eva e adao" ;
console.log(palavra.repeat(10))