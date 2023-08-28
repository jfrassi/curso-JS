let pessoa = {
    "nome":"matheus",
    "idade":28
}

console.log(pessoa.nome);
console.log(pessoa.idade)



/// mais sobre JSON


/* rigoroso na estrutura, apenas aspas duplas, não aceita comentários

*/



////// convertendo json para string de forma fácil


const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson)