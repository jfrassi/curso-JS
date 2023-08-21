function saudacao () {
    console.log("hello world!");
}
saudacao();

///

function quantosAnos (idade) {
    console.log(`Você tem ${idade} anos`)
}

quantosAnos(22);

///

function soma (a, b) {

    return a + b;

}

console.log(soma(4,5))

///

function numeroAleatorio (num){
    return Math.floor( Math.random() * num) + 1 ;
}

console.log(numeroAleatorio(10));


//// 

function autorizaEntrada(idade) {
    if(idade >= 18){
        console.log("Pode entrar")
    } else {
        console.log("volte quando tiver 18 anos")
    }

}

autorizaEntrada(18);


///

function whatIs (dado) {
    if( typeof dado === 'string'){
        console.log("Este dado é uma string")
    } else if (typeof dado === 'number') {
        console.log("este dado é um numero")
    } else if (typeof dado === 'boolean') {
        console.log("Este dado é booleano")
    }
}

whatIs("teste");
whatIs(10);
whatIs(true);


/// 

function numeroPos (numNegativo) {
    return Math.abs(numNegativo);
}

console.log(numeroPos(-15))