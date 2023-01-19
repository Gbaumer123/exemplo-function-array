//MAP
//a função map recebe como primeiro parametro a função de calback e o retorno sera aplicado para cada item na nossa array 
// a função map cria um novo array e cada retorno do map faz um push no novo array

console.log('chamei')

const meuArray = [
    {nome: 'Gabriel'}, // indice= 0; Array tem o mesmo valor para as tres interações
    {nome: 'Gabriela'},// indice = 1;
     {nome: 'Lauro'},//indice = 2;
]

const novoArray = meuArray.map((item,i, arrayOriginal)=>({
       name:  item.nome,
       position : i,
       calledBy: arrayOriginal,
}))

console.log(novoArray)


const ArrayNovo = []

for (let i = 0; i < meuArray.length; i++){
    ArrayNovo.push({
        name: meuArray[i],
        position: i,
        calledBy: meuArray
    })

}

console.log(ArrayNovo)