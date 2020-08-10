const api = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'
const botao = document.querySelector('#iniciarBusca')

var nome = document.querySelector('#nome')
var localidade = document.querySelector('#localidade')

botao.addEventListener('click', function buscarNomes() {
  fetch(`${api}${nome.value}?localidade=${localidade.value}`)
  .then((Response =>{
    return Response.json()
  }))
  .then((data =>{
    console.log(data[0].res)
    document.querySelector('#nomeD').innerHTML.data.nome
    document.querySelector('#localidadeD').innerHTML.data.localidade
    for(i = 0; i < data[0].res.length; i++){
        console.log(data[0].res[i].frequencia)
    }
  }))
})

