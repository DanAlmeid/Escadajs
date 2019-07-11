// Exercicio 
let escada = '#';
for(let i = 0; i <= 5;i++){
    console.log(escada);
    escada += '#';
}


let tipo = prompt('digite o tipo')
let escada2 = tipo;

let qtd = Number(prompt('digite a quantidade de degrais'));

while(isNaN(qtd)){
    qtd = Number(prompt('Oque voce digitou não é um numero, tente novamente'));
}

for(let i = 0; i<=qtd; i++){
    console.log(escada2);
    escada2 += tipo;
}
