//FILTER
//const meuArray= [
// {nome: 'Gabriel'}, // indice= 0; Array tem o mesmo valor para as tres interações
// {nome: 'Gabriela'},// indice = 1;
//  {nome: 'Lauro'},//indice = 2;
//]

/*
const Array = meuArray.filter(function(){
    //console.log('chamei')
})

// valor atual é o objketo da propiedade nome com o valor de cada campo
const ArrayDois = meuArray.filter(function(valorAtual){ 
    console.log('chamei', valorAtual)
})

// indice retorna a posição do elemento na array
const ArrayTres = meuArray.filter(function(indice){  
    console.log('chamei', indice)
})

// array é o array de qual a função filter foi executada
ArrayQuatro= meuArray.filter(function(array){ 
    console.log('chamei', array)
})


const ArrayDois = meuArray.filter((valorAtual) => { // valor atual é o objketo da propiedade nome com o valor de cada campo
     return (valorAtual.nome.includes('z'))
})

console.log(ArrayDois)                                                             //executar dentro do terminal "node script.js"
*/


//FIND
/*
const meuArray = [
     "Gabriel", // indice= 0; Array tem o mesmo valor para as tres interações
    "Gabriela",// indice = 1;
    "Lauro"//indice = 2;
]
//retorna o nome pesquisado se estiver dentro array
const ArrayUm = meuArray.find((array) => {
        return array === "Gabriel"
})
console.log(ArrayUm)
/home/gabriel/projetos/exemplo-crud/video-criando-novo-array-com-map
//Retorna o primeiro valor que inicia com a letra digitada, então se ter mais de um valor com a inicial igual ele irá mostrar apenas o primeiro valor
 const foundArray = meuArray.find (a => a.startsWith("L"))
 
 console.log ( foundArray)
*/