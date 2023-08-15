function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log("Seu nome é " + nome)
    } else {
        console.log("Seu nome é " + nome + "e sua idade é de " + idade + " anos")
    }
}

nomeComIdade("joão");
nomeComIdade("joão", 25);

//argumentos com valores default

function repetirFrase(frase, n=2){
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase( "testando", 5);
repetirFrase("Só duas vezes");