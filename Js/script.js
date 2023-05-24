/*


*/

var buscar = document.getElementById('buscar')

const RickAndMorty = function(){

    fetch(`https://rickandmortyapi.com/api/character`)

    .then (response => response.json())

    .then (function(dadosRicky){
        Card(dadosRicky)
    })
}

const NameCard = function (NomePersonagem){
    
    fetch(`https://rickandmortyapi.com/api/character/?name=` + NomePersonagem)

    .then (response => response.json())

    .then (function(dadosRicky){
        Card(dadosRicky);
    })
}

const Card = function (dados){
    //Map para mapear os itens
    dados.results.map(function(item){

        let Card = document.getElementById('card')

        // Criando os elementos
        let picture = document.createElement('div')
        picture.setAttribute('class', 'pic')

        let img = document.createElement('img')
        img.setAttribute('src', item.image)

        let sexo = document.createElement('span')
        sexo.setAttribute('class', 'sexo')
        
        let nome = document.createElement('span')
        nome.setAttribute('class', 'nome')
        
        let status = document.createElement('span')
        status.setAttribute('class', 'status')

        // Buscando as informações dos elementos
        let text_sexo = document.createTextNode(`Sexo: ${item.gender}`)
        let text_nome = document.createTextNode(`${item.name}`)
        let text_status = document.createTextNode(`Status: ${item.status}`)

        //Conectando os elementos ao card
        Card.appendChild(picture)
        picture.appendChild(img)
        picture.appendChild(nome)
        picture.appendChild(sexo)
        picture.appendChild(status)

        // Atribuindo as informações aos elementos
        nome.appendChild(text_nome)
        sexo.appendChild(text_sexo)
        status.appendChild(text_status)
    })
}

window.addEventListener('load', function(){RickAndMorty()})
buscar.addEventListener('click', function(){
        let NomeP = document.getElementById('NomePersonagem').value
        NameCard(NomeP)
})