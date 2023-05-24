var menu = document.querySelector('.item')

const MenuIn = function (){
    let principal = document.getElementById('principal')
    let personagens = document.getElementById('caracteres')
    let history = document.getElementById('history')

    let p_principal = document.createElement('p')
    p_principal.setAttribute('class', 'home')
    let p_personagens = document.createElement('p')
    p_personagens.setAttribute('class', 'home')
    let p_history = document.createElement('p')
    p_history.setAttribute('class', 'home')
    
    let text_principal = document.createTextNode(`Home`)
    let text_personagens = document.createTextNode(`Personagens`)
    let text_history = document.createTextNode(`Historia`)

    principal.appendChild(p_principal)
    personagens.appendChild(p_personagens)
    history.appendChild(p_history)

    p_principal.appendChild(text_principal)
    p_personagens.appendChild(text_personagens)
    p_history.appendChild(text_history)
}

const MenuLimpar= function(){
    let home = document.querySelector('.home')
    home.innerText= ''
}

// menu.addEventListener('mouseover', function(){
//     MenuIn()
// })

// menu.addEventListener('mouseout', function(){
//     MenuLimpar()
// })
