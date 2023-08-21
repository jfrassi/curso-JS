for(let i =5; i <20; i = i + 1){
    if(i % 10 == 0){
        console.log("Saiu do loop");
        break;
    }
    console.log("Prosseguindo o loop")
    console.log("o índice é " + i)
}

let nome = "matheus";
for(let i = 0; i < 10; i = i + 1){
    
    if (i == 3){
        nome = "joão";
    }
    if(i == 5 && nome == "joão"){
        console.log("O meu nome é joão, pode parar já");
        break;
    }
    console.log(i);
    
}