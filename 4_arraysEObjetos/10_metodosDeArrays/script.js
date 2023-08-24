let pessoas = [ "matheus", 'joao', 'ricardo'];

/*let pessoaRemovida = pessoas.pop();


console.log(pessoaRemovida)

let pessoaRemovida2 = pessoas.pop();

console.log(pessoaRemovida2)*/

pessoas.push("maria");

console.log(pessoas);

///shift e unshift

let frutas = ['maçã', 'melão', 'uva'];

let frutaRemovida = frutas.shift();


console.log(frutaRemovida);

frutas.unshift("morango");

console.log(frutas[0])

/// index of e last index of

let numeros = [0, 0, 1, 3, 1];

console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));


/// slice


let nums = [1, 2, 3, 4, 5];

console.log(nums.slice(2,3))

console.log(nums.slice(1))

///forEach

const names = ['matheus', 'maria', 'joao', 'pedro', 'iuri'];

names.forEach(name => {
    console.log("o nome é", name)
})


/// includes

let carros = ['BMW', 'Fiat', "VW", 'Audi', 'Renault'];
console.log(carros.includes('Fiat'));


/// reverse

let arr = ['socorram','me', 'subi', 'no', 'onibus', 'em', 'marrocos'];

console.log(arr);

console.log(arr.reverse());




