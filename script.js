let visor = document.getElementById('display');
let botao = document.getElementsByClassName("button");


function adicionarDisplay(){
    ('display')
    visor.innerHTML = ('Clicou!!!')
}


botao.addEventListener('click',adicionarDisplay);