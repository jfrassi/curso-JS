let arr1 = [1, 2, 3, 4, 5]
console.log(arr1[0])
console.log(arr1[2])
console.log(arr1[3])

////

let arr = [1,2];
let arr2 = [10, 15, 20, 25];

console.log(arr2.length)
console.log(arr.length)


/////

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2,
}

console.log(onibus.passageiros);
console.log(onibus.rodas);
console.log(onibus.portas);


/////

onibus.janelas = 20;
delete onibus.rodas

console.log(onibus);

/////////

let names = ['joao', 'matheus', 'pedro', 'paulo']
if(names.includes('joao')){
    console.log("possui")
}

/////

let arrum = [1,2,3,4,5,6,7,8];
let arr3 = [1,2,3,4];

function eMaior (arr) {
    if(arr.length > 5){
        console.log("maior que 5")
    } else {
        console.log("é menor que 5")
    }
}

eMaior(arrum);
eMaior(arr3);