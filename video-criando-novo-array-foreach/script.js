/*
//FOR EACH -  permite iterar e executar uma função sobre cada elemento de um array. Permie executa um loop pelos elementos do array
const meuArray = [
    "Gabriel", // indice= 0; Array tem o mesmo valor para as tres interações
   "Gabriela",// indice = 1;
   "Lauro"//indice = 2;
]

meuArray.forEach((valorAtual, indice, Array) => {  //valor do valor Atual é uma referencia pro valor da primeira posição da nossa array
    console.log('chamei')
    
});

console.log('logando o valor de cada nome')

meuArray.forEach((valorAtual) => {  
    console.log(valorAtual)
    
});

console.log('logando o indice de cada nome')
meuArray.forEach((valorAtual,posicao) => {  
    console.log(`A parte     ${valorAtual}    esta na posicao     ${posicao}`)
    
});


console.log('logando cada nome e o array completo ')
meuArray.forEach((valorAtual,posicao, arrayCompleto) => {  
    console.log(valorAtual)
    console.log(posicao)
    console.log(arrayCompleto)
    
});
*/