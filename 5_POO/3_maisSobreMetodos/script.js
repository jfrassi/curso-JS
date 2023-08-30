/// normalmente os métodos interagem com os objetos

let pessoa = {
    nome: " ",
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("João");
console.log(pessoa.getNome())