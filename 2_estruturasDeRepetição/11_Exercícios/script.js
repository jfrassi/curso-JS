
//exercício 3
const nome = 'joao'
if(nome == 'joao'){
    console.log(`Bem vindo ${nome}`);
}

//exercicio 4
console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

//exercicio 5
let vel = 45
const limite = 60

if(vel > limite){
    console.log(`Você ultrapassou o limite de ${limite} km/h e está a ${vel} km/h`)
} else {
    console.log(`Parabéns condutor! Você está dentro do limte de ${limite} km/h`)
}



//exercicio 6
let idade = 20
let cnh = false

if(idade >= 18 && cnh == true){
    console.log("Pode prosseguir, você está habilitado para dirigir")
} else if(idade >= 18 && cnh == false){
        console.log("Parado, você não tem habilitação para dirigir")
} else {
    console.log("Você é menor de idade")
}

// exercicio 7 
let x = 0

while(x < 10){
    x = x + 1
    console.log(x)
}

//exercicio 8
for(y = 100; y >= 50; y = y -1){
    console.log(y)
}

//exercicio 9
for( let n = 0; n <= 50; n++ ){
    if(n % 2 ==0){
        console.log(`O Número ${n} é par`)
    } else {
        console.log(`O número ${n} é impar`)
    }
    
}

//exercicio 10
let num = 77;
let divisoes = 0;

for(let i = 1; i <= num; i++){
   

    if(num % i == 0){
        divisoes++;
    
        
    }


}

if(divisoes == 2){
    console.log(`O número ${num} é primo!`)
} else {
    console.log(`O número ${num} não é primo`)
    console.log(divisoes)
}
