
////

let carro = {
    portas: 2,
    portamalas: "200l",
    motor: "2.0",
}

let adicionais = {
    arcondicionado: true,
    tetosolar: true,
}

console.log(carro)
Object.assign(carro, adicionais);
console.log(carro)

///verificando as chaves de um objeto

let objetoA = {
    chave1: "teste", 
    chave2: 'testando',
}

console.log(Object.keys(objetoA))