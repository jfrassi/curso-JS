const soma = function(a, b) {
    return a + b;
}

console.log(soma(3, 5));


const saudacao = function(nome){ 
    if(nome == "joao"){
        return "olá joão";
    }
}

console.log(saudacao("joao"))


function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("pode dirgir");
    } else {
        console.log("não pode dirgir");
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(17, 0));


//escopo de uma função