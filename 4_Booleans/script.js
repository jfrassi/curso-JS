
//guardam um único valor de uma comparação
//só existem 2 valores possíveis
true;
false;


///exemplo
console.log(10>2);
console.log(5>200);
console.log(5>3);
console.log(2>10);


/* comparações com boolean

Maior que: >
Menor que: <
Maior ou igual: >=
Menor ou igual: <=
Igual: ==
Diferente: !=

Identico: ===       


EXemplificando
*/


console.log(10>2);
console.log(5>200);
console.log(5<=3);
console.log(2>=10);
console.log(10==2);
console.log("3"==3);
console.log("3"===3);
console.log(3===3);

///operadores lógicos booleanos
/* && = and -> para ser true, os dois lados da comparação precisam ser true
    || - or -> para ser true, basta um dos lados da comparação ser true
    ! - not -> inverter os valores (true vira false)  */

//&& , and
console.log(2>1 && 1>3);
console.log(2>1 && 10>3);

// ||  = or
console.log(3>5 || 5>6)
console.log(2>1 || 5<1)

//   ! - not -> inverte os valores (true vira false)

console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(false || true);

console.log(5>3 && 3 == 1);
console.log(5>3 || 3 == 1);

// operador ternário
console.log(true ?2:1);
console.log(false ? 'falso':'verdadeiro');

console.log(5 > 2 ? 'É sim' : 'É não');