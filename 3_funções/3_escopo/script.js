
let y = 10

function imprimir(){
    let y = 150;
    console.log(y);
}

imprimir();
console.log(y);

//escopos de IF também separa os escopos do       global != if

let x = 10;
if(x > 5){
    let x = 20;
    x++;
    console.log(x);

}

console.log(x)


